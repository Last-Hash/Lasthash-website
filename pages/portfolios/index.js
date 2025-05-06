import { 
  Box, 
  Container, 
  Typography, 
  Pagination,
} from '@mui/material';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import PortfolioGrid from '../../components/shared/PortfolioGrid';
import ParticleBackground from '../../components/effects/ParticleBackground';
import { fetchAPI } from '../../utils/api';

const ITEMS_PER_PAGE = 2;

export async function getStaticProps() {
  try {
    const portfoliosData = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      pagination: {
        page: 1,
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

    return {
      props: {
        portfolios: portfoliosData.data,
        currentPage: 1,
        totalPages: portfoliosData.meta.pagination.pageCount,
        totalItems: portfoliosData.meta.pagination.total,
        error: false
      },
      revalidate: 3600
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

const PortfoliosPage = ({ portfolios, currentPage, totalPages, totalItems, error }) => {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  // Update handlePageChange to use /portfolios/[page] for pagination
  const handlePageChange = (event, value) => {
    if (value === 1) {
      router.push('/portfolios');
    } else {
      router.push(`/portfolios/${value}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update breadcrumbs - remove /portfolios/1 reference
  const breadcrumbItems = [
    { label: 'Portfolio', href: '/portfolios', current: true }
  ];

  // Update SEO data - remove /portfolios/1 references
  const seoData = {
    title: 'Our Portfolio | Lasthash',
    description: 'Explore our portfolio of successful projects and digital solutions. Browse through our work in web development, mobile apps, and enterprise solutions.',
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
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolios`,
    openGraph: {
      title: 'Our Portfolio | Lasthash',
      description: 'Explore our portfolio of successful projects and digital solutions.',
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolios`,
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
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'  // Center align all content
              }}
            >
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Breadcrumbs 
                  items={breadcrumbItems} 
                  light 
                  sx={{
                    '& .MuiBreadcrumbs-ol': {
                      justifyContent: 'center'
                    }
                  }}
                />
              </Box>
              
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
                  {totalPages > 1 && (
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
                        onChange={handlePageChange}
                      />
                    </Box>
                  )}
                </>
              )}
            </motion.div>
          </Container>
        </Box>
      </MainLayout>
    </>
  );
};

export default PortfoliosPage;