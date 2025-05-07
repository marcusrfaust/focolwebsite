import React from 'react';
import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

// Definindo as variantes do card usando class-variance-authority
const cardVariants = cva(
  // Base styles aplicados a todos os cards
  "bg-white rounded-card relative overflow-hidden transition-shadow",
  {
    variants: {
      variant: {
        // Card padrão com borda sutil
        default: 'border border-gray-200 shadow-card hover:shadow-card-hover',
        // Card destacado com borda roxa
        highlighted: 'border-2 border-primary shadow-highlight hover:shadow-highlight',
        // Card sem borda com fundo cinza
        flat: 'bg-gray-100',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

// Interface com as props do componente
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badge?: string;
}

/**
 * Componente Card que segue as especificações do wireframe de alta fidelidade.
 * Suporta várias variantes (default, highlighted, flat) e tamanhos de padding.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, badge, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, padding, className }))}
        ref={ref}
        {...props}
      >
        {badge && (
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-md">
            {badge}
          </div>
        )}
        {props.children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Componentes filhos para organização interna do Card
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      className={cn("mb-4", className)} 
      ref={ref} 
      {...props} 
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      className={cn("font-montserrat font-bold text-xl text-black", className)} 
      ref={ref} 
      {...props} 
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p 
      className={cn("text-gray-400 text-base", className)} 
      ref={ref} 
      {...props} 
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      className={cn("", className)} 
      ref={ref} 
      {...props} 
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      className={cn("mt-4 flex items-center", className)} 
      ref={ref} 
      {...props} 
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };