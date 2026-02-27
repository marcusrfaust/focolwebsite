'use client';

import FeaturesSection from '@/components/sections/Features'; // Reutilizando a seção de Features já criada
import { motion } from 'framer-motion';

export default function FeaturesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20" // Adiciona padding no topo para compensar o header fixo
    >
      <FeaturesSection />
      {/* Poderíamos adicionar mais conteúdo específico para a página de Features aqui, se necessário */}
    </motion.div>
  );
}
