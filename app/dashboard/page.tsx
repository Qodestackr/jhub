'use client';
import { useState, useLayoutEffect } from 'react';
import { Metadata } from 'next';
import JHUBTrade from '../../components/Dashboard/E-commerce';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

import Loader from '../../components/common/Loader';

export default function Home() {
  const [userLoading, setUserLoading] = useState<boolean>(false);
  const { user } = useAuthContext();
  const router = useRouter();

  useLayoutEffect(() => {
    // Check authentication status here
    const checkAuthentication = async () => {
      try {
        setUserLoading(true);

        // Your authentication logic, e.g., fetching user data or verifying authentication status
        // If the user is not authenticated, you can redirect to the login page
        if (!user) {
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // Handle the error as needed, e.g., redirecting to the login page
        router.push('/auth/login');
      } finally {
        setUserLoading(false);
      }
    };

    checkAuthentication();
  }, [user, router]);

  if (userLoading) {
    // Render a loading spinner or other indication while checking authentication
    return <Loader />;
  }

  return (
    <section className="h-screen">{user ? <JHUBTrade /> : <Loader />}</section>
  );
}
