import { Box, Container, Grid, Typography, Chip, Button } from '@mui/material';
import Image from 'next/image';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import { fetchAPI } from '../../utils/api';
import { useTheme } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export async function getStaticPaths() {
  try {
    const portfoliosResponse = await fetchAPI("/portfolios", {
      fields: ['Slug']
    });

    // Validate data structure
    const paths = portfoliosResponse?.data?.map(item => ({
      params: { portfolio: item.Slug }
    })) || [];

    return {
      paths,
      fallback: 'blocking'
    };

  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetchAPI("/portfolios", {
      filters: {
        Slug: params.portfolio
      },
      populate: {
        ThumbnailImage: true,
        technologies: {
          fields: ['Name']
        }
      }
    });

    if (!response?.data?.[0]) {
      return { notFound: true };
    }

    return {
      props: {
        portfolio: response.data[0]
      },
      revalidate: 3600
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function PortfolioDetail({ portfolio }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  if (!portfolio) {
    return (
      <MainLayout>
        <Container sx={{ py: 8 }}>
          <Typography align="center" color="error">
            Project not found
          </Typography>
        </Container>
      </MainLayout>
    );
  }

  // Helper function to safely render description
  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((block, index) => {
        if (typeof block === 'string') {
          return <Typography key={index} variant="body1" paragraph>{block}</Typography>;
        }
        if (block.children && Array.isArray(block.children)) {
          return <Typography key={index} variant="body1" paragraph>
            {block.children.map(child => typeof child === 'string' ? child : '')}
          </Typography>;
        }
        return null;
      });
    }
    return <Typography variant="body1" paragraph>{description || ''}</Typography>;
  };

  return (
    <>
      <SEO 
        title={`${portfolio.Title} | Portfolio`}
        description={portfolio.ShortDescription || portfolio.Title}
      />

      <MainLayout>
        <Container sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {/* Project Image */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: 400, borderRadius: 2, overflow: 'hidden' }}>
                {portfolio.ThumbnailImage?.url && (
                  <Image
                    src={portfolio.ThumbnailImage.url}
                    alt={portfolio.Title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                )}
              </Box>
            </Grid>

            {/* Project Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 3 }}>
                {portfolio.Title}
              </Typography>

              {/* Description */}
              <Box sx={{ mb: 4 }}>
                {renderDescription(portfolio.DetailedDescription || portfolio.ShortDescription)}
              </Box>

              {/* Basic Project Info */}
              <Box sx={{ mb: 4 }}>
                {portfolio.ClientName && (
                  <Typography variant="subtitle2" color="text.secondary">
                    Client: {portfolio.ClientName}
                  </Typography>
                )}
                {portfolio.Duration && (
                  <Typography variant="subtitle2" color="text.secondary">
                    Duration: {portfolio.Duration} {portfolio.Duration === 1 ? 'Month' : 'Months'}
                  </Typography>
                )}
                {portfolio.ProjectStatus && (
                  <Typography variant="subtitle2" color="text.secondary">
                    Status: {portfolio.ProjectStatus}
                  </Typography>
                )}
              </Box>

              {/* Technologies */}
              {portfolio.technologies?.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {portfolio.technologies.map((tech) => (
                      <Chip
                        key={tech.id}
                        label={tech.Name}
                        size="small"
                        sx={{
                          bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {/* Live URL Button */}
              {portfolio.LiveURL && (
                <Button
                  variant="contained"
                  href={portfolio.LiveURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon />}
                >
                  Visit Live Site
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </MainLayout>
    </>
  );
}