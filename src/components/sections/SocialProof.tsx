'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Interface para os dados dos depoimentos
interface TestimonialProps {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
  depoimento: string;
  avatarUrl: string;
}

// Interface para os dados das empresas/marcas
interface BrandProps {
  id: number;
  nome: string;
  logoUrl: string;
}

// Componente principal da seção de Prova Social
const SocialProof = () => {
  // Estado para o índice do depoimento ativo
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Array com os dados dos depoimentos
  const depoimentos: TestimonialProps[] = [
    {
      id: 1,
      nome: 'Ana Carolina Silva',
      cargo: 'Diretora de Marketing',
      empresa: 'TechSolutions',
      depoimento: 'A Focol transformou completamente o nosso atendimento ao cliente. Reduzimos o tempo de resposta em 60% e aumentamos a satisfação do cliente em mais de 40%. A automatização de tarefas repetitivas liberou nossa equipe para focar no que realmente importa: construir relacionamentos mais profundos com nossos clientes.',
      avatarUrl: '/avatars/avatar-1.png' // Placeholder - será substituído por imagens reais
    },
    {
      id: 2,
      nome: 'Rodrigo Mendes',
      cargo: 'CEO',
      empresa: 'Agência Impulso',
      depoimento: 'Como agência, gerenciamos as comunicações de mais de 20 clientes. A Focol nos permitiu centralizar todos esses canais em um único lugar, com dashboards personalizados para cada cliente. Nossa produtividade aumentou significativamente e nossos clientes ficam impressionados com a velocidade e qualidade do atendimento.',
      avatarUrl: '/avatars/avatar-2.png' // Placeholder - será substituído por imagens reais
    },
    {
      id: 3,
      nome: 'Fernanda Oliveira',
      cargo: 'Gerente de Sucesso do Cliente',
      empresa: 'Servitec',
      depoimento: 'Os chatbots da Focol revolucionaram nosso agendamento de serviços. Agora nossos técnicos recebem todas as informações necessárias antes mesmo de chegarem ao local, e os clientes adoram a praticidade de reagendar ou tirar dúvidas a qualquer hora do dia ou da noite.',
      avatarUrl: '/avatars/avatar-3.png' // Placeholder - será substituído por imagens reais
    }
  ];
  
  // Array com os dados das marcas
  const marcas: BrandProps[] = [
    { id: 1, nome: 'Empresa 1', logoUrl: '/logos/logo-1.svg' },
    { id: 2, nome: 'Empresa 2', logoUrl: '/logos/logo-2.svg' },
    { id: 3, nome: 'Empresa 3', logoUrl: '/logos/logo-3.svg' },
    { id: 4, nome: 'Empresa 4', logoUrl: '/logos/logo-4.svg' },
    { id: 5, nome: 'Empresa 5', logoUrl: '/logos/logo-5.svg' }
  ];
  
  // Autoplay para os depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % depoimentos.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [depoimentos.length]);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título da seção */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            Empresas que transformaram seu atendimento com a Focol
          </h2>
          <p className="text-gray-600 text-lg">
            Junte-se a centenas de empresas que já elevaram seu atendimento e vendas a um novo patamar.
          </p>
        </motion.div>
        
        {/* Carrossel de Depoimentos */}
        <div className="mb-20">
          <div className="bg-purple/5 rounded-2xl p-8 md:p-12 relative">
            {/* Ícone de aspas */}
            <div className="absolute top-8 left-8 text-purple/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
              </svg>
            </div>
            
            {/* Container para o carrossel */}
            <div className="max-w-4xl mx-auto px-8 md:px-12">
              {depoimentos.map((depoimento, index) => (
                <motion.div 
                  key={depoimento.id}
                  className={`${index === activeTestimonial ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Depoimento */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic">
                    "{depoimento.depoimento}"
                  </blockquote>
                  
                  {/* Autor do depoimento */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                      {/* Placeholder para a foto de perfil */}
                      <div className="w-full h-full bg-purple/20 flex items-center justify-center text-purple">
                        {depoimento.nome.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{depoimento.nome}</p>
                      <p className="text-gray-600 text-sm">{depoimento.cargo}, {depoimento.empresa}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navegação do carrossel */}
            <div className="flex justify-center mt-10">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    index === activeTestimonial ? 'bg-purple' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Logotipos das marcas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-center text-gray-500 mb-8">Utilizado e aprovado por empresas de todos os tamanhos e segmentos</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {marcas.map((marca) => (
              <div key={marca.id} className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                {/* Placeholder para os logos das empresas */}
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">{marca.nome}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;