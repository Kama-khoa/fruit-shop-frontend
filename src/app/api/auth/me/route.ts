import { NextRequest, NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = getAuthToken(request);
    
    if (!token) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Chưa đăng nhập' 
        },
        { status: 401 }
      );
    }

    // Call backend API to get user info
    const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!backendResponse.ok) {
      // If token is invalid, clear the cookie
      const response = NextResponse.json(
        { 
          success: false, 
          message: 'Token không hợp lệ' 
        },
        { status: 401 }
      );
      response.cookies.delete('auth-token');
      return response;
    }

    const data = await backendResponse.json();

    return NextResponse.json({
      success: true,
      user: data.user
    });

  } catch (error) {
    console.error('Get user info error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Lỗi máy chủ nội bộ' 
      },
      { status: 500 }
    );
  }
}