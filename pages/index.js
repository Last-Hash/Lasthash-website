import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import AboutSection from '../components/home/AboutSection';
import TechnologyStack from '../components/home/TechnologyStack';
import ClientTestimonials from '../components/home/ClientTestimonials';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TechnologyStack />
      <ClientTestimonials />
      <ContactCTA />
    </Box>
  );
}