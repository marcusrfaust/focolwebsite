'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<string>('omnichannel');

  const features: Feature[] = [
    {
      id: 'omnichannel',
      title: 'Integração Omnichannel',
      description: 'Todos os seus canais em um só lugar, sem complicações. Unifique WhatsApp, Instagram, Facebook, Telegram e outros em uma única plataforma.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      id: 'automation',
      title: 'Automação com IA',
      description: 'Automatize sem perder a personalização. Crie fluxos de atendimento inteligentes e chatbots que aprendem com cada interação.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'analytics',
      title: 'CRM e Analytics',
      description: 'Dados que transformam conversas em conversões. Visualize métricas de desempenho, histórico de conversas e comportamento do cliente em tempo real.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'teams',
      title: 'Gestão de Equipes',
      description: 'Controle total sobre sua operação de atendimento. Gerencie múltiplos agentes, monitore desempenho e distribua conversas de forma inteligente.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Encontra a feature ativa
  const activeFeatureData = features.find(feature => feature.id === activeFeature);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Recursos poderosos para seu atendimento
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A Focol oferece tudo que você precisa para unificar seus canais, automatizar processos e escalar seu atendimento com inteligência.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Menu lateral de features */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl p-1">
              {features.map((feature) => (
                <motion.button
                  key={feature.id}
                  className={`w-full text-left p-4 rounded-lg mb-2 transition-all flex items-start ${
                    activeFeature === feature.id 
                      ? 'bg-white shadow-md text-purple-700' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                  whileHover={{ x: activeFeature === feature.id ? 0 : 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`mr-3 p-2 rounded-lg ${
                    activeFeature === feature.id 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    {activeFeature === feature.id && (
                      <motion.p 
                        className="text-gray-600 mt-2 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Área de visualização da feature */}
          <div className="lg:col-span-3">
            <motion.div 
              className="bg-gray-900 rounded-xl p-8 h-full relative overflow-hidden"
              key={activeFeature}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Feature Illustration */}
              <div className="relative z-10">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-gray-400 text-sm">{activeFeatureData?.title}</div>
                  </div>

                  {/* Conteúdo específico para cada feature */}
                  {activeFeature === 'omnichannel' && (
                    <div className="grid grid-cols-2 gap-4">
                      {['WhatsApp', 'Instagram', 'Facebook', 'Telegram'].map((channel, index) => (
                        <div key={index} className="bg-gray-700 p-4 rounded-lg">
                          <div className="flex items-center mb-3">
                            <div className="h-8 w-8 rounded-full bg-blue-600 mr-3"></div>
                            <div className="text-white">{channel}</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 w-3/4 bg-gray-600 rounded"></div>
                            <div className="h-3 w-full bg-gray-600 rounded"></div>
                          </div>
                        </div>
                      ))}
                      <div className="col-span-2 flex justify-center mt-4">
                        <div className="h-10 w-40 bg-purple-700 rounded-lg"></div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 'automation' && (
                    <div className="space-y-4">
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <div className="flex justify-between mb-3">
                          <div className="text-white">Fluxo de Automação</div>
                          <div className="h-6 w-16 bg-purple-700 rounded"></div>
                        </div>
                        <div className="flex space-x-3">
                          {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex-1">
                              <div className="h-20 w-full bg-gray-600 rounded mb-2"></div>
                              <div className="h-3 w-full bg-gray-600 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <div className="flex justify-between mb-3">
                          <div className="text-white">Assistente IA</div>
                          <div className="h-6 w-16 bg-blue-600 rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-6 w-full bg-gray-600 rounded"></div>
                          <div className="h-6 w-3/4 bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 'analytics' && (
                    <div className="space-y-4">
                      <div className="flex space-x-4 mb-4">
                        <div className="flex-1 bg-gray-700 p-3 rounded-lg flex justify-between">
                          <div className="text-gray-300">Total</div>
                          <div className="text-white">5.2k</div>
                        </div>
                        <div className="flex-1 bg-gray-700 p-3 rounded-lg flex justify-between">
                          <div className="text-gray-300">Conversão</div>
                          <div className="text-green-500">68%</div>
                        </div>
                        <div className="flex-1 bg-gray-700 p-3 rounded-lg flex justify-between">
                          <div className="text-gray-300">Tempo</div>
                          <div className="text-white">4:32</div>
                        </div>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg h-40 flex items-end justify-between">
                        {[30, 45, 25, 60, 40, 75, 50].map((value, i) => (
                          <div key={i} className="h-full flex flex-col justify-end items-center">
                            <div 
                              className="w-8 bg-gradient-to-t from-purple-600 to-blue-600 rounded-t"
                              style={{height: `${value}%`}}
                            ></div>
                            <div className="text-gray-400 text-xs mt-2">D{i+1}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === 'teams' && (
                    <div className="space-y-4">
                      <div className="flex justify-between mb-2">
                        <div className="text-white">Agentes Online</div>
                        <div className="text-green-500">8/10</div>
                      </div>
                      {[
                        {name: 'João Silva', status: 'online', chats: 4},
                        {name: 'Maria Oliveira', status: 'online', chats: 2},
                        {name: 'Carlos Ferreira', status: 'away', chats: 0},
                        {name: 'Ana Santos', status: 'online', chats: 3}
                      ].map((agent, i) => (
                        <div key={i} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                          <div className="flex items-center">
                            <div className={`h-2 w-2 rounded-full mr-3 ${
                              agent.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                            }`}></div>
                            <div className="text-white">{agent.name}</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-gray-300 mr-3">Chats: {agent.chats}</div>
                            <div className="h-6 w-6 rounded-full bg-gray-600"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}