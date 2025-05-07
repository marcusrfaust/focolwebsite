'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

// Interface para os dados de cada passo
interface StepProps {
  numero: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
}

// Componente para cada passo
const Step = ({ passo, index }: { passo: StepProps, index: number }) => {
  // Definindo um delay diferente para cada passo
  const staggerDelay = 0.2 * index;
  
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-start gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: staggerDelay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Número e Ícone */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold">
          {passo.icone}
        </div>
      </div>
      
      {/* Conteúdo */}
      <div>
        <h3 className="text-xl font-bold font-montserrat mb-2">{passo.titulo}</h3>
        <p className="text-gray-400">{passo.descricao}</p>
      </div>
    </motion.div>
  );
};

// Componente principal da seção "Como Funciona"
const HowItWorks = () => {
  const { translate } = useLanguage();
  
  // Array com os dados dos passos
  const passos: StepProps[] = [
    {
      numero: 1,
      titulo: translate('how_it_works.step1.title', 'Centralize'),
      descricao: translate('how_it_works.step1.description', 'Conecte facilmente todas as suas contas de WhatsApp, Instagram, Messenger e mais. Nossa interface intuitiva unifica suas conversas em um fluxo de trabalho coeso.'),
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      )
    },
    {
      numero: 2,
      titulo: translate('how_it_works.step2.title', 'Automatize'),
      descricao: translate('how_it_works.step2.description', 'Desenvolva chatbots personalizados sem precisar de código. Automatize respostas, colete informações e direcione clientes de forma eficiente, 24 horas por dia.'),
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
        </svg>
      )
    },
    {
      numero: 3,
      titulo: translate('how_it_works.step3.title', 'Analise'),
      descricao: translate('how_it_works.step3.description', 'Monitore o desempenho da sua equipe, a satisfação dos clientes e identifique oportunidades de melhoria com nossos dashboards e relatórios completos.'),
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    },
    {
      numero: 4,
      titulo: translate('how_it_works.step4.title', 'Escale'),
      descricao: translate('how_it_works.step4.description', 'Expanda sua operação de atendimento sem preocupações. A Focol é projetada para crescer junto com seu negócio, mantendo a qualidade de atendimento independentemente do volume.'),
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.942" />
        </svg>
      )
    }
  ];

  return (
    <Section background="white" paddingY="lg">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Imagem/Ilustração da Interface */}
        <motion.div 
          className="w-full lg:w-1/2 relative order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-card">
            {/* Mock da interface da Focol */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Barra de navegação */}
              <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 mr-4"></div>
                <div className="h-6 w-64 bg-gray-200 rounded-md"></div>
                <div className="ml-auto flex space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                </div>
              </div>
              
              {/* Conteúdo da interface */}
              <div className="grid grid-cols-12 h-[calc(100%-3.5rem)]">
                {/* Sidebar */}
                <div className="col-span-3 border-r border-gray-200 bg-white p-4">
                  <div className="h-8 w-3/4 bg-gray-200 rounded mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-10 bg-primary/10 rounded-md flex items-center px-3">
                      <div className="w-5 h-5 rounded-full bg-primary/30 mr-3"></div>
                      <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 rounded-md flex items-center px-3 hover:bg-gray-100">
                        <div className="w-5 h-5 rounded-full bg-gray-200 mr-3"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Área principal */}
                <div className="col-span-9 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-8 w-48 bg-gray-200 rounded"></div>
                    <div className="h-8 w-32 bg-primary rounded-md"></div>
                  </div>
                  
                  {/* Cards de conversa */}
                  <div className="grid grid-cols-2 gap-5">
                    {[1,2,3,4].map(i => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                          <div>
                            <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                            <div className="h-3 w-16 bg-gray-100 rounded"></div>
                          </div>
                          <div className="ml-auto h-6 w-6 rounded-full bg-gray-100"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-100 rounded w-full"></div>
                          <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                          <div className="h-3 bg-gray-100 rounded w-4/6"></div>
                        </div>
                        <div className="flex justify-between mt-4">
                          <div className="h-6 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <div className="h-2 w-10 bg-primary/40 rounded"></div>
                          </div>
                          <div className="h-6 w-16 bg-gray-100 rounded-full"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Conteúdo dos passos */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <SectionTitle
              title={translate('how_it_works.title', 'Simplificamos a comunicação para que você se concentre no que importa')}
              subtitle={translate('how_it_works.subtitle', 'Uma plataforma intuitiva que melhora a eficiência do seu atendimento em apenas alguns passos simples')}
              centered={false}
              decorative={false}
              titleSize="md"
            />
          </motion.div>
          
          <div className="space-y-10 mt-10">
            {passos.map((passo, index) => (
              <Step key={passo.numero} passo={passo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;