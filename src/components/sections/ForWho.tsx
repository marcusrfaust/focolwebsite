'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Interface para os dados de cada segmento de cliente
interface SegmentProps {
  id: string;
  titulo: string;
  descricao: string;
  beneficios: string[];
  icone: React.ReactNode;
}

// Componente principal da seção "Para Quem"
const ForWho = () => {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState<string>('empresas');
  
  // Array com os dados dos segmentos
  const segmentos: SegmentProps[] = [
    {
      id: 'empresas',
      titulo: 'Empresas',
      descricao: 'Otimize o atendimento, aumente a retenção de clientes e converta mais vendas com uma solução completa e integrada às suas ferramentas existentes.',
      beneficios: [
        'Reduza custos operacionais com automação inteligente',
        'Melhore a experiência do cliente com respostas mais rápidas',
        'Integre-se com CRMs, ERPs e outras ferramentas da sua empresa',
        'Escale o atendimento sem aumentar proporcionalmente a equipe'
      ],
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      )
    },
    {
      id: 'agencias',
      titulo: 'Agências',
      descricao: 'Gerencie a comunicação de múltiplos clientes em uma única plataforma, com possibilidade de white-label e relatórios personalizados por cliente.',
      beneficios: [
        'Modo multi-conta para administrar diferentes clientes',
        'Branding personalizado com white-label',
        'Relatórios e dashboards por cliente',
        'Gerenciamento de permissões por níveis de acesso'
      ],
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      )
    },
    {
      id: 'servicos',
      titulo: 'Prestadores de Serviço',
      descricao: 'Melhore a comunicação com seus clientes, agende serviços de forma eficiente e acompanhe todo o ciclo de atendimento, do primeiro contato à pós-venda.',
      beneficios: [
        'Agendamento e confirmação automatizada de serviços',
        'Chatbots para qualificação e triagem de solicitações',
        'Lembretes automáticos e follow-ups personalizados',
        'Histórico completo de interações com cada cliente'
      ],
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.055 2.264-.22 2.944-.165.68-.381 1.281-.57 1.642" />
        </svg>
      )
    }
  ];
  
  // Encontrar o segmento ativo com base na aba selecionada
  const activeSegment = segmentos.find(seg => seg.id === activeTab) || segmentos[0];
  
  return (
    <section className="py-16 md:py-24 bg-purple/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            Uma solução para cada necessidade
          </h2>
          <p className="text-gray-600 text-lg">
            Não importa o tamanho ou segmento do seu negócio, a Focol tem as ferramentas certas para transformar seu atendimento.
          </p>
        </motion.div>
        
        {/* Tabs/Segmentos */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {segmentos.map((segmento) => (
              <button
                key={segmento.id}
                onClick={() => setActiveTab(segmento.id)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeTab === segmento.id
                    ? 'bg-purple text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-purple'
                }`}
              >
                <div className="flex items-center gap-2">
                  {segmento.icone}
                  <span>{segmento.titulo}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Conteúdo do segmento ativo */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Informações */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold font-montserrat mb-4">
                Focol para {activeSegment.titulo}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeSegment.descricao}
              </p>
              
              <h4 className="font-bold text-lg mb-4">Por que escolher a Focol:</h4>
              <ul className="space-y-3 mb-8">
                {activeSegment.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-purple mt-0.5 flex-shrink-0">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={`/para-quem/${activeSegment.id}`} className="btn-primary inline-block">
                Ver soluções para {activeSegment.titulo}
              </Link>
            </div>
            
            {/* Ilustração/Caso de Uso */}
            <div className="w-full lg:w-1/2 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 mx-auto w-24 h-24 bg-purple/10 flex items-center justify-center rounded-full">
                  <span className="text-4xl text-purple">
                    {activeSegment.icone}
                  </span>
                </div>
                <p className="text-gray-400 italic">
                  Ilustração de caso de uso para {activeSegment.titulo} será exibida aqui
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWho;