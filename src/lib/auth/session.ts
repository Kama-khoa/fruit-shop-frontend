import { NextRequest } from 'next/server';
import { jwtVerify, SignJWT } from 'jose';
import { UserSession } from '@/types/auth';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}
const secretKey = new TextEncoder().encode(JWT_SECRET);

/**
 * Lấy auth token từ request cookies.
 * @param request - NextRequest object
 * @returns Token string hoặc null
 */
export function getAuthToken(request: NextRequest): string | null {
  return request.cookies.get('auth-token')?.value || null;
}

/**
 * Xác thực một JWT token.
 * @param token - JWT string
 * @returns Payload đã giải mã nếu token hợp lệ, ngược lại trả về null.
 */
export async function verifyToken(token: string): Promise<UserSession | null> {
  try {
    const { payload } = await jwtVerify<UserSession>(token, secretKey);
    return payload;
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return null;
  }
}
