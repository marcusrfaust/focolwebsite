'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const Cta = () => {
  const { translate } = useLanguage();

  return (
    <Section background="dark" paddingY="lg">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {translate('cta.title', 'Transforme seu atendimento ao cliente hoje mesmo')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {translate('cta.subtitle', 'Unifique seus canais, automatize respostas e aumente a satisfação dos clientes com a plataforma completa da Focol.')}
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              href="/demonstracao"
            >
              {translate('cta.demo_button', 'Agendar demonstração')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              href="/teste-gratis"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              {translate('cta.trial_button', 'Iniciar teste grátis')}
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-8">
            {translate('cta.no_credit_card', 'Não é necessário cartão de crédito • Suporte completo durante o teste • Configuração em minutos')}
          </p>
        </motion.div>
        
        {/* Detalhes decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </Section>
  );
};

export default Cta;