'use client';

import { Inter } from 'next/font/google';
import { useTheme } from 'next-themes';
import { SidebarProvider, SidebarTrigger } from "../src/components/ui/sidebar";
import { AppSidebar } from "../src/components/ui/app-sidebar";

const inter = Inter({ subsets: ['latin'] });

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <body className={inter.className}>
        <div className="flex">
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </div>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-800 text-white dark:bg-white dark:text-black"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </body>
    </html>
  );
}