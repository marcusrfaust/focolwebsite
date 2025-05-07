'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-blue/5 z-0"></div>
      
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-6">
              Pronto para transformar seu atendimento?
            </h2>
            
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-600">
              Junte-se a centenas de empresas que já simplificaram sua comunicação, automatizaram processos e aumentaram suas vendas com a Focol.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/teste-gratis" className="btn-primary">
                Experimente grátis por 14 dias
              </Link>
              <Link href="/demonstracao" className="btn-secondary">
                Agende uma demonstração
              </Link>
            </div>
            
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Sem necessidade de cartão de crédito • Cancele a qualquer momento</span>
            </div>
          </motion.div>
          
          {/* Stats/Números */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="font-montserrat font-bold text-4xl text-purple mb-2">+40%</div>
              <p className="text-gray-600">Aumento médio na taxa de conversão</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="font-montserrat font-bold text-4xl text-purple mb-2">60%</div>
              <p className="text-gray-600">Redução no tempo de resposta ao cliente</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="font-montserrat font-bold text-4xl text-purple mb-2">+500</div>
              <p className="text-gray-600">Empresas utilizando a Focol</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;