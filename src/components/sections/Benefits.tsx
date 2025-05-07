'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';

// Interface para os dados do benefício
interface BenefitProps {
  numero: number;
  titulo: string;
  descricao: string;
  linkSaibaMais: string;
  icone: React.ReactNode;
}

// Componente para cada card de benefício
const BenefitCard = ({ beneficio, index }: { beneficio: BenefitProps, index: number }) => {
  const { translate } = useLanguage();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.1 * index
      }
    }
  };

  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full hover:shadow-card-hover transition-shadow duration-300">
        <CardHeader>
          <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            {beneficio.icone}
          </div>
          <CardTitle>{beneficio.titulo}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400">{beneficio.descricao}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link 
            href={beneficio.linkSaibaMais} 
            className="text-primary hover:underline flex items-center group"
          >
            {translate('benefits.learn_more', 'Saiba Mais')}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="ml-1 w-5 h-5 transition-transform transform group-hover:translate-x-1"
            >
              <path 
                fillRule="evenodd" 
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Componente principal da seção de benefícios
const Benefits = () => {
  const { translate } = useLanguage();
  
  // Array com os dados dos benefícios
  const beneficios: BenefitProps[] = [
    {
      numero: 1,
      titulo: translate('benefits.card1.title', 'Todos os canais em um só lugar'),
      descricao: translate('benefits.card1.description', 'Simplifique sua operação com WhatsApp, Instagram, Facebook Messenger, SMS, Telegram e mais, tudo gerenciado a partir de uma única tela. Chega de perder mensagens ou informações importantes.'),
      linkSaibaMais: "/recursos/omnichannel",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
      )
    },
    {
      numero: 2,
      titulo: translate('benefits.card2.title', 'Automação inteligente que trabalha por você'),
      descricao: translate('benefits.card2.description', 'Configure chatbots com IA para responder dúvidas frequentes 24/7, qualificar leads e direcionar clientes para o agente certo, liberando sua equipe para focar em interações de maior valor.'),
      linkSaibaMais: "/recursos/automacao-ia",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      )
    },
    {
      numero: 3,
      titulo: translate('benefits.card3.title', 'Dados que geram resultados e decisões estratégicas'),
      descricao: translate('benefits.card3.description', 'Tenha acesso a relatórios detalhados e dashboards intuitivos sobre o desempenho do seu atendimento. Entenda o comportamento do cliente, identifique gargalos e otimize suas estratégias com base em informações concretas.'),
      linkSaibaMais: "/recursos/crm-analytics",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    },
    {
      numero: 4,
      titulo: translate('benefits.card4.title', 'Escale seu atendimento sem perder o controle'),
      descricao: translate('benefits.card4.description', 'Nossa plataforma é projetada para crescer com o seu negócio. Adicione novos usuários, canais e automações conforme sua demanda aumenta, mantendo sempre a alta performance e a qualidade do atendimento.'),
      linkSaibaMais: "/recursos/gestao-equipes",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      )
    }
  ];

  // Animação para o título da seção
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={titleAnimation}
      >
        <SectionTitle
          title={translate('benefits.title', 'Transforme seu atendimento com a Focol')}
          subtitle={translate('benefits.subtitle', 'Nossa plataforma oferece ferramentas poderosas para unificar seus canais, automatizar processos e escalar seu negócio.')}
          centered={true}
          decorative={true}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {beneficios.map((beneficio, index) => (
          <BenefitCard key={beneficio.numero} beneficio={beneficio} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Benefits;