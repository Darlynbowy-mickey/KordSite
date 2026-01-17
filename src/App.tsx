import './App.css'

import React from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
