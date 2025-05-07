'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definindo os idiomas suportados
export type Language = 'pt' | 'es' | 'en';

// Interface para o contexto
interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string, section?: string) => string;
}

// Criando o contexto com valores padrão
const LanguageContext = createContext<LanguageContextProps>({
  language: 'pt',
  setLanguage: () => {},
  translate: () => '',
});

// Componente provedor que encapsula a aplicação
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Estado para armazenar o idioma atual
  const [language, setLanguage] = useState<Language>('pt');
  // Estado para armazenar as traduções
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Carregar traduções quando o idioma mudar
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Implementação real irá carregar os arquivos apropriados
        // baseados no idioma selecionado
        // Esta é uma solução temporária até implementarmos a leitura dos arquivos .md
        const homeTranslations = {
          pt: {
            hero: {
              title: 'Unifique. Automatize. Escale.',
              subtitle: 'Centralize todos os canais em uma única plataforma e transforme atendimentos em vendas.',
              description: 'Cansado de alternar entre WhatsApp, Instagram, Messenger e outros canais? A Focol integra todas as suas comunicações em uma interface intuitiva, permitindo que você automatize tarefas repetitivas com inteligência artificial e escale seu atendimento sem perder a qualidade e o toque humano.',
              cta_primary: 'Agende uma demonstração',
              cta_secondary: 'Teste grátis por 14 dias',
            },
            // Outras seções...
          },
          es: {
            hero: {
              title: 'Unifica. Automatiza. Escala.',
              subtitle: 'Centraliza todos tus canales en una única plataforma y transforma la atención en ventas.',
              description: '¿Cansado de alternar entre WhatsApp, Instagram, Messenger y otros canales? Focol integra todas tus comunicaciones en una interfaz intuitiva, permitiéndote automatizar tareas repetitivas con inteligencia artificial y escalar tu atención sin perder la calidad y el toque humano.',
              cta_primary: 'Agenda una demostración',
              cta_secondary: 'Prueba gratis por 14 días',
            },
            // Outras seções...
          },
          en: {
            hero: {
              title: 'Unify. Automate. Scale.',
              subtitle: 'Centralize all channels into a single platform and transform customer service into sales.',
              description: 'Tired of switching between WhatsApp, Instagram, Messenger, and other channels? Focol integrates all your communications into an intuitive interface, allowing you to automate repetitive tasks with artificial intelligence and scale your customer service without losing quality and the human touch.',
              cta_primary: 'Schedule a demo',
              cta_secondary: 'Free trial for 14 days',
            },
            // Outras seções...
          }
        };

        setTranslations(homeTranslations);
      } catch (error) {
        console.error('Erro ao carregar traduções:', error);
      }
    };

    loadTranslations();
  }, [language]);

  // Função para traduzir strings
  const translate = (key: string, section?: string): string => {
    try {
      if (!section) {
        const keys = key.split('.');
        let result = translations[language];
        
        for (const k of keys) {
          if (result && result[k]) {
            result = result[k];
          } else {
            return key; // Retorna a chave se não encontrar tradução
          }
        }
        
        return typeof result === 'string' ? result : key;
      }
      
      return translations[language]?.[section]?.[key] || key;
    } catch (error) {
      console.error('Erro ao traduzir:', error);
      return key;
    }
  };

  // Persistir preferência de idioma no localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('focol-language') as Language;
    if (savedLanguage && ['pt', 'es', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detectar idioma do navegador como fallback
      const browserLang = navigator.language.substring(0, 2);
      setLanguage(
        browserLang === 'pt' ? 'pt' : 
        browserLang === 'es' ? 'es' : 'en'
      );
    }
  }, []);

  // Salvar preferência de idioma quando mudar
  useEffect(() => {
    localStorage.setItem('focol-language', language);
    // Também atualiza o atributo lang no HTML para acessibilidade
    document.documentElement.lang = language === 'en' ? 'en' : 
                                    language === 'es' ? 'es' : 'pt-BR';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar o contexto de idioma
export const useLanguage = () => useContext(LanguageContext);