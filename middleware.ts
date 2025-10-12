import { NextRequest, NextResponse } from 'next/server';
import { getAuthToken, verifyToken } from '@/lib/auth/session';
import { UserSession } from '@/types/auth';

// Các đường dẫn cần đăng nhập để truy cập
const protectedRoutes = [
  '/main/profile',
  '/main/cart',
  '/main/checkout',
  '/main/orders'
];

// Các đường dẫn sẽ chuyển hướng đi nếu đã đăng nhập
const authRoutes = [
  '/auth/login',
  '/auth/register'
];

// Các đường dẫn yêu cầu quyền admin
const adminRoutes = [
  '/admin'
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = getAuthToken(request);

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));

  // 1. Xử lý các trang yêu cầu đăng nhập
  if (isProtectedRoute) {
    if (!token) {
      // Nếu không có token, chuyển hướng đến trang đăng nhập với returnUrl
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('returnUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const payload = await verifyToken(token);
    if (!payload) {
      // Token không hợp lệ, xóa cookie và chuyển hướng về trang đăng nhập
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      response.cookies.delete('auth-token');
      return response;
    }
  }

  // 2. Xử lý các trang yêu cầu quyền admin
  if (isAdminRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    const payload = await verifyToken(token) as UserSession; // Ép kiểu để có gợi ý code
    if (!payload) {
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      response.cookies.delete('auth-token');
      return response;
    }
    
    // Giả sử role_id = 1 là admin
    if (payload.role_id !== 1) {
      // Nếu không phải admin, chuyển hướng về trang chủ
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 3. Xử lý các trang đăng nhập/đăng ký
  if (isAuthRoute) {
    if (token) {
      const payload = await verifyToken(token);
      if (payload) {
        // Nếu đã đăng nhập, chuyển hướng khỏi trang auth
        const returnUrl = request.nextUrl.searchParams.get('returnUrl');
        const redirectUrl = returnUrl && returnUrl.startsWith('/') ? returnUrl : '/main'; // Mặc định về /main
        return NextResponse.redirect(new URL(redirectUrl, request.url));
      }
    }
  }

  // Nếu không rơi vào các trường hợp trên, cho phép request đi tiếp
  return NextResponse.next();
}

// Cấu hình các đường dẫn mà middleware sẽ chạy
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication API routes)
     * - api/public (các API công khai không cần auth)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/auth|api/public|_next/static|_next/image|favicon.ico).*)',
  ],
};
