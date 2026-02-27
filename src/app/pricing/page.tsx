'use client';

import PricingSection from '@/components/sections/PricingSection';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20" // Adiciona padding no topo para compensar o header fixo
    >
      <PricingSection />
    </motion.div>
  );
}
