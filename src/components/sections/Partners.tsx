'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

// Interface para os dados de cada parceiro/integração
interface PartnerProps {
  id: number;
  nome: string;
  logo: string;
  categoria: 'messaging' | 'crm' | 'ecommerce' | 'payment';
}

const Partners = () => {
  const { translate } = useLanguage();

  // Array com os dados dos parceiros e integrações
  const partners: PartnerProps[] = [
    // Plataformas de Mensagens
    { id: 1, nome: 'WhatsApp', logo: '/images/partners/whatsapp.svg', categoria: 'messaging' },
    { id: 2, nome: 'Instagram', logo: '/images/partners/instagram.svg', categoria: 'messaging' },
    { id: 3, nome: 'Facebook Messenger', logo: '/images/partners/messenger.svg', categoria: 'messaging' },
    { id: 4, nome: 'Telegram', logo: '/images/partners/telegram.svg', categoria: 'messaging' },
    { id: 5, nome: 'WeChat', logo: '/images/partners/wechat.svg', categoria: 'messaging' },
    
    // Plataformas de CRM
    { id: 6, nome: 'Salesforce', logo: '/images/partners/salesforce.svg', categoria: 'crm' },
    { id: 7, nome: 'HubSpot', logo: '/images/partners/hubspot.svg', categoria: 'crm' },
    { id: 8, nome: 'Pipedrive', logo: '/images/partners/pipedrive.svg', categoria: 'crm' },
    { id: 9, nome: 'Zendesk', logo: '/images/partners/zendesk.svg', categoria: 'crm' },
    
    // Plataformas de E-commerce
    { id: 10, nome: 'Shopify', logo: '/images/partners/shopify.svg', categoria: 'ecommerce' },
    { id: 11, nome: 'WooCommerce', logo: '/images/partners/woocommerce.svg', categoria: 'ecommerce' },
    { id: 12, nome: 'Magento', logo: '/images/partners/magento.svg', categoria: 'ecommerce' },
    { id: 13, nome: 'VTEX', logo: '/images/partners/vtex.svg', categoria: 'ecommerce' },
    
    // Gateways de Pagamento
    { id: 14, nome: 'Stripe', logo: '/images/partners/stripe.svg', categoria: 'payment' },
    { id: 15, nome: 'PayPal', logo: '/images/partners/paypal.svg', categoria: 'payment' },
    { id: 16, nome: 'Mercado Pago', logo: '/images/partners/mercadopago.svg', categoria: 'payment' },
  ];

  // Variantes de animação para os logotipos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section background="light" paddingY="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionTitle
          title={translate('partners.title', 'Integre-se com as plataformas que você já usa')}
          subtitle={translate('partners.subtitle', 'A Focol se conecta perfeitamente com mais de 50 ferramentas populares para potencializar seu atendimento')}
          centered={true}
          decorative={false}
        />
      </motion.div>
      
      <div className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12">
          <motion.div
            className="col-span-2 md:col-span-4 lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-6">
              {translate('partners.messaging_platforms', 'Plataformas de Mensagens')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
              {partners.filter(p => p.categoria === 'messaging').map(partner => (
                <motion.div
                  key={partner.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center h-24"
                  variants={itemVariants}
                >
                  <div className="relative w-full h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="col-span-2 md:col-span-4 lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-6">
              {translate('partners.crm_platforms', 'Plataformas de CRM')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {partners.filter(p => p.categoria === 'crm').map(partner => (
                <motion.div
                  key={partner.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center h-24"
                  variants={itemVariants}
                >
                  <div className="relative w-full h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="col-span-2 md:col-span-4 lg:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-6">
              {translate('partners.ecommerce_platforms', 'Plataformas de E-commerce')}
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {partners.filter(p => p.categoria === 'ecommerce').map(partner => (
                <motion.div
                  key={partner.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center h-24"
                  variants={itemVariants}
                >
                  <div className="relative w-full h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="col-span-2 md:col-span-4 lg:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-6">
              {translate('partners.payment_platforms', 'Gateways de Pagamento')}
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {partners.filter(p => p.categoria === 'payment').map(partner => (
                <motion.div
                  key={partner.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center h-24"
                  variants={itemVariants}
                >
                  <div className="relative w-full h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500">
            {translate('partners.more_integrations', 'E muitas outras integrações disponíveis através de nossa API aberta e webhooks personalizáveis.')}
          </p>
          <p className="mt-4">
            <a href="/integracoes" className="text-primary font-medium hover:underline inline-flex items-center">
              {translate('partners.view_all', 'Ver todas as integrações')}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Partners;