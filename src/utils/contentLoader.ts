'use server';

import fs from 'fs';
import path from 'path';
import { Language } from '@/context/LanguageContext';

/**
 * Carrega conteúdo de arquivos markdown para o idioma e seção especificados
 * @param language Idioma (pt, es, en)
 * @param section Seção do site (home, features, etc)
 * @returns Objeto com o conteúdo parseado do arquivo markdown
 */
export const loadContent = async (language: Language, section: string) => {
  try {
    const contentPath = path.join(process.cwd(), 'content', `${section}-content-${language}.md`);
    
    // Verificar se o arquivo existe
    if (!fs.existsSync(contentPath)) {
      console.warn(`Arquivo de conteúdo não encontrado: ${contentPath}`);
      return {};
    }
    
    // Ler o arquivo
    const content = fs.readFileSync(contentPath, 'utf8');
    
    // Processar o conteúdo markdown para extrair as seções e chaves
    const parsedContent = parseMarkdownContent(content);
    
    return parsedContent;
  } catch (error) {
    console.error(`Erro ao carregar conteúdo para ${section} em ${language}:`, error);
    return {};
  }
};

/**
 * Analisa o conteúdo markdown e extrai as seções e chaves
 * @param content Conteúdo markdown
 * @returns Objeto estruturado com o conteúdo
 */
const parseMarkdownContent = (content: string) => {
  const contentObj: Record<string, any> = {};
  
  // Dividir o conteúdo em linhas
  const lines = content.split('\n');
  
  let currentSection = '';
  
  for (const line of lines) {
    // Verificar se é um cabeçalho de seção (## Section)
    if (line.startsWith('## ')) {
      currentSection = line.replace('## ', '').trim().toLowerCase();
      contentObj[currentSection] = {};
    } 
    // Verificar se é uma chave-valor
    else if (line.includes(':') && currentSection) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      
      if (key && value) {
        const trimmedKey = key.trim();
        contentObj[currentSection][trimmedKey] = value;
      }
    }
    // Verificar se é um item de lista (- key: value)
    else if (line.trim().startsWith('- ') && line.includes(':') && currentSection) {
      const listItem = line.trim().substring(2);
      const [key, ...valueParts] = listItem.split(':');
      const value = valueParts.join(':').trim();
      
      if (key && value) {
        const trimmedKey = key.trim();
        contentObj[currentSection][trimmedKey] = value;
      }
    }
  }
  
  return contentObj;
};

/**
 * Obtém todas as traduções para todos os idiomas e seções
 * @returns Objeto com todas as traduções
 */
export const getAllTranslations = async () => {
  const languages: Language[] = ['pt', 'es', 'en'];
  const sections = ['home', 'features'];
  
  const translations: Record<string, Record<string, Record<string, any>>> = {
    pt: {},
    es: {},
    en: {}
  };
  
  for (const language of languages) {
    for (const section of sections) {
      translations[language][section] = await loadContent(language, section);
    }
  }
  
  return translations;
};