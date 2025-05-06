import { Box, Container, Grid, Typography, Chip, Button } from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { fetchAPI } from '../../utils/api';
import { useTheme } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import PortfolioGrid from '../../components/shared/PortfolioGrid';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function getStaticPaths() {
  try {
    const portfoliosResponse = await fetchAPI("/portfolios", {
      fields: ['Slug']
    });

    const paths = portfoliosResponse?.data?.map(item => ({
      params: { portfolio: item.Slug }
    })) || [];

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: false
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    // First, fetch the main portfolio
    const portfolioResponse = await fetchAPI("/portfolios", {
      filters: { 
        Slug: params.portfolio 
      },
      populate: {
        ThumbnailImage: true,
        BannerImage: true,
        Gallery: true,
        technologies: {
          populate: '*'  // Changed to populate all fields
        },
        portfolio_categories: {
          fields: ['title', 'id', 'slug']
        }
      }
    });

    const portfolio = portfolioResponse.data[0];

    // Then, fetch related projects using the portfolio categories
    if (portfolio?.portfolio_categories?.length > 0) {
      const relatedProjectsResponse = await fetchAPI("/portfolios", {
        filters: {
          Slug: { $ne: params.portfolio },
          portfolio_categories: {
            id: { $in: portfolio.portfolio_categories.map(cat => cat.id) }
          }
        },
        pagination: { limit: 3 },
        populate: ['ThumbnailImage']
      });

      return {
        props: {
          portfolio,
          relatedProjects: relatedProjectsResponse.data
        }
      };
    }

    // If no categories or no portfolio found
    return {
      props: {
        portfolio,
        relatedProjects: []
      }
    };

  } catch (error) {
    console.error('Portfolio fetch error:', error);
    return { notFound: true };
  }
}

export default function PortfolioDetail({ portfolio }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Portfolio', href: '/portfolios' },
    { label: portfolio.Title, current: true }
  ];

  // SEO data
  const seoData = {
    title: `${portfolio.Title} | Portfolio Project`,
    description: portfolio.ShortDescription || portfolio.Title,
    openGraph: {
      images: [
        {
          url: portfolio.ThumbnailImage?.url,
          width: 1200,
          height: 630,
          alt: portfolio.Title,
        },
      ],
    },
  };

  // Helper function to safely render description
  const renderDescription = (description) => {
    if (!description) return null;

    if (Array.isArray(description)) {
      return description.map((block, index) => {
        if (block.type === 'paragraph' && block.children) {
          return (
            <Typography
              key={index}
              variant="body1"
              paragraph
              sx={{
                color: isDark ? 'grey.300' : 'grey.700',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 3
              }}
            >
              {block.children.map((child, childIndex) => 
                child.type === 'text' ? child.text : ''
              )}
            </Typography>
          );
        }
        return null;
      });
    }

    // For simple string descriptions
    return (
      <Typography
        variant="body1"
        paragraph
        sx={{
          color: isDark ? 'grey.300' : 'grey.700',
          fontSize: '1.1rem',
          lineHeight: 1.8
        }}
      >
        {description}
      </Typography>
    );
  };

  return (
    <>
      <SEO {...seoData} />

      <MainLayout>
        {/* Banner Section */}
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
          {portfolio.BannerImage?.url && (
            <Image
              src={portfolio.BannerImage.url}
              alt={portfolio.Title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          )}
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
                width: '100%'
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
                {portfolio.Title}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  color: 'white',
                  opacity: 0.9,
                  maxWidth: '600px',
                  mb: 3
                }}
              >
                {portfolio.ShortDescription}
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                mt: 2 
              }}>
                {portfolio.ProjectStatus && (
                  <Chip
                    label={portfolio.ProjectStatus}
                    sx={{
                      bgcolor: portfolio.ProjectStatus === 'Completed' 
                        ? 'success.main' 
                        : 'warning.main',
                      color: 'white',
                      fontWeight: 500
                    }}
                  />
                )}
                {portfolio.CompletionDate && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      opacity: 0.9,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <CalendarTodayIcon fontSize="small" />
                    {new Date(portfolio.CompletionDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Typography>
                )}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Main Content */}
        <Container sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {/* Left Column - Main Content */}
            <Grid item xs={12} md={8}>
              {/* Gallery Section - Moved up */}
              {portfolio.Gallery?.length > 0 && (
                <Box sx={{ mb: 6 }}>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    style={{ 
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: isDark 
                        ? '0 4px 20px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    {portfolio.Gallery.map((image, index) => (
                      <SwiperSlide 
                        key={image.id}
                        onClick={() => {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            paddingTop: '56.25%',
                            width: '100%'
                          }}
                        >
                          <Image
                            src={image.formats.large?.url || image.url}
                            alt={`${portfolio.Title} - Image ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={lightboxIndex}
                    slides={portfolio.Gallery.map(image => ({
                      src: image.formats.large?.url || image.url,
                      alt: `${portfolio.Title} - Gallery Image`
                    }))}
                  />
                </Box>
              )}

              {/* Categories Section */}
              {portfolio.portfolio_categories?.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: isDark ? 'grey.300' : 'grey.700',
                      fontWeight: 600
                    }}
                  >
                    Project Categories
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {portfolio.portfolio_categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/portfolio/category/${category.slug}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Chip
                          label={category.title}
                          clickable
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            color: 'white',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            px: 2,
                            py: 2.5,
                            borderRadius: '8px',
                            '&:hover': {
                              bgcolor: theme.palette.primary.dark,
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.2s ease-in-out',
                            boxShadow: isDark 
                              ? '0 4px 12px rgba(0,0,0,0.3)'
                              : '0 4px 12px rgba(59, 130, 246, 0.2)'
                          }}
                        />
                      </Link>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Project Overview */}
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: isDark ? 'grey.100' : 'grey.900'
                  }}
                >
                  Project Overview
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 4,
                    color: isDark ? 'grey.300' : 'grey.700',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    lineHeight: 1.6
                  }}
                >
                  {portfolio.ShortDescription}
                </Typography>
                {renderDescription(portfolio.DetailedDescription)}
              </Box>
            </Grid>

            {/* Right Column - Sidebar */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
                }}
              >
                {/* Project Info */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Project Details
                  </Typography>
                  {portfolio.ClientName && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Client:</strong> {portfolio.ClientName}
                    </Typography>
                  )}
                  {portfolio.Duration && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Duration:</strong> {portfolio.Duration} {portfolio.Duration === 1 ? 'Month' : 'Months'}
                    </Typography>
                  )}
                  {portfolio.ProjectStatus && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Status:</strong> {portfolio.ProjectStatus}
                    </Typography>
                  )}
                  {portfolio.project_type && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Project Type:</strong> {portfolio.project_type}
                    </Typography>
                  )}
                </Box>

                {/* Technologies */}
                {portfolio.technologies?.length > 0 && (
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      Technologies Used
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {portfolio.technologies.map((tech) => (
                        <Chip
                          key={tech.id}
                          component={Link}
                          href={`/technology/${tech.Slug}`}
                          label={tech.Name}
                          icon={tech.Icon?.url ? (
                            <Box 
                              sx={{ 
                                width: 20, 
                                height: 20, 
                                position: 'relative',
                                mr: -0.5,
                                '& img': {
                                  filter: isDark ? 'brightness(0) invert(1)' : 'none'
                                }
                              }}
                            >
                              <Image
                                src={tech.Icon.url}
                                alt=""
                                fill
                                style={{ objectFit: 'contain' }}
                              />
                            </Box>
                          ) : null}
                          clickable
                          size="medium"
                          sx={{
                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            '&:hover': {
                              bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.2s ease-in-out',
                            px: 2,
                            py: 2.5,
                            borderRadius: '8px',
                            border: '1px solid',
                            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            '& .MuiChip-label': {
                              color: isDark ? 'white' : 'text.primary',
                              fontWeight: 500
                            },
                            '& .MuiChip-icon': {
                              color: isDark ? 'white' : 'text.primary'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Case Study and Video */}
                {(portfolio.CaseStudyURL || portfolio.VideoURL) && (
                  <Box sx={{ mt: 4 }}>
                    {portfolio.CaseStudyURL && (
                      <Button
                        variant="outlined"
                        href={portfolio.CaseStudyURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        sx={{ mb: 2 }}
                        endIcon={<ArticleIcon />}
                      >
                        Read Case Study
                      </Button>
                    )}
                    
                    {portfolio.VideoURL && (
                      <Box sx={{ mt: 3 }}>
                        <Typography variant="h6" gutterBottom>
                          Project Video
                        </Typography>
                        <Box sx={{ 
                          position: 'relative',
                          paddingTop: '56.25%',
                          overflow: 'hidden',
                          borderRadius: 2
                        }}>
                          <iframe
                            src={portfolio.VideoURL}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              border: 0
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </Box>
                      </Box>
                    )}
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
                    fullWidth
                  >
                    Visit Live Site
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Related Projects */}
        <Container sx={{ py: { xs: 6, md: 8 } }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Related Projects
          </Typography>
          
          <PortfolioGrid 
            portfolios={portfolio.relatedProjects} 
            columns={{ xs: 12, sm: 6, md: 4 }}
          />
        </Container>

        {/* Call to Action Section */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            pb: 8
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600
            }}
          >
            Interested in similar projects?
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/contact-us"
            sx={{
              px: 4,
              py: 1.5
            }}
          >
            Let's Discuss Your Project
          </Button>
        </Box>
      </MainLayout>
    </>
  );
}