import AuthForm from '@/components/auth/AuthForm';
import VerificationSuccess from './VerificationSuccess';

interface LoginPageProps {
  searchParams: {
    verified?: string;
  };
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  
  const isVerified = searchParams.verified === 'true';

  if (isVerified) {

    return <VerificationSuccess />;
  }
  return <AuthForm type="login" />;
}