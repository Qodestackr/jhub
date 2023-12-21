'use client';

import Head from 'next/head';
import { useState, useEffect, useLayoutEffect } from 'react';
import Loader from '../../components/common/Loader';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../../context/AuthContext';

// RootLayout component
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  return (
    <>
      {user && (
        <div className="dark:bg-boxdark-2 dark:text-bodydark h-screen">
          {userLoading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />

              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                  isDashboard={true}
                />

                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
