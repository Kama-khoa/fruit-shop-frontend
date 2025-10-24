'use client';

import { useSearchParams } from 'next/navigation';
import AuthForm from "@/components/auth/AuthForm";
import VerificationSuccess from "./VerificationSuccess";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const isVerified = searchParams.get('verified') === 'true';
  return isVerified ? <VerificationSuccess /> : <AuthForm type="login" />;
}
