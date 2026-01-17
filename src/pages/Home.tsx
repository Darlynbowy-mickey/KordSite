import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServiceSection';
import AboutSection from '@/components/home/AboutSection';
import PrinciplesSection from '@/components/home/PrinciplesSection';
import GeographySection from '@/components/home/GeographySection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PrinciplesSection />
      <GeographySection />
    </main>
  );
}