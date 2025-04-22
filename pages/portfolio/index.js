import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Pagination, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Stack
} from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { fetchAPI } from '../../utils/api';
import ParticleBackground from '../../components/effects/ParticleBackground';
import { p } from 'framer-motion/client';

// Items per page options
const ITEMS_PER_PAGE_OPTIONS = [6, 9, 12, 15];

export async function getStaticProps() {
  try {
    const portfolioResponse = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      populate: {
        ThumbnailImage: true,
        technologies: {
          fields: ['Name', 'id']
        },
        portfolio_categories: true
      }
    });

    const portfoliosData = Array.isArray(portfolioResponse.data) 
      ? portfolioResponse.data 
      : [];

    return {
      props: {
        portfolios: portfoliosData,
        isLoading: false,
        error: false
      }
    };
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return {
      props: {
        portfolios: [],
        isLoading: false,
        error: true
      }
    };
  }
}

export default function Portfolio({ portfolios, isLoading, error }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // State management
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  // Fix breadcrumb items to show only one Home
  const breadcrumbItems = [
    { label: 'Portfolio' }
  ];

  // Get unique categories with proper type checking
  const categories = useMemo(() => {
    if (!Array.isArray(portfolios)) return ['all'];
    
    const categorySet = new Set();
    portfolios.forEach(portfolio => {
      if (Array.isArray(portfolio?.portfolio_categories)) {
        portfolio.portfolio_categories.forEach(cat => {
          if (cat?.title) {
            categorySet.add(cat.title);
          }
        });
      }
    });
    
    return ['all', ...Array.from(categorySet)];
  }, [portfolios]);

  // Initialize filtered portfolios with type checking
  useEffect(() => {
    if (Array.isArray(portfolios) && portfolios.length > 0) {
      setFilteredPortfolios(portfolios);
    }
  }, [portfolios]);

  // Calculate pagination
  const totalPages = Math.ceil((filteredPortfolios?.length || 0) / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedPortfolios = filteredPortfolios?.slice(startIndex, startIndex + itemsPerPage) || [];

  // Filter portfolios when category changes
  useEffect(() => {
    if (!portfolios?.length) return;

    const filtered = activeCategory === 'all'
      ? portfolios
      : portfolios.filter(portfolio => 
          portfolio?.portfolio_categories?.some(cat => cat?.title === activeCategory)
        );
    setFilteredPortfolios(filtered);
    setPage(1); // Reset to first page when filter changes
  }, [activeCategory, portfolios]);

  // Show loading state
  if (isLoading) {
    return (
      <MainLayout>
        <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Loading portfolios...</Typography>
        </Box>
      </MainLayout>
    );
  }

  // Show error state
  if (error) {
    return (
      <MainLayout>
        <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography color="error">Error loading portfolios. Please try again later.</Typography>
        </Box>
      </MainLayout>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <SEO 
        title="Our Portfolio | Lasthash"
        description="Explore our successful projects and case studies. View our work in web development, mobile apps, and digital solutions."
        keywords="portfolio, case studies, web development projects, mobile apps, software solutions"
        canonical="/portfolio"
      />

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
          
          {/* Centered Breadcrumbs */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 24, md: 32 },
              left: 0,
              right: 0,
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Breadcrumbs 
                items={breadcrumbItems}
                sx={{
                  '& .MuiBreadcrumbs-ol': {
                    justifyContent: 'center'
                  },
                  '& .MuiBreadcrumbs-li': {
                    color: 'rgba(255,255,255,0.9)'
                  },
                  '& .MuiBreadcrumbs-separator': {
                    color: 'rgba(255,255,255,0.5)'
                  }
                }}
              />
            </motion.div>
          </Box>

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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

              {/* Category Filter Chips */}
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 4 }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category.charAt(0).toUpperCase() + category.slice(1)}
                    onClick={() => setActiveCategory(category)}
                    color={activeCategory === category ? 'primary' : 'default'}
                    sx={{
                      bgcolor: activeCategory === category 
                        ? 'primary.main' 
                        : 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '&:hover': {
                        bgcolor: activeCategory === category 
                          ? 'primary.dark'
                          : 'rgba(255,255,255,0.2)'
                      }
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Portfolio Grid */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? 'background.default' : 'grey.50' }}>
          <Container>
            {displayedPortfolios.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Grid container spacing={4}>
                  {displayedPortfolios.map((portfolio) => (
                    <Grid item xs={12} md={6} key={portfolio.id}>
                      <motion.div variants={itemVariants}>
                        <Link href={`/portfolio/${portfolio.Slug}`} passHref>
                          <Card
                            sx={{
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              bgcolor: isDark ? 'background.paper' : 'white',
                              '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: theme => `0 8px 24px ${
                                  isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'
                                }`,
                                '& .portfolio-image': {
                                  transform: 'scale(1.05)'
                                }
                              }
                            }}
                          >
                            <Box 
                              sx={{ 
                                position: 'relative',
                                width: '100%',
                                paddingTop: '66.67%', // This creates a 3:2 aspect ratio
                                overflow: 'hidden'
                              }}
                            >
                              {portfolio.ThumbnailImage?.url && (
                                <Image
                                  src={portfolio.ThumbnailImage.url}
                                  alt={portfolio.Title || 'Portfolio item'}
                                  fill
                                  className="portfolio-image"
                                  style={{ 
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    transition: 'transform 0.5s ease',
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0
                                  }}
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              )}
                            </Box>
                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                              <Typography 
                                variant="h5" 
                                gutterBottom
                                sx={{ fontWeight: 'bold' }}
                              >
                                {portfolio.Title || 'Untitled Project'}
                              </Typography>
                              
                              <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ mb: 2 }}
                              >
                                {portfolio.ShortDescription || 'No description available'}
                              </Typography>

                              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                {portfolio.technologies?.map((tech) => (
                                  <Chip
                                    key={tech.id}
                                    label={tech.Name}
                                    size="small"
                                    sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'grey.100' }}
                                  />
                                ))}
                              </Stack>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

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
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                      <InputLabel>Per Page</InputLabel>
                      <Select
                        value={itemsPerPage}
                        label="Per Page"
                        onChange={(e) => {
                          setItemsPerPage(e.target.value);
                          setPage(1);
                        }}
                      >
                        {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <Pagination
                      count={totalPages}
                      page={page}
                      onChange={(e, value) => setPage(value)}
                      color="primary"
                      size="large"
                    />
                  </Box>
                )}
              </motion.div>
            ) : (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6">No portfolios found</Typography>
              </Box>
            )}
          </Container>
        </Box>
      </MainLayout>
    </>
  );
}