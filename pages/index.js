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
import { fetchAPI } from '../utils/api';

export async function getStaticProps() {
  try {
    const technologies = await fetchAPI("/technologies", {
      sort: ['Category:asc', 'Name:asc'],
      filters: {
        Featured: true
      },
      pagination: {
        limit: 100
      },
      populate: "*"
    });
    
    const portfolios = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      populate: {
        ThumbnailImage: { populate: '*' },
        technologies: { populate: '*' },
        portfolio_categories: { populate: '*' }
      }
    });
    
    return {
      props: {
        technologies: technologies?.data ? technologies : { data: [] },
        portfolios: portfolios?.data ? portfolios : { data: [] },
        isLoading: false,
        error: false
      }
    };
  } catch (error) {
    return {
      props: {
        technologies: { data: [] },
        portfolios: { data: [] },
        isLoading: false,
        error: true
      }
    };
  }
}

export default function Home({ technologies, portfolios, isLoading, error }) {
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
          <PortfolioSection portfoliosData={portfolios} isLoading={isLoading} hasError={error} />
          <AboutSection />
          <TechnologyStack 
            technologiesData={technologies} 
            isLoading={isLoading} 
            hasError={error} 
          />
          <ClientTestimonials />
          <ContactCTA />
        </MainLayout>
      </Box>
    </>
  );
}