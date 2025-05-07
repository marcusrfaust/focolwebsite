import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/utils/cn';

interface LanguageSwitcherProps {
  variant?: 'default' | 'minimal';
  className?: string;
}

/**
 * Componente de alternância de idiomas que permite aos usuários
 * mudar entre português, espanhol e inglês.
 */
const LanguageSwitcher = ({ 
  variant = 'default',
  className 
}: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  
  // Nomes dos idiomas para exibição
  const languages = {
    pt: { code: 'PT', name: 'Português' },
    es: { code: 'ES', name: 'Español' },
    en: { code: 'EN', name: 'English' }
  };

  return (
    <div className={cn(
      'flex items-center',
      variant === 'minimal' ? 'space-x-2' : 'space-x-0',
      className
    )}>
      {variant === 'default' ? (
        <div className="relative inline-block bg-gray-100 rounded-full h-8 p-1">
          {Object.entries(languages).map(([code, { code: label }]) => (
            <button
              key={code}
              onClick={() => setLanguage(code as any)}
              className={cn(
                'relative rounded-full px-2 py-1 text-xs font-medium transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary/30',
                language === code 
                  ? 'bg-white text-black shadow' 
                  : 'text-gray-400 hover:text-gray-900'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        // Variante minimal apenas com os códigos
        <>
          {Object.entries(languages).map(([code, { code: label }], index) => (
            <React.Fragment key={code}>
              {index > 0 && <span className="text-gray-300">|</span>}
              <button
                onClick={() => setLanguage(code as any)}
                className={cn(
                  'text-xs font-medium px-1',
                  'focus:outline-none focus:ring-1 focus:ring-primary',
                  language === code 
                    ? 'text-primary font-semibold' 
                    : 'text-gray-400 hover:text-gray-700'
                )}
              >
                {label}
              </button>
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export { LanguageSwitcher };