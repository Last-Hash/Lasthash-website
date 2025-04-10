import { Box } from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import AboutSection from '../components/home/AboutSection';
import TechnologyStack from '../components/home/TechnologyStack';
import ClientTestimonials from '../components/home/ClientTestimonials';
import ContactCTA from '../components/home/ContactCTA';
import SEO from '../components/common/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Lasthash - Innovative Software Development Solutions"
        description="Transform your business with custom software solutions. We specialize in web development, mobile apps, cloud services and digital transformation."
        keywords="software development, web development, mobile apps, react, node.js, digital transformation"
        canonical="/"
      />
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
    </>
  );
}