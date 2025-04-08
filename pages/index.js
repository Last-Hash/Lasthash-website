import { Box } from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
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
      <MainLayout isTransparentHeader>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TechnologyStack />
        <ClientTestimonials />
        <ContactCTA />
      </MainLayout>
    </Box>
  );
}