'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detecta quando a página é rolada para alterar o estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-montserrat font-bold text-2xl text-gray-900">Focol</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/features" className="font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Funcionalidades
            </Link>
            <Link href="/pricing" className="font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Preços
            </Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Sobre
            </Link>
            <Link href="/blog" className="font-medium text-gray-700 hover:text-purple-700 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/demo" className="px-4 py-2 text-purple-700 font-medium hover:text-purple-800 transition-colors">
              Demonstração
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-purple-700 text-white rounded-md font-medium hover:bg-purple-800 transition-colors">
              Comece Grátis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link 
              href="/features" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              href="/pricing" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preços
            </Link>
            <Link 
              href="/about" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="/blog" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2 space-y-2">
              <Link 
                href="/demo" 
                className="block w-full py-2 px-4 text-center text-purple-700 border border-purple-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demonstração
              </Link>
              <Link 
                href="/signup" 
                className="block w-full py-2 px-4 text-center bg-purple-700 text-white rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comece Grátis
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}