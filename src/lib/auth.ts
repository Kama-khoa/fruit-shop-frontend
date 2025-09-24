import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Get auth token from request cookies
export function getAuthToken(request: NextRequest): string | null {
  return request.cookies.get('auth-token')?.value || null;
}

// Verify JWT token (for middleware use)
export async function verifyToken(token: string): Promise<any> {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

// Check if user is authenticated
export function isAuthenticated(request: NextRequest): boolean {
  const token = getAuthToken(request);
  return !!token;
}

// Client-side auth utilities
export class AuthService {
  // Login
  static async login(credentials: { email: string; password: string }) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Đăng nhập thất bại');
    }

    return data;
  }

  // Register
  static async register(userData: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }) {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Đăng ký thất bại');
    }

    return data;
  }

  // Logout
  static async logout() {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Đăng xuất thất bại');
    }

    return data;
  }

  // Get current user
  static async getCurrentUser() {
    const response = await fetch('/api/auth/me', {
      method: 'GET',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Không thể lấy thông tin người dùng');
    }

    return data;
  }

  // Check if user is logged in (client-side)
  static async checkAuth(): Promise<boolean> {
    try {
      await this.getCurrentUser();
      return true;
    } catch (error) {
      return false;
    }
  }
}