import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features'; // Added import for Features
// import Benefits from '@/components/sections/Benefits';
// import HowItWorks from '@/components/sections/HowItWorks';
// import ForWho from '@/components/sections/ForWho';
// import SocialProof from '@/components/sections/SocialProof';
// import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features /> {/* Added Features component */}
      {/* <Benefits /> */}
      {/* <HowItWorks /> */}
      {/* <ForWho /> */}
      {/* <SocialProof /> */}
      {/* <CTASection /> */}
    </main>
  );
}
