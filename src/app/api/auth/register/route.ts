import { NextRequest, NextResponse } from 'next/server';
import { registerSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request data
    const validationResult = registerSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dữ liệu không hợp lệ',
          errors: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const { name, email, password, phone } = validationResult.data;

    // Call backend API
    const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, phone }),
    });

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        { 
          success: false, 
          message: data.message || 'Đăng ký thất bại' 
        },
        { status: backendResponse.status }
      );
    }

    // Auto login after successful registration
    const response = NextResponse.json({
      success: true,
      message: 'Đăng ký thành công',
      user: data.user
    });

    // Set httpOnly cookie for token if backend returns one
    if (data.token) {
      response.cookies.set('auth-token', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        path: '/'
      });
    }

    return response;

  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Lỗi máy chủ nội bộ' 
      },
      { status: 500 }
    );
  }
}
