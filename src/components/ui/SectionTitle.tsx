import React from 'react';
import { cn } from '@/utils/cn';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleSize?: 'sm' | 'md' | 'lg';
  decorative?: boolean;
  theme?: 'light' | 'dark';
}

/**
 * Componente SectionTitle para títulos e subtítulos de seção
 * conforme as especificações do wireframe de alta fidelidade.
 */
const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  titleSize = 'md',
  decorative = true,
  theme = 'light',
  className,
  ...props
}: SectionTitleProps) => {
  // Mapeamento dos tamanhos de título para classes CSS
  const titleSizeClasses = {
    'sm': 'text-2xl md:text-3xl',
    'md': 'text-3xl md:text-4xl',
    'lg': 'text-4xl md:text-5xl',
  };

  // Classes de texto baseadas no tema (claro/escuro)
  const themeClasses = {
    'light': {
      title: 'text-black',
      subtitle: 'text-gray-400',
      divider: 'bg-gray-200'
    },
    'dark': {
      title: 'text-white',
      subtitle: 'text-gray-300',
      divider: 'bg-gray-700'
    }
  };

  return (
    <div 
      className={cn(
        'mb-8 md:mb-12',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      <h2 
        className={cn(
          'font-montserrat font-bold leading-tight',
          titleSizeClasses[titleSize],
          themeClasses[theme].title
        )}
      >
        {title}
      </h2>
      
      {decorative && (
        <div className="flex justify-center mt-4 mb-4">
          <div 
            className={cn(
              'h-[2px] w-20',
              themeClasses[theme].divider
            )}
          />
        </div>
      )}
      
      {subtitle && (
        <p 
          className={cn(
            'mt-4 max-w-3xl mx-auto text-base md:text-lg',
            themeClasses[theme].subtitle
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { SectionTitle };