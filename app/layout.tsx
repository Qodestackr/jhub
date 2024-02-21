import './globals.css';
import './data-tables-css.css';
import './satoshi.css';

import Headerzz from '../components/Headerzz';
import Footer from '../components/footer/Footer';

// Root Layout Component
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Headerzz />
              <main>
                <div className="p-4 md:p-0">
                  {children}
                  <Footer />
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
