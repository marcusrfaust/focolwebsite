'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

// Tipos para os planos de preços
interface PlanFeature {
  id: string;
  name: string;
  included: boolean | string;
}

interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
  borderColor?: string;
}

const Pricing = () => {
  const { translate } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  
  // Configuração dos planos de preços
  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: translate('pricing.starter.name', 'Iniciante'),
      price: {
        monthly: 49,
        annually: 39
      },
      description: translate('pricing.starter.description', 'Ideal para pequenas empresas iniciando com atendimento automatizado'),
      features: [
        { id: 'channels', name: translate('pricing.features.channels', 'Canais de atendimento'), included: '3' },
        { id: 'operators', name: translate('pricing.features.operators', 'Atendentes'), included: '2' },
        { id: 'automations', name: translate('pricing.features.automations', 'Automações básicas'), included: true },
        { id: 'chatbot', name: translate('pricing.features.chatbot', 'Chatbot simples'), included: true },
        { id: 'analytics', name: translate('pricing.features.analytics', 'Relatórios básicos'), included: true },
        { id: 'integrations', name: translate('pricing.features.integrations', 'Integrações'), included: '5' },
        { id: 'support', name: translate('pricing.features.support', 'Suporte'), included: translate('pricing.features.email_support', 'Email') },
        { id: 'api', name: translate('pricing.features.api', 'Acesso à API'), included: false },
        { id: 'customization', name: translate('pricing.features.customization', 'Personalização avançada'), included: false },
      ],
      cta: translate('pricing.starter.cta', 'Começar grátis'),
      borderColor: 'border-blue-400'
    },
    {
      id: 'professional',
      name: translate('pricing.professional.name', 'Profissional'),
      price: {
        monthly: 129,
        annually: 99
      },
      description: translate('pricing.professional.description', 'Perfeito para empresas em crescimento com necessidades de atendimento mais complexas'),
      features: [
        { id: 'channels', name: translate('pricing.features.channels', 'Canais de atendimento'), included: '7' },
        { id: 'operators', name: translate('pricing.features.operators', 'Atendentes'), included: '10' },
        { id: 'automations', name: translate('pricing.features.automations', 'Automações avançadas'), included: true },
        { id: 'chatbot', name: translate('pricing.features.chatbot', 'Chatbot inteligente com IA'), included: true },
        { id: 'analytics', name: translate('pricing.features.analytics', 'Relatórios avançados'), included: true },
        { id: 'integrations', name: translate('pricing.features.integrations', 'Integrações'), included: '15' },
        { id: 'support', name: translate('pricing.features.support', 'Suporte'), included: translate('pricing.features.chat_support', 'Chat e email') },
        { id: 'api', name: translate('pricing.features.api', 'Acesso à API'), included: true },
        { id: 'customization', name: translate('pricing.features.customization', 'Personalização avançada'), included: false },
      ],
      cta: translate('pricing.professional.cta', 'Começar grátis'),
      popular: true,
      borderColor: 'border-primary'
    },
    {
      id: 'enterprise',
      name: translate('pricing.enterprise.name', 'Empresarial'),
      price: {
        monthly: 299,
        annually: 249
      },
      description: translate('pricing.enterprise.description', 'Solução completa para grandes empresas com altos volumes de atendimento'),
      features: [
        { id: 'channels', name: translate('pricing.features.channels', 'Canais de atendimento'), included: translate('pricing.features.unlimited', 'Ilimitados') },
        { id: 'operators', name: translate('pricing.features.operators', 'Atendentes'), included: '25+' },
        { id: 'automations', name: translate('pricing.features.automations', 'Automações personalizadas'), included: true },
        { id: 'chatbot', name: translate('pricing.features.chatbot', 'Chatbot avançado com IA'), included: true },
        { id: 'analytics', name: translate('pricing.features.analytics', 'Business Intelligence'), included: true },
        { id: 'integrations', name: translate('pricing.features.integrations', 'Integrações'), included: translate('pricing.features.unlimited', 'Ilimitadas') },
        { id: 'support', name: translate('pricing.features.support', 'Suporte'), included: translate('pricing.features.priority_support', 'Prioritário 24/7') },
        { id: 'api', name: translate('pricing.features.api', 'Acesso à API'), included: true },
        { id: 'customization', name: translate('pricing.features.customization', 'Personalização avançada'), included: true },
      ],
      cta: translate('pricing.enterprise.cta', 'Contate vendas'),
      borderColor: 'border-purple-500'
    }
  ];

  // Função para formatar o preço com símbolo de moeda
  const formatPrice = (price: number) => {
    return `R$ ${price}`;
  };

  return (
    <Section background="light" paddingY="lg" id="precos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionTitle
          title={translate('pricing.title', 'Planos e preços simplificados')}
          subtitle={translate('pricing.subtitle', 'Escolha o plano ideal para o tamanho e necessidades do seu negócio')}
          centered={true}
          decorative={true}
        />
        
        {/* Alternador de ciclo de faturamento */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="flex items-center p-1 bg-gray-100 rounded-full">
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                billingCycle === 'monthly' 
                  ? 'bg-white shadow-sm text-gray-800' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              {translate('pricing.monthly', 'Mensal')}
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                billingCycle === 'annually' 
                  ? 'bg-white shadow-sm text-gray-800' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setBillingCycle('annually')}
            >
              <span className="flex items-center">
                {translate('pricing.annually', 'Anual')}
                <span className="ml-2 bg-green-100 text-green-700 text-xs py-0.5 px-1.5 rounded-full">
                  {translate('pricing.save', 'Economize 20%')}
                </span>
              </span>
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Grade de cartões de preços */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col h-full rounded-2xl bg-white shadow-lg border-2 ${plan.borderColor || 'border-gray-200'} overflow-hidden ${
              plan.popular ? 'md:-mt-4 md:mb-4 md:pt-4 md:pb-4 relative z-10 shadow-xl' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-xs rounded-bl-lg font-medium">
                {translate('pricing.most_popular', 'Mais popular')}
              </div>
            )}
            
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-6 text-sm md:text-base">{plan.description}</p>
              
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl md:text-5xl font-bold">
                    {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually)}
                  </span>
                  <span className="text-gray-500 ml-2 mb-1">/{translate('pricing.month', 'mês')}</span>
                </div>
                {billingCycle === 'annually' && (
                  <div className="text-green-600 text-sm mt-1">
                    {translate('pricing.per_year', 'faturado anualmente')}
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.id} className="flex items-start">
                    {feature.included ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300 mt-0.5 mr-3 flex-shrink-0">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                      </svg>
                    )}
                    <div>
                      <span className="text-gray-700">{feature.name}</span>
                      {typeof feature.included === 'string' && feature.included !== 'true' && (
                        <span className="font-medium text-gray-900 ml-1">{feature.included}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="px-6 pb-8 md:px-8 md:pb-8">
              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                href={plan.id === 'enterprise' ? '/contato' : '/cadastro'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Seção de FAQ */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">
          {translate('pricing.questions', 'Tem perguntas sobre nossos planos?')}
        </p>
        <a href="/faq" className="text-primary font-medium hover:underline">
          {translate('pricing.view_faq', 'Consulte nossas perguntas frequentes')}
        </a>
      </div>
    </Section>
  );
};

export default Pricing;