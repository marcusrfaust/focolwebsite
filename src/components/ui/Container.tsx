import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: React.ElementType;
}

/**
 * Componente Container que mantém o conteúdo centralizado e com largura consistente
 * conforme as especificações do wireframe de alta fidelidade.
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 md:px-8",
          {
            'max-w-screen-sm': size === 'sm',  // 640px
            'max-w-screen-md': size === 'md',  // 768px
            'max-w-screen-lg': size === 'lg',  // 1024px
            'max-w-screen-xl': size === 'xl',  // 1280px
            'w-full': size === 'full',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container };