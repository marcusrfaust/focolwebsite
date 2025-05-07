import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Função utilitária que combina classes CSS condicionalmente
 * Utiliza clsx para construção condicional e tailwind-merge para resolver conflitos de classes Tailwind
 * 
 * @param inputs - Lista de classes CSS, objetos condicionais ou arrays
 * @returns String com as classes CSS combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}