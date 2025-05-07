import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

// Definindo as variantes do botão usando class-variance-authority
const buttonVariants = cva(
  // Base styles aplicados a todos os botões
  "inline-flex items-center justify-center rounded-md text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        // Botão primário com fundo roxo (#5E17EB)
        primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/70',
        // Botão secundário com borda e texto roxo
        secondary: 'bg-white text-primary border border-primary hover:bg-gray-50 active:bg-gray-100',
        // Botão terciário (texto apenas)
        tertiary: 'bg-transparent text-primary hover:underline',
        // Versões invertidas para uso em fundos escuros
        primaryInverted: 'bg-white text-primary hover:bg-gray-50 active:bg-gray-100',
        secondaryInverted: 'bg-transparent text-white border border-white hover:bg-white/10 active:bg-white/20',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-12 px-5 text-base', // Equivalente a 48px height
        lg: 'h-14 px-8 text-lg',
        full: 'h-12 w-full text-base', // Largura total para o container
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// Interface com as props do componente
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

/**
 * Componente Button que segue as especificações do wireframe de alta fidelidade.
 * Suporta várias variantes (primary, secondary, tertiary) e tamanhos (sm, md, lg, full).
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    // Se tiver href, renderiza como link (a) em vez de button
    if (href) {
      return (
        <a 
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {props.children}
        </a>
      );
    }
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };