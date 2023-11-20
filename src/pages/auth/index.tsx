import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return null;
} 
