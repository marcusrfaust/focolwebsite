import React from 'react';
import { cn } from '@/utils/cn';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Componente Section que estrutura cada bloco principal do site.
 * Configurável com diferentes backgrounds e espaçamentos.
 * Inclui um Container interno por padrão para manter o conteúdo centralizado.
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    containerSize = 'lg', 
    background = 'white',
    paddingY = 'lg',
    children,
    ...props 
  }, ref) => {
    // Mapeamento de backgrounds para classes CSS
    const backgroundClasses = {
      'white': 'bg-white',
      'gray': 'bg-gray-100',
      'gradient': 'bg-gradient-to-b from-white to-gray-100',
      'dark': 'bg-gradient-to-b from-black to-[#121212] text-white',
    };

    // Mapeamento de paddings para classes CSS
    const paddingClasses = {
      'none': '',
      'sm': 'py-8 md:py-12',
      'md': 'py-12 md:py-16',
      'lg': 'py-16 md:py-24',
      'xl': 'py-24 md:py-32',
    };

    return (
      <section
        ref={ref}
        className={cn(
          backgroundClasses[background],
          paddingClasses[paddingY],
          className
        )}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };