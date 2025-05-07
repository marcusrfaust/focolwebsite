'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

const Hero = () => {
  const { translate } = useLanguage();
  
  // Animações para fade-in dos elementos
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animação para os ícones de plataformas
  const floatAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: [0, -10, 0],
      transition: {
        delay: custom * 0.2,
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          repeatType: "reverse",
        }
      }
    })
  };

  return (
    <Section 
      background="gradient" 
      paddingY="xl"
      className="pt-32 md:pt-40" // Padding extra no topo para compensar o header fixo
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Conteúdo do Hero */}
        <motion.div 
          className="w-full lg:w-[55%]"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-6"
            variants={fadeInUp}
          >
            {translate('hero.title', 'Unifique. ')}
            <span className="text-primary">
              {translate('hero.title_highlight', 'Automatize.')}
            </span>{' '}
            {translate('hero.title_end', 'Escale.')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-6"
            variants={fadeInUp}
          >
            {translate('hero.subtitle', 'Centralize todos os canais em uma única plataforma e transforme atendimentos em vendas.')}
          </motion.p>
          
          <motion.p 
            className="text-base text-gray-400 mb-8 max-w-xl"
            variants={fadeInUp}
          >
            {translate('hero.description', 'Cansado de alternar entre WhatsApp, Instagram, Messenger e outros canais? A Focol integra todas as suas comunicações em uma interface intuitiva, permitindo que você automatize tarefas repetitivas com inteligência artificial e escale seu atendimento sem perder a qualidade e o toque humano.')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Button 
              variant="primary" 
              size="md" 
              href="/contato"
            >
              {translate('hero.cta_primary', 'Agende uma demonstração')}
            </Button>
            <Button 
              variant="secondary" 
              size="md" 
              href="/teste-gratis"
            >
              {translate('hero.cta_secondary', 'Teste grátis por 14 dias')}
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Ilustração/Animação da convergência de canais */}
        <motion.div 
          className="w-full lg:w-[45%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative h-[500px] w-full">
            {/* Círculo de fundo com gradiente */}
            <motion.div 
              className="absolute w-4/5 h-4/5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            {/* Container para os ícones de plataformas */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Ícones de plataformas */}
                <motion.div 
                  className="absolute top-0 left-0 p-4 bg-white rounded-lg shadow-lg"
                  custom={0}
                  variants={floatAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <svg className="text-[#25D366]" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM20 6.5C26.35 6.5 31.5 11.65 31.5 18C31.5 24.35 26.35 29.5 20 29.5C13.65 29.5 8.5 24.35 8.5 18C8.5 11.65 13.65 6.5 20 6.5Z"/>
                  </svg>
                  <div className="mt-1 text-xs font-medium text-center">WhatsApp</div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/4 right-0 p-4 bg-white rounded-lg shadow-lg"
                  custom={1}
                  variants={floatAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <svg className="text-[#E4405F]" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.5C17.33 3.5 14.7199 4.23 12.4499 5.61C10.1799 6.99 8.35013 8.97 7.17513 11.3349C6.00013 13.7 5.52513 16.35 5.80013 18.96C6.07513 21.56 7.09013 24.0149 8.70013 26.0549L5.90013 34.1L14.2501 31.36C16.2399 32.81 18.5851 33.575 21.0001 33.575C23.4151 33.575 25.7601 32.81 27.7501 31.36L36.1001 34.1L33.3001 26.0549C34.9099 24.0149 35.9251 21.56 36.2001 18.96C36.4751 16.35 36.0001 13.7 34.8251 11.3349C33.6501 8.97 31.8199 6.99 29.5499 5.61C27.2799 4.23 24.67 3.5 22 3.5H20Z"/>
                  </svg>
                  <div className="mt-1 text-xs font-medium text-center">Instagram</div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 left-1/4 p-4 bg-white rounded-lg shadow-lg"
                  custom={2}
                  variants={floatAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <svg className="text-[#1877F2]" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C40 8.955 31.045 0 20 0C8.955 0 0 8.955 0 20C0 29.985 7.315 38.175 16.875 39.7V25.7812H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4297 7.8125C26.6172 7.8125 28.9062 8.2031 28.9062 8.2031V13.125H26.3828C23.9 13.125 23.125 14.6688 23.125 16.25V20H28.6719L27.7852 25.7812H23.125V39.7C32.685 38.175 40 29.985 40 20Z"/>
                  </svg>
                  <div className="mt-1 text-xs font-medium text-center">Messenger</div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 p-4 bg-white rounded-lg shadow-lg"
                  custom={3}
                  variants={floatAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <svg className="text-[#0088CC]" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM30 13.75C29.5 16.55 28.05 24.1 27.3 27.65C27 29.15 26.35 29.65 25.75 29.7C24.45 29.85 23.45 28.85 22.15 28C19.95 26.65 18.75 25.85 16.6 24.5C14.15 22.95 15.75 22.15 17.15 20.7C17.55 20.3 23.1 15.25 23.25 14.8C23.2727 14.7351 23.2801 14.664 23.2714 14.5954C23.2626 14.5268 23.238 14.4629 23.2 14.4091C23.1465 14.3391 23.0717 14.2874 22.9867 14.2619C22.9018 14.2364 22.8111 14.2385 22.7275 14.2679C22.65 14.3 20.35 15.85 15.85 19C15.1 19.5 14.45 19.75 13.85 19.75C13.2 19.75 12 19.4 11.05 19.1C9.9 18.75 9 18.55 9.15 17.9C9.25 17.55 9.7 17.25 10.5 16.9C15.35 14.75 18.55 13.35 20.15 12.75C24.8 10.95 25.7 10.65 26.3 10.65C26.45 10.65 26.85 10.7 27.1 10.9C27.3333 11.0833 27.4 11.2667 27.4 11.45C27.45 11.6 27.45 11.95 27.4 12.25C27.25 13 30 13.75 30 13.75Z"/>
                  </svg>
                  <div className="mt-1 text-xs font-medium text-center">Telegram</div>
                </motion.div>
                
                {/* Logo Focol no centro com efeito de pulsação */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-full shadow-xl"
                  animate={{ 
                    boxShadow: [
                      "0px 0px 0px rgba(94, 23, 235, 0.2)",
                      "0px 0px 30px rgba(94, 23, 235, 0.4)",
                      "0px 0px 0px rgba(94, 23, 235, 0.2)"
                    ],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="font-montserrat font-bold text-2xl text-primary">FOCOL</div>
                </motion.div>
                
                {/* Linhas de conexão animadas */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M50 50 L 200 200" 
                    stroke="url(#grad1)" 
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M350 100 L 200 200" 
                    stroke="url(#grad1)" 
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                  <motion.path 
                    d="M100 320 L 200 200" 
                    stroke="url(#grad1)" 
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 1.1 }}
                  />
                  <motion.path 
                    d="M300 280 L 200 200" 
                    stroke="url(#grad1)" 
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#5E17EB" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#5E17EB" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;