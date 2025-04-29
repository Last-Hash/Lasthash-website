import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Stack,
  Autocomplete,
  TextField,
  Paper,
  IconButton,
  Tooltip,
  Button,
  Pagination
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { fetchAPI } from '../../utils/api';
import ParticleBackground from '../../components/effects/ParticleBackground';

const DEFAULT_PAGE_SIZE = 2;  // For testing - shows 2 items per page
const PAGE_SIZE_OPTIONS = [2, 12, 24, 48, 96];  // Added 2 as an option for testing

// Update getStaticPaths
export async function getStaticPaths() {
  try {
    const response = await fetchAPI("/portfolios", {
      pagination: {
        pageSize: DEFAULT_PAGE_SIZE
      }
    });

    const totalPages = response.meta.pagination.pageCount;
    
    // Generate paths only for numbered pages (2 and above)
    const paths = Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: String(i + 2) }  // Start from page 2
    }));

    return {
      paths,
      fallback: 'blocking'
    };
  } catch (error) {
    console.error('Error generating paths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
}

// Update getStaticProps
export async function getStaticProps({ params }) {
  try {
    // Get the page number
    const page = params?.page ? parseInt(params.page) : 1;
    
    if (isNaN(page) || page < 1) {
      return {
        notFound: true
      };
    }

    const portfolioResponse = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      pagination: {
        page,
        pageSize: DEFAULT_PAGE_SIZE
      },
      populate: ['ThumbnailImage', 'technologies', 'portfolio_categories']
    });

    if (!portfolioResponse?.data) {
      throw new Error('Invalid API response');
    }

    return {
      props: {
        portfolios: portfolioResponse.data,
        pagination: portfolioResponse.meta.pagination,
        currentPage: page,
        isLoading: false,
        error: false
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return {
      props: {
        portfolios: [],
        pagination: {
          page: params?.page ? parseInt(params.page) : 1,
          pageSize: DEFAULT_PAGE_SIZE,
          pageCount: 0,
          total: 0
        },
        currentPage: params?.page ? parseInt(params.page) : 1,
        isLoading: false,
        error: true
      }
    };
  }
}

export default function Portfolio({ portfolios: initialPortfolios, pagination, currentPage, isLoading, error }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const router = useRouter();

  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [filteredPortfolios, setFilteredPortfolios] = useState(initialPortfolios);
  const [filters, setFilters] = useState({
    categories: [],
    technologies: [],
    projectType: null,
    status: null
  });

  const breadcrumbItems = [
    { label: 'Portfolio' }
  ];

  const categories = useMemo(() => {
    if (!Array.isArray(initialPortfolios)) return ['all'];
    
    const categorySet = new Set();
    initialPortfolios.forEach(portfolio => {
      if (Array.isArray(portfolio?.portfolio_categories)) {
        portfolio.portfolio_categories.forEach(cat => {
          if (cat?.title) {
            categorySet.add(cat.title);
          }
        });
      }
    });
    
    return ['all', ...Array.from(categorySet)];
  }, [initialPortfolios]);

  const filterOptions = useMemo(() => {
    if (!Array.isArray(initialPortfolios)) return {};
    
    const options = {
      categories: new Set(),
      technologies: new Set(),
      projectTypes: new Set(),
      statuses: new Set()
    };

    initialPortfolios.forEach(portfolio => {
      portfolio?.portfolio_categories?.forEach(cat => {
        if (cat?.title) options.categories.add(cat.title);
      });

      portfolio?.technologies?.forEach(tech => {
        if (tech?.Name) options.technologies.add(tech.Name);
      });

      if (portfolio.project_type) {
        options.projectTypes.add(portfolio.project_type);
      }

      if (portfolio.ProjectStatus) {
        options.statuses.add(portfolio.ProjectStatus);
      }
    });

    return {
      categories: Array.from(options.categories),
      technologies: Array.from(options.technologies),
      projectTypes: Array.from(options.projectTypes),
      statuses: Array.from(options.statuses)
    };
  }, [initialPortfolios]);

  useEffect(() => {
    if (Array.isArray(initialPortfolios) && initialPortfolios.length > 0) {
      setFilteredPortfolios(initialPortfolios);
    }
  }, [initialPortfolios]);

  useEffect(() => {
    if (!initialPortfolios?.length) return;

    const filtered = initialPortfolios.filter(portfolio => {
      const categoryMatch = filters.categories.length === 0 || 
        portfolio.portfolio_categories?.some(cat => 
          filters.categories.includes(cat.title)
        );

      const techMatch = filters.technologies.length === 0 ||
        portfolio.technologies?.some(tech => 
          filters.technologies.includes(tech.Name)
        );

      const typeMatch = !filters.projectType ||
        portfolio.project_type === filters.projectType;

      const statusMatch = !filters.status ||
        portfolio.ProjectStatus === filters.status;

      return categoryMatch && techMatch && typeMatch && statusMatch;
    });

    setFilteredPortfolios(filtered);
  }, [filters, initialPortfolios]);

  // Update the handlePageChange function in your component
  const handlePageChange = async (event, value) => {
    if (value === 1) {
      await router.push('/portfolios');
    } else {
      await router.push(`/portfolios/${value}`);
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Loading portfolios...</Typography>
        </Box>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography color="error">Error loading portfolios. Please try again later.</Typography>
        </Box>
      </MainLayout>
    );
  }

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

  const FiltersSection = () => (
    <Paper 
      sx={{ 
        p: 3, 
        mb: 4,
        bgcolor: isDark ? 'background.paper' : 'white'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 2 
      }}>
        <Typography variant="h6">Filters</Typography>
        <Tooltip title="Clear all filters">
          <IconButton 
            onClick={() => {
              setFilters({
                categories: [],
                technologies: [],
                projectType: null,
                status: null
              });
              setPageSize(DEFAULT_PAGE_SIZE);
            }}
          >
            <ClearAllIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Autocomplete
            multiple
            options={filterOptions.categories}
            value={filters.categories}
            onChange={(_, newValue) => setFilters(prev => ({
              ...prev,
              categories: newValue
            }))}
            renderInput={(params) => (
              <TextField {...params} label="Categories" size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            multiple
            options={filterOptions.technologies}
            value={filters.technologies}
            onChange={(_, newValue) => setFilters(prev => ({
              ...prev,
              technologies: newValue
            }))}
            renderInput={(params) => (
              <TextField {...params} label="Technologies" size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Autocomplete
            options={filterOptions.projectTypes}
            value={filters.projectType}
            onChange={(_, newValue) => setFilters(prev => ({
              ...prev,
              projectType: newValue
            }))}
            renderInput={(params) => (
              <TextField {...params} label="Project Type" size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Autocomplete
            options={filterOptions.statuses}
            value={filters.status}
            onChange={(_, newValue) => setFilters(prev => ({
              ...prev,
              status: newValue
            }))}
            renderInput={(params) => (
              <TextField {...params} label="Status" size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Items per page</InputLabel>
            <Select
              value={pageSize}
              label="Items per page"
              onChange={(e) => {
                setPageSize(e.target.value);
              }}
            >
              {PAGE_SIZE_OPTIONS.map(size => (
                <MenuItem key={size} value={size}>{size}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );

  const PaginationSection = () => (
    <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Stack spacing={2} alignItems="center">
        <Pagination 
          count={pagination.pageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          showFirstButton 
          showLastButton
        />
        <Typography variant="body2" color="text.secondary">
          Page {currentPage} of {pagination.pageCount} (Total {pagination.total} projects)
        </Typography>
      </Stack>
    </Box>
  );

  return (
    <>
      <SEO 
        title="Our Portfolio | Lasthash"
        description="Explore our successful projects and case studies. View our work in web development, mobile apps, and digital solutions."
        keywords="portfolio, case studies, web development projects, mobile apps, software solutions"
        canonical={currentPage === 1 ? "/portfolios" : `/portfolios/${currentPage}`}
      />

      <MainLayout>
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
            </motion.div>
          </Container>
        </Box>

        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? 'background.default' : 'grey.50' }}>
          <Container>
            <FiltersSection />
            {filteredPortfolios.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Grid container spacing={4}>
                  {filteredPortfolios.map((portfolio) => (
                    <Grid item xs={12} md={6} key={portfolio.id}>
                      <motion.div variants={itemVariants}>
                        <Card 
                          sx={{ 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: isDark ? 'background.paper' : 'white'
                          }}
                        >
                          {portfolio.ThumbnailImage?.data?.attributes?.url && (
                            <Box sx={{ position: 'relative', pt: '56.25%' }}>
                              <Image
                                src={portfolio.ThumbnailImage.data.attributes.url}
                                alt={portfolio.Title || 'Portfolio Project'}
                                layout="fill"
                                objectFit="cover"
                              />
                            </Box>
                          )}
                          
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" gutterBottom>
                              {portfolio.Title}
                            </Typography>
                            
                            <Typography 
                              variant="body2" 
                              color="text.secondary" 
                              sx={{ mb: 2 }}
                            >
                              {portfolio.ShortDescription}
                            </Typography>

                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                              {portfolio.technologies?.map((tech, index) => (
                                <Chip 
                                  key={index}
                                  label={tech.Name}
                                  size="small"
                                  sx={{ m: 0.5 }}
                                />
                              ))}
                            </Stack>

                            {portfolio.ProjectStatus && (
                              <Chip
                                label={portfolio.ProjectStatus}
                                color={portfolio.ProjectStatus === 'Completed' ? 'success' : 'warning'}
                                size="small"
                                sx={{ mb: 2 }}
                              />
                            )}

                            <Link href={`/portfolio/${portfolio.slug}`} passHref>
                              <Button 
                                variant="contained" 
                                color="primary"
                                fullWidth
                              >
                                View Project
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
                <PaginationSection />
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