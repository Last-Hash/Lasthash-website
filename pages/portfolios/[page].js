import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Pagination, 
  Chip, 
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import PortfolioGrid from '../../components/shared/PortfolioGrid';
import ParticleBackground from '../../components/effects/ParticleBackground';
import { fetchAPI } from '../../utils/api';

// Items per page options
const ITEMS_PER_PAGE = 2;

export async function getStaticPaths() {
  try {
    const portfoliosData = await fetchAPI("/portfolios", {
      pagination: {
        page: 1,
        pageSize: 1 // We only need count information
      }
    });

    const totalPages = portfoliosData.meta.pagination.pageCount || 0;

    const paths = Array.from({ length: totalPages }, (_, i) => ({
      params: { page: String(i + 1) }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [{ params: { page: '1' } }],
      fallback: false
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    // Fetch portfolios with proper population and sorting
    const portfoliosData = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      pagination: {
        page: parseInt(params.page),
        pageSize: ITEMS_PER_PAGE
      },
      populate: {
        ThumbnailImage: true,
        technologies: {
          fields: ['Name', 'id']
        },
        portfolio_categories: true
      }
    });

    if (!portfoliosData?.data) {
      throw new Error('Invalid API response');
    }

    return {
      props: {
        portfolios: portfoliosData.data,
        currentPage: parseInt(params.page),
        totalPages: portfoliosData.meta.pagination.pageCount,
        totalItems: portfoliosData.meta.pagination.total,
        error: false
      },
      revalidate: 3600 // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return {
      props: {
        portfolios: [],
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        error: true
      }
    };
  }
}

const PortfolioPage = ({ portfolios, currentPage, totalPages, totalItems, error }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [activeCategory, setActiveCategory] = useState('all');

  // Helper function to get the correct URL for pagination
  const getPageUrl = (page) => {
    return page === 1 ? '/portfolios' : `/portfolios/${page}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Updated breadcrumbs
  const breadcrumbItems = [
    { label: 'Portfolio', href: '/portfolios' },
    ...(currentPage > 1 ? [{ label: `Page ${currentPage}`, current: true }] : [])
  ];

  // Dynamic SEO content
  const seoData = {
    title: `Portfolio Projects - Page ${currentPage} | Lasthash`,
    description: `Explore our portfolio of successful projects and digital solutions. Browse through our work in web development, mobile apps, and enterprise solutions. Page ${currentPage} of ${totalPages}.`,
    keywords: [
      'portfolio projects',
      'web development',
      'mobile apps',
      'digital solutions',
      'case studies',
      'IT services',
      'software development',
      'Lasthash projects'
    ].join(', '),
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${getPageUrl(currentPage)}`,
    openGraph: {
      title: `Portfolio Projects - Page ${currentPage} | Lasthash`,
      description: `Explore our portfolio of successful projects and digital solutions. Page ${currentPage} of ${totalPages}.`,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}${getPageUrl(currentPage)}`,
    }
  };

  return (
    <>
      <SEO {...seoData} />

      <MainLayout>
        {/* Hero Section with Breadcrumbs */}
        <Box 
          sx={{ 
            position: 'relative',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            background: isDark 
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
              : 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
            color: 'white',
            overflow: 'hidden',
            pt: { xs: 12, md: 16 },
            pb: { xs: 8, md: 12 }
          }}
        >
          <ParticleBackground />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Breadcrumbs items={breadcrumbItems} light />
              
              <Typography
                variant="h1"
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  textAlign: 'center'
                }}
              >
                Our Portfolio
              </Typography>
              
              <Typography 
                variant="h5"
                sx={{ 
                  maxWidth: '800px',
                  mx: 'auto',
                  opacity: 0.9,
                  textAlign: 'center',
                  mb: 4
                }}
              >
                Discover our successful projects and transformative solutions
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Portfolio Grid Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? 'background.default' : 'grey.50' }}>
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {error ? (
                <Typography align="center" color="error">
                  Error loading portfolios. Please try again later.
                </Typography>
              ) : (
                <>
                  <PortfolioGrid portfolios={portfolios} />
                  
                  {/* Pagination Controls */}
                  <Box
                    sx={{
                      mt: 6,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    <Pagination 
                      count={totalPages}
                      page={currentPage}
                      color="primary"
                      size="large"
                      onChange={(e, page) => {
                        window.location.href = getPageUrl(page);
                      }}
                    />
                  </Box>
                </>
              )}
            </motion.div>
          </Container>
        </Box>
      </MainLayout>
    </>
  );
};

export default PortfolioPage;