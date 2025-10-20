'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useNavigation } from '@/lib/utils/navigation';
import { ROUTES } from '@/lib/utils/routes';
import { useAuth, useRegister } from '@/lib/hooks/useAuth';
import { EyeIcon, EyeOffIcon } from '../ui/Icons';

type AuthFormProps = {
  type: 'login' | 'register';
};

export default function AuthForm({ type }: AuthFormProps) {

  const { navigateTo, goToLogin } = useNavigation();
  const { login, isLoading: isLoggingIn, error: loginError } = useAuth();
  const { register, isLoading: isRegistering, error: registerError } = useRegister();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isLogin = type === 'login';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      try {
        await login({ email, password }, rememberMe);
        console.log('✅ Đăng nhập thành công!');
        navigateTo(ROUTES.MAIN.HOME);
      } catch (err: any) {
        console.error('❌ Lỗi đăng nhập:', err.message);
      }
    } else {
      if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }
      try {
        await register({ name, email, password });
        console.log('✅ Đăng ký thành công! Vui lòng đăng nhập.');
        navigateTo(ROUTES.AUTH.VERIFY_EMAIL);
      } catch (err: any) {
        console.error('❌ Lỗi đăng ký:', err.message);
      }
    }
  };

  const isLoading = isLoggingIn || isRegistering;
  const error = isLogin ? loginError : registerError;
  const commonInputClasses = "w-full px-3.5 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-gray-300 focus:outline-green-500 font-['Open_Sans'] text-base placeholder:text-slate-400";
  const commonLabelClasses = "block text-gray-950 text-xs font-['Inter'] leading-tight mb-2";

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
      <div className="w-full max-w-[540px] bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(12,143,3,0.25)] p-8">
        <div className="flex items-center justify-center mb-4 border-b pb-4">
          <Link href={ROUTES.AUTH.LOGIN} className={`px-4 font-['IBM_Plex_Serif'] text-3xl font-semibold leading-10 ${isLogin ? 'text-gray-900' : 'text-gray-400'}`}>
            Đăng nhập
          </Link>
          <Link href={ROUTES.AUTH.REGISTER} className={`px-4 font-['IBM_Plex_Serif'] text-3xl font-semibold leading-10 ${!isLogin ? 'text-gray-900' : 'text-gray-400'}`}>
            Đăng ký
          </Link>
        </div>

        <p className="text-center text-gray-950 text-xs font-['Inter'] leading-tight mb-6">
          {isLogin 
            ? 'Nếu bạn đã có tài khoản thì hãy đăng nhập bằng email'
            : 'Tạo tài khoản mới để bắt đầu mua sắm tại Fruity Fruit'
          }
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* --- VÙNG HIỂN THỊ LỖI ĐÃ CẬP NHẬT --- */}
          {error && (
            <div className="p-3 my-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
              <span className="font-medium">
                {isLogin
                  ? (error.toLowerCase().includes('not found') || error.toLowerCase().includes('không tìm thấy'))
                    ? "Tài khoản chưa được đăng ký. "
                    : `Lỗi: ${error}`
                  : (error.toLowerCase().includes('conflict') || error.toLowerCase().includes('exists') || error.toLowerCase().includes('đã tồn tại'))
                    ? "Email này đã có tài khoản liên kết."
                    : `Lỗi: ${error}`
                }
              </span>
              {isLogin && (error.toLowerCase().includes('not found') || error.toLowerCase().includes('không tìm thấy')) && (
                <Link href={ROUTES.AUTH.REGISTER} className="font-semibold underline ml-1">Hãy đăng ký</Link>
              )}
              {!isLogin && (error.toLowerCase().includes('conflict') || error.toLowerCase().includes('exists') || error.toLowerCase().includes('đã tồn tại')) && (
                <div className="mt-1">
                  <span>Bạn quên mật khẩu? </span>
                  <Link href={ROUTES.AUTH.FORGOT_PASSWORD} className="font-semibold underline">Lấy lại mật khẩu</Link>
                </div>
              )}
            </div>
          )}
          
          {/* REGISTER-ONLY FIELDS */}
          {!isLogin && (
            <div>
              <label htmlFor="name" className={commonLabelClasses}>Họ và tên *</label>
              <input id="name" name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập đầy đủ họ và tên" className={commonInputClasses} />
            </div>
          )}

          {/* COMMON FIELDS */}
          <div>
            <label htmlFor="email" className={commonLabelClasses}>Email *</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email của bạn" className={commonInputClasses} />
          </div>

          <div>
            <label htmlFor="password" className={commonLabelClasses}>Mật khẩu *</label>
            <div className="relative">
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete={isLogin ? "current-password" : "new-password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu của bạn" className={commonInputClasses} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                {showPassword ? <EyeOffIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
              </button>
            </div>
          </div>
          
          {/* REGISTER-ONLY: CONFIRM PASSWORD */}
          {!isLogin && (
            <div>
              <label htmlFor="confirm-password" className={commonLabelClasses}>Xác nhận mật khẩu *</label>
              <div className="relative">
                <input id="confirm-password" name="confirm-password" type={showConfirmPassword ? 'text' : 'password'} autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Xác minh mật khẩu" className={commonInputClasses} />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                    {showConfirmPassword ? <EyeOffIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                </button>
              </div>
            </div>
          )}

          {/* LOGIN-ONLY: REMEMBER & FORGOT */}
          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                <label htmlFor="remember-me" className="ml-2 block text-gray-950 text-xs font-['Inter']">Lưu tài khoản</label>
              </div>
              <div className="text-xs">
                <Link href={ROUTES.AUTH.FORGOT_PASSWORD} className="font-medium text-blue-700 hover:text-blue-600 font-['Inter']">Quên mật khẩu?</Link>
              </div>
            </div>
          )}

          <div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-['Inter'] disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Đang xử lý...' : (isLogin ? 'Đăng nhập' : 'Đăng ký')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}