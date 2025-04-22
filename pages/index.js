import { Box } from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioCarousel from '../components/home/PortfolioCarousel';
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
    console.error('Error fetching data:', error);
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
      
      <Box 
        component="main" 
        role="main"
        sx={{ 
          minHeight: '100vh',
          // Improve color contrast for better accessibility
          backgroundColor: theme => theme.palette.mode === 'dark' 
            ? '#121212' 
            : '#ffffff'
        }}
      >
        <MainLayout isTransparentHeader>
          {/* Skip to main content link for keyboard users */}
          <Box
            component="a"
            href="#main-content"
            sx={{
              position: 'absolute',
              left: -9999,
              zIndex: 999,
              padding: 2,
              backgroundColor: 'background.paper',
              color: 'text.primary',
              textDecoration: 'none',
              '&:focus': {
                left: 0,
                top: 0
              }
            }}
          >
            Skip to main content
          </Box>

          <Box id="main-content" tabIndex={-1}>
            {/* Hero Section with improved landmarks */}
            <header>
              <HeroSection />
            </header>

            {/* Main content sections */}
            <Box component="article" role="article">
              <ServicesSection />
              
              <PortfolioCarousel 
                portfolios={portfolios?.data || []} // Changed from portfoliosData to portfolios
                isLoading={isLoading} 
                hasError={error}
                aria-busy={isLoading}
                aria-live="polite"
              />
              
              <AboutSection />
              
              <TechnologyStack 
                technologiesData={technologies} 
                isLoading={isLoading} 
                hasError={error}
                aria-busy={isLoading}
                aria-live="polite"
              />
              
              <ClientTestimonials />
            </Box>

            {/* Call to action section */}
            <Box component="aside" role="complementary">
              <ContactCTA />
            </Box>
          </Box>
        </MainLayout>
      </Box>
    </>
  );
}