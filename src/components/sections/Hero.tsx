'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-6 lg:space-y-8">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unifique. <span className="text-blue-500">Automatize.</span>{' '}
              <span className="text-purple-600">Escale.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Centralize todos os canais em uma única plataforma e transforme atendimentos em vendas com a solução omnichannel mais completa do mercado.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/demo" className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center">
                Agende uma demonstração
              </Link>
              <Link href="/trial" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center">
                Teste grátis por 14 dias
              </Link>
            </motion.div>
            
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-400 text-sm">Usado por +500 empresas de todos os tamanhos</p>
              <div className="flex flex-wrap gap-6 mt-3 opacity-60">
                {/* Aqui viriam os logos dos clientes - por enquanto apenas placeholders */}
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="h-8 w-20 bg-white/20 rounded-md animate-pulse"></div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Ilustração/Visual */}
          <motion.div 
            className="relative lg:h-[500px] bg-gradient-to-tr from-purple-900/30 to-blue-900/30 rounded-lg p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-full w-full bg-black/40 rounded-lg border border-white/10 p-4 relative overflow-hidden">
              {/* Aqui viriam as ilustrações animadas - por enquanto apenas placeholders */}
              <div className="h-16 w-full bg-gray-800 rounded-md mb-4 flex items-center p-3">
                <div className="h-8 w-8 rounded-full bg-purple-700 mr-3"></div>
                <div className="h-4 w-40 bg-gray-700 rounded"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Canais representando diferentes plataformas */}
                {['WhatsApp', 'Instagram', 'Messenger', 'Telegram'].map((channel, index) => (
                  <div key={index} className="bg-gray-800 p-3 rounded-md h-24 flex flex-col justify-between">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-blue-600 mr-2"></div>
                      <div className="h-3 w-20 bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-4 w-full bg-gray-700 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 h-12 w-12 bg-blue-500 rounded-full blur-xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 h-16 w-16 bg-purple-600 rounded-full blur-xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-purple-900/20 w-72 h-72 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-blue-900/20 w-72 h-72 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}