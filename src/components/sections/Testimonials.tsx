'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

// Interface para os dados de cada testemunho
interface TestimonialProps {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
  texto: string;
  imagem: string;
  estrelas: number;
}

// Componente de estrelas para avaliação
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < rating ? 'currentColor' : 'none'}
          stroke={index < rating ? 'none' : 'currentColor'}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

// Componente de card para testemunho
const TestimonialCard = ({ 
  testimonial, 
  isActive 
}: { 
  testimonial: TestimonialProps; 
  isActive: boolean;
}) => {
  return (
    <motion.div 
      className={`flex flex-col bg-white rounded-xl shadow-card p-6 md:p-8 h-full transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0.4, y: 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cabeçalho do Card */}
      <div className="flex items-center mb-6">
        <div className="mr-4 relative w-16 h-16 overflow-hidden rounded-full border-2 border-primary/20">
          <Image 
            src={testimonial.imagem} 
            alt={testimonial.nome} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-xl">{testimonial.nome}</h4>
          <p className="text-gray-400 text-sm">{testimonial.cargo}, {testimonial.empresa}</p>
          <div className="mt-1">
            <StarRating rating={testimonial.estrelas} />
          </div>
        </div>
      </div>
      
      {/* Corpo do Testemunho */}
      <div className="flex-grow">
        <p className="text-gray-600 italic relative">
          <span className="text-4xl font-serif text-primary/20 absolute -top-4 -left-2">"</span>
          {testimonial.texto}
          <span className="text-4xl font-serif text-primary/20 absolute -bottom-8 -right-2">"</span>
        </p>
      </div>
    </motion.div>
  );
};

// Componente principal da seção de testemunhos
const Testimonials = () => {
  const { translate } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Array com os dados dos testemunhos
  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      nome: translate('testimonials.person1.name', 'Ana Silva'),
      cargo: translate('testimonials.person1.role', 'Gerente de Marketing'),
      empresa: translate('testimonials.person1.company', 'E-commerce Brasil'),
      texto: translate('testimonials.person1.text', 'A Focol transformou completamente nosso atendimento ao cliente. Antes, perdíamos mensagens e demorávamos para responder. Agora, unificamos todos os canais e automatizamos 70% das dúvidas frequentes, o que reduziu o tempo de espera e aumentou nossa taxa de conversão em 35%.'),
      imagem: '/images/testimonials/ana-silva.jpg',
      estrelas: 5
    },
    {
      id: 2,
      nome: translate('testimonials.person2.name', 'Carlos Mendes'),
      cargo: translate('testimonials.person2.role', 'Diretor de Operações'),
      empresa: translate('testimonials.person2.company', 'Mendes Retail'),
      texto: translate('testimonials.person2.text', 'Nosso departamento de atendimento ao cliente conseguiu escalar de 500 para 2.000 atendimentos diários sem aumentar o tamanho da equipe. A automação inteligente da Focol classifica e direciona as conversas automaticamente, economizando nosso tempo e recursos.'),
      imagem: '/images/testimonials/carlos-mendes.jpg',
      estrelas: 5
    },
    {
      id: 3,
      nome: translate('testimonials.person3.name', 'Patrícia Gomes'),
      cargo: translate('testimonials.person3.role', 'Supervisora de Atendimento'),
      empresa: translate('testimonials.person3.company', 'Tech Solutions'),
      texto: translate('testimonials.person3.text', 'Os relatórios e análises da Focol nos deram insights valiosos sobre o comportamento dos clientes e desempenho da equipe. Conseguimos identificar gargalos no processo e otimizar nossos fluxos de trabalho, aumentando a produtividade em 45%.'),
      imagem: '/images/testimonials/patricia-gomes.jpg',
      estrelas: 4
    },
    {
      id: 4,
      nome: translate('testimonials.person4.name', 'Lucas Santos'),
      cargo: translate('testimonials.person4.role', 'CEO'),
      empresa: translate('testimonials.person4.company', 'Agência Digital Connect'),
      texto: translate('testimonials.person4.text', 'Implementamos a Focol há 6 meses e os resultados foram impressionantes. A satisfação do cliente aumentou de 72% para 94%, e o tempo médio de primeira resposta caiu de 30 minutos para apenas 3 minutos. Vale cada centavo investido.'),
      imagem: '/images/testimonials/lucas-santos.jpg',
      estrelas: 5
    }
  ];

  // Função para avançar para o próximo testemunho
  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  // Função para voltar para o testemunho anterior
  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  // Para pausar o autoplay quando o usuário interage
  const handleUserInteraction = () => {
    setAutoplayEnabled(false);
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    // Restaura o autoplay após 10 segundos de inatividade
    setTimeout(() => setAutoplayEnabled(true), 10000);
  };

  // Configuração do autoplay
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayTimerRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplayEnabled]);

  // Variantes de animação para os indicadores de navegação
  const indicatorVariants = {
    active: {
      width: '2rem',
      backgroundColor: '#5E17EB',
      transition: { duration: 0.3 }
    },
    inactive: {
      width: '0.75rem',
      backgroundColor: '#E5E7EB',
      transition: { duration: 0.3 }
    }
  };

  return (
    <Section background="gradient" paddingY="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionTitle
          title={translate('testimonials.title', 'O que nossos clientes dizem')}
          subtitle={translate('testimonials.subtitle', 'Descubra como empresas de diversos segmentos estão transformando seu atendimento com a Focol')}
          centered={true}
          decorative={true}
          textColor="light"
        />
      </motion.div>
      
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="relative">
          {/* Setas de navegação */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm z-10 text-white"
            onClick={() => {
              prevTestimonial();
              handleUserInteraction();
            }}
            aria-label="Testemunho anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm z-10 text-white"
            onClick={() => {
              nextTestimonial();
              handleUserInteraction();
            }}
            aria-label="Próximo testemunho"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          {/* Carrossel de testemunhos */}
          <div className="overflow-hidden relative py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={index === activeIndex} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicadores de navegação */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className="h-2 rounded-full"
                variants={indicatorVariants}
                animate={index === activeIndex ? 'active' : 'inactive'}
                onClick={() => {
                  setActiveIndex(index);
                  handleUserInteraction();
                }}
                aria-label={`Ir para testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;