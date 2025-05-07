import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import HowItWorks from '@/components/sections/HowItWorks';
import ForWho from '@/components/sections/ForWho';
import SocialProof from '@/components/sections/SocialProof';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <HowItWorks />
      <ForWho />
      <SocialProof />
      <CTASection />
    </main>
  );
}
