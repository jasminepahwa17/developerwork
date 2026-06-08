import type { ReactNode } from 'react';
import './global.css';
import Navbar from '../components/layout/Navbar';

export const metadata = {
  title: 'Jasmine Pahwa - Frontend Engineer',
  description: 'Jasmine Pahwa - Frontend Engineer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
