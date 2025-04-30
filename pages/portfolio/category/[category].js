import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../../../components/layouts/MainLayout';
import SEO from '../../../components/common/SEO';
import Breadcrumbs from '../../../components/common/Breadcrumbs';
import PortfolioGrid from '../../../components/shared/PortfolioGrid';
import { fetchAPI } from '../../../utils/api';
import PortfolioCarousel from '../../../components/home/PortfolioCarousel';

export async function getStaticPaths() {
  try {
    const response = await fetchAPI("/portfolio-categories", {
      pagination: {
        pageSize: 1000,
        page: 1
      },
      fields: ['slug', 'id', 'documentId']
    });

    if (!response?.data) {
      return { paths: [], fallback: false };
    }

    const paths = response.data.map(category => ({
      params: { category: category.slug }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    // First get category details
    const categoryResponse = await fetchAPI("/portfolio-categories", {
      filters: { 
        slug: params.category 
      },
      fields: ['title', 'slug', 'description', 'documentId']
    });

    if (!categoryResponse.data?.[0]) {
      return { notFound: true };
    }

    // Get category portfolios
    const portfoliosResponse = await fetchAPI("/portfolios", {
      filters: {
        portfolio_categories: {
          slug: {
            $eq: params.category
          }
        }
      },
      pagination: {
        pageSize: 1000
      },
      populate: {
        ThumbnailImage: true,
        technologies: {
          populate: '*'
        }
      }
    });

    // Get featured projects (up to 10)
    const featuredProjectsResponse = await fetchAPI("/portfolios", {
      filters: {
        Featured: true  // Changed from Featured to featured
      },
      pagination: {
        pageSize: 10
      },
      populate: {
        ThumbnailImage: true,
        technologies: {
          populate: '*'
        },
        portfolio_categories: {
          fields: ['title', 'slug']
        }
      }
    });

    return {
      props: {
        category: categoryResponse.data[0],
        portfolios: portfoliosResponse.data || [],
        featuredProjects: featuredProjectsResponse.data || []
      }
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function CategoryPage({ category, portfolios, featuredProjects }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const breadcrumbItems = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: category.title, href: `/portfolio/category/${category.slug}` }
  ];

  return (
    <>
      <SEO 
        title={`${category.title} Projects | LastHash Portfolio`}
        description={category.description || `Explore our ${category.title} projects and case studies`}
      />

      <MainLayout>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: '50vh', md: '60vh' },
            width: '100%',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8))',
              zIndex: 1
            }
          }}
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: `
                radial-gradient(circle at 1px 1px, ${theme.palette.primary.main} 1px, transparent 0)
              `,
              backgroundSize: '40px 40px',
              zIndex: 0
            }}
          />

          <Container
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
              color: 'white',
              pt: { xs: 8, md: 12 }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                maxWidth: '800px',
                width: '100%',
                textAlign: 'center'
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Breadcrumbs items={breadcrumbItems} light />
              </Box>
              
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  position: 'relative',
                  mb: 3,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '4px',
                    background: theme.palette.primary.main,
                    borderRadius: '2px'
                  }
                }}
              >
                {category.title}
              </Typography>

              {category.description && (
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                    opacity: 0.9,
                    maxWidth: '600px',
                    fontSize: '1.1rem',
                    lineHeight: 1.6
                  }}
                >
                  {category.description}
                </Typography>
              )}

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: theme.palette.primary.main,
                  fontWeight: 500
                }}
              >
                {portfolios.length} Project{portfolios.length !== 1 ? 's' : ''} Available
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Main Projects Grid */}
        <Container sx={{ py: { xs: 6, md: 8 } }}>
          {portfolios.length > 0 ? (
            <PortfolioGrid 
              portfolios={portfolios}
              columns={{ xs: 12, sm: 6, md: 4 }}
            />
          ) : (
            <Box
              sx={{
                textAlign: 'center',
                py: 8
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: isDark ? 'grey.300' : 'grey.700',
                  mb: 2
                }}
              >
                No projects found in {category.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? 'grey.400' : 'grey.600'
                }}
              >
                Check back later for new projects in this category.
              </Typography>
            </Box>
          )}
        </Container>

        {/* Related Projects Carousel */}
        {featuredProjects.length > 0 && (
          <Box
            sx={{
              bgcolor: isDark ? 'grey.900' : 'grey.100',
              py: { xs: 6, md: 8 }
            }}
          >
            <Container>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  mb: 6,
                  fontWeight: 600,
                  color: isDark ? 'grey.100' : 'grey.900'
                }}
              >
                Featured Projects
              </Typography>
              
              <PortfolioCarousel 
                items={featuredProjects}
                isDark={isDark}
              />
            </Container>
          </Box>
        )}
      </MainLayout>
    </>
  );
}