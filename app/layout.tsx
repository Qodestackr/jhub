'use client';
import './globals.css';
import './data-tables-css.css';
import './satoshi.css';
import { useState, useEffect } from 'react';
import Loader from '../components/common/Loader';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Headerzz from '../components/Headerzz';
import Footer from '../components/footer/Footer';

// Root Layout Component
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10); // Simulate AJAX Load/ Request.
  }, []);

  // const isAuthenticated = true;

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Headerzz />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                    <Footer />
                  </div>
                </main>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
