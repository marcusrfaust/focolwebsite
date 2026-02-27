'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Ícones (poderiam ser importados de uma biblioteca como react-icons)
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

type PlanFeature = {
  name: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
};

const plansData: Plan[] = [
  {
    id: 'starter',
    name: 'Iniciante',
    priceMonthly: 'R$ 99',
    priceYearly: 'R$ 79',
    description: 'Ideal para pequenos negócios começando a unificar seus canais.',
    features: [
      { name: 'Até 2 usuários', included: true },
      { name: 'Integração WhatsApp e Instagram', included: true },
      { name: 'Chatbot básico', included: true },
      { name: 'Relatórios simples', included: true },
      { name: 'Suporte por email', included: true },
      { name: 'API de Integração', included: false },
      { name: 'Gerente de Contas Dedicado', included: false },
    ],
    ctaText: 'Começar Agora',
    ctaLink: '/signup?plan=starter',
  },
  {
    id: 'pro',
    name: 'Profissional',
    priceMonthly: 'R$ 249',
    priceYearly: 'R$ 199',
    description: 'Para empresas em crescimento que buscam automação e mais canais.',
    features: [
      { name: 'Até 10 usuários', included: true },
      { name: 'Todos os canais disponíveis', included: true },
      { name: 'Chatbot com IA (básico)', included: true },
      { name: 'Relatórios avançados', included: true },
      { name: 'Suporte prioritário por chat', included: true },
      { name: 'API de Integração', included: true },
      { name: 'Gerente de Contas Dedicado', included: false },
    ],
    ctaText: 'Escolher Profissional',
    ctaLink: '/signup?plan=pro',
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: 'Personalizado',
    priceYearly: 'Personalizado',
    description: 'Soluções sob medida para grandes empresas com necessidades complexas.',
    features: [
      { name: 'Usuários ilimitados', included: true },
      { name: 'Todos os canais e integrações customizadas', included: true },
      { name: 'Chatbot com IA avançada e fluxos complexos', included: true },
      { name: 'Dashboard e BI personalizados', included: true },
      { name: 'Suporte premium 24/7 e SLA dedicado', included: true },
      { name: 'API de Integração e Webhooks', included: true },
      { name: 'Gerente de Contas Dedicado e Consultoria', included: true },
    ],
    ctaText: 'Fale Conosco',
    ctaLink: '/contact?plan=enterprise',
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Planos flexíveis para o tamanho da sua necessidade
          </h2>
          <p className="text-lg text-gray-600">
            Escolha o plano ideal para unificar seus canais, automatizar processos e escalar seu atendimento.
          </p>
        </motion.div>

        {/* Toggle Mensal/Anual */}
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center p-1 bg-gray-200 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative z-10 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                billingCycle === 'monthly' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative z-10 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Anual (Economize 20%)
            </button>
            <motion.div
              className="absolute inset-0 bg-purple-700 rounded-lg shadow-md"
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              initial={false}
              animate={{ x: billingCycle === 'monthly' ? 0 : '100%' }}
              style={{ width: '50%' }}
            />
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plansData.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col relative overflow-hidden ${
                plan.isPopular ? 'border-2 border-purple-700' : 'border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -right-16 transform rotate-45 bg-purple-700 text-white text-xs font-semibold py-1 px-16">
                  Popular
                </div>
              )}
              
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4 min-h-[60px]">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                </span>
                <span className="text-gray-500">{billingCycle === 'monthly' ? '/mês' : '/mês (cob. anual)'}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start">
                    {feature.included ? <CheckIcon /> : <MinusIcon />}
                    <span className={`ml-2 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500 line-through'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link 
                href={plan.ctaLink}
                className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                  plan.isPopular 
                    ? 'bg-purple-700 text-white hover:bg-purple-800' 
                    : 'bg-gray-100 text-purple-700 hover:bg-gray-200'
                }`}
              >
                {plan.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Seção de Personalização / Enterprise */}
        <motion.div 
          className="mt-16 md:mt-24 text-center bg-gray-900 text-white p-8 md:p-12 rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">Precisa de uma solução mais robusta?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Oferecemos planos Enterprise totalmente personalizáveis para atender às demandas específicas de grandes empresas, com integrações dedicadas, suporte premium e consultoria especializada.
          </p>
          <Link 
            href="/contact?subject=Enterprise%20Plan"
            className="bg-white text-purple-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-lg"
          >
            Fale com um especialista
          </Link>
        </motion.div>

        {/* FAQ Rápido */}
        <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h3>
          <div className="space-y-4">
            {[ 
              { q: 'Posso testar a Focol antes de assinar?', a: 'Sim! Oferecemos um teste gratuito de 14 dias em nosso plano Profissional para você experimentar todos os recursos.' },
              { q: 'Como funciona a cobrança anual?', a: 'A cobrança anual é feita uma única vez e oferece um desconto de 20% em relação ao plano mensal.' },
              { q: 'Posso mudar de plano a qualquer momento?', a: 'Sim, você pode fazer upgrade, downgrade ou cancelar seu plano a qualquer momento diretamente no painel.' },
              { q: 'Quais métodos de pagamento são aceitos?', a: 'Aceitamos os principais cartões de crédito e boleto bancário para planos anuais.' }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-5 rounded-lg shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
              >
                <h4 className="font-semibold text-gray-800 mb-1">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
