'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { cn } from '@/utils/cn';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { translate } = useLanguage();

  // Itens de navegação com tradução
  const navigationItems = [
    { key: 'resources', href: '/recursos', label: translate('navigation.resources', 'Recursos') },
    { key: 'for-who', href: '/para-quem', label: translate('navigation.for_who', 'Para Quem') },
    { key: 'pricing', href: '/precos', label: translate('navigation.pricing', 'Preços') },
    { key: 'blog', href: '/blog', label: translate('navigation.blog', 'Blog') }
  ];

  // Efeito para detectar scroll e modificar o header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-white shadow-md" 
          : "py-4 bg-white/95 backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <Image 
              src="/images/focol-logo.png" 
              alt="Focol Logo" 
              width={140} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(item => (
              <Link 
                key={item.key} 
                href={item.href} 
                className="font-medium text-base text-gray-400 hover:text-primary hover:underline hover:underline-offset-8 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA para desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher variant="default" />
            <Button variant="primary" size="md" href="/contato">
              {translate('navigation.schedule_demo', 'Agende uma demonstração')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-black p-2 z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
              className="p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col gap-6 p-6 mt-8">
            {navigationItems.map(item => (
              <Link 
                key={item.key}
                href={item.href} 
                className="text-xl font-medium text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <LanguageSwitcher variant="minimal" className="mb-6" />
              <Button variant="primary" size="full" href="/contato">
                {translate('navigation.schedule_demo', 'Agende uma demonstração')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;