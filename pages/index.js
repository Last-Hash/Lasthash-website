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
    // Fetch technologies with sorting, pagination, and populate
    const technologies = await fetchAPI("/technologies", {
      sort: ['Category:asc', 'Name:asc'],
      pagination: {
        limit: 100
      },
      populate: "*"
    });
    
    // Fetch featured portfolios
    const portfolios = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      pagination: {
        limit: 6
      },
      filters: {
        featured: true
      },
      populate: "*"
    });
    
    // Check for successful API responses
    const hasTechnologies = technologies && technologies.data && technologies.data.length > 0;
    const hasPortfolios = portfolios && portfolios.data && portfolios.data.length > 0;
    
    return {
      props: {
        technologies: hasTechnologies ? technologies : { data: [] },
        portfolios: hasPortfolios ? portfolios : { data: [] },
        isLoading: false
      },
      // Revalidate content every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        technologies: { data: [] },
        portfolios: { data: [] },
        isLoading: false,
        error: true
      },
      // Revalidate sooner if there was an error
      revalidate: 60,
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