import { Box, Container, Typography } from '@mui/material';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import PortfolioGrid from '../../components/shared/PortfolioGrid';
import { fetchAPI } from '../../utils/api';

export async function getStaticProps() {
  try {
    const portfolios = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      populate: {
        ThumbnailImage: {
          populate: '*'
        },
        technologies: {
          populate: '*'
        },
        portfolio_categories: {
          populate: '*'
        }
      }
    });

    return {
      props: {
        portfolios: portfolios.data || [],
        isLoading: false,
        error: false
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return {
      props: {
        portfolios: [],
        isLoading: false,
        error: true
      },
      revalidate: 60,
    };
  }
}

export default function Portfolio({ portfolios, isLoading, error }) {
  return (
    <>
      <SEO 
        title="Our Portfolio | Lasthash"
        description="Explore our successful projects and case studies. View our work in web development, mobile apps, and digital solutions."
        keywords="portfolio, case studies, web development projects, mobile apps, software solutions"
        canonical="/portfolio"
      />

      <MainLayout>
        {/* Hero Section */}
        <Box 
          sx={{ 
            py: { xs: 8, md: 12 },
            background: theme => 
              theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #141e30 0%, #243b55 100%)'
                : 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h1"
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                mb: 2
              }}
            >
              Our Portfolio
            </Typography>
            <Typography 
              variant="h5"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9
              }}
            >
              Discover our successful projects and transformative solutions
            </Typography>
          </Container>
        </Box>

        {/* Portfolio Grid */}
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container>
            <PortfolioGrid 
              portfolios={portfolios}
              isLoading={isLoading}
              hasError={error}
            />
          </Container>
        </Box>
      </MainLayout>
    </>
  );
}