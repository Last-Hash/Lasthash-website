import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../../../components/layouts/MainLayout';
import SEO from '../../../components/common/SEO';
import Breadcrumbs from '../../../components/common/Breadcrumbs';
import PortfolioGrid from '../../../components/shared/PortfolioGrid';
import { fetchAPI } from '../../../utils/api';

// Update getStaticPaths to properly handle the API response
export async function getStaticPaths() {
  try {
    const response = await fetchAPI("/portfolio-categories", {
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
      fallback: false // Return 404 for non-existent slugs
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return { paths: [], fallback: false };
  }
}

// Update getStaticProps to match the API response structure
export async function getStaticProps({ params }) {
  try {
    console.log('Fetching data for category:', params.category);

    const response = await fetchAPI("/portfolio-categories", {
      filters: { 
        slug: {
          $eq: params.category
        }
      },
      populate: {
        portfolios: {
          populate: {
            ThumbnailImage: true,
            BannerImage: true,
            technologies: {
              populate: '*'
            },
            portfolio_categories: {
              fields: ['title', 'slug']
            }
          }
        }
      }
    });

    // Debug log the API response
    console.log('API Response data:', response.data);

    if (!response.data?.[0]) {
      console.error('Category not found:', params.category);
      return { notFound: true };
    }

    const categoryData = response.data[0];

    // Transform the data to match your component's expectations
    const transformedCategory = {
      id: categoryData.id,
      title: categoryData.title,
      slug: categoryData.slug,
      description: categoryData.description,
      documentId: categoryData.documentId
    };

    // Transform portfolios data
    const portfolios = categoryData.portfolios || [];
    const transformedPortfolios = portfolios.map(portfolio => ({
      id: portfolio.id,
      Title: portfolio.Title,
      Slug: portfolio.Slug,
      ThumbnailImage: portfolio.ThumbnailImage,
      ShortDescription: portfolio.ShortDescription,
      ProjectStatus: portfolio.ProjectStatus,
      CompletionDate: portfolio.CompletionDate,
      ClientName: portfolio.ClientName,
      LiveURL: portfolio.LiveURL,
      technologies: portfolio.technologies || [],
      portfolio_categories: portfolio.portfolio_categories || []
    }));

    return {
      props: {
        category: transformedCategory,
        portfolios: transformedPortfolios
      },
      revalidate: 60 // ISR enabled
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
}

export default function CategoryPage({ category, portfolios }) {
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
        {/* Header Section */}
        <Box
          sx={{
            bgcolor: isDark ? 'grey.900' : 'grey.100',
            py: { xs: 6, md: 8 },
            borderBottom: 1,
            borderColor: isDark ? 'grey.800' : 'grey.200'
          }}
        >
          <Container>
            <Box sx={{ mb: 2 }}>
              <Breadcrumbs items={breadcrumbItems} />
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 2,
                color: isDark ? 'grey.100' : 'grey.900'
              }}
            >
              {category.title} Projects
            </Typography>

            {category.description && (
              <Typography
                variant="subtitle1"
                sx={{
                  color: isDark ? 'grey.300' : 'grey.700',
                  maxWidth: '800px',
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                {category.description}
              </Typography>
            )}
          </Container>
        </Box>

        {/* Projects Grid Section */}
        <Container sx={{ py: { xs: 6, md: 8 } }}>
          {portfolios.length > 0 ? (
            <>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  color: isDark ? 'grey.400' : 'grey.600'
                }}
              >
                Showing {portfolios.length} project{portfolios.length !== 1 ? 's' : ''} in {category.title}
              </Typography>
              
              <PortfolioGrid 
                portfolios={portfolios}
                columns={{ xs: 12, sm: 6, md: 4 }}
              />
            </>
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
      </MainLayout>
    </>
  );
}