import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, Chip, TextField, InputAdornment, Paper, Select, MenuItem, FormControl, InputLabel, Stack, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { fetchAPI } from '../utils/api';
import MainLayout from '../components/layouts/MainLayout';
import SEO from '../components/common/SEO';
import SectionTitle from '../components/common/SectionTitle';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';

// Helper function to get category color
const getCategoryColor = (category) => {
  switch(category) {
    case 'Frontend':
      return '#3498db';
    case 'Backend':
      return '#2ecc71';
    case 'Database':
      return '#e74c3c';
    case 'Cloud & DevOps':
      return '#f39c12';
    case 'Mobile':
      return '#9b59b6';
    default:
      return '#95a5a6';
  }
};

export default function Technologies({ technologies, isLoading, error }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('category');
  const [sortOrder, setSortOrder] = useState('asc');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [viewMode, setViewMode] = useState('category'); // 'category' or 'list'
  
  // Add CSS to ensure consistent scrollbar behavior
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        overflow-y: scroll;
        scrollbar-gutter: stable;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms delay before applying search filter
    
    return () => clearTimeout(timer);
  }, [searchTerm]);
  
  // Extract all unique categories for filter dropdown
  const categories = useMemo(() => {
    if (!technologies || !Array.isArray(technologies)) return ['All'];
    
    const uniqueCategories = new Set();
    technologies.forEach(tech => {
      if (tech && tech.Category) {
        uniqueCategories.add(tech.Category);
      }
    });
    
    return ['all', ...Array.from(uniqueCategories)];
  }, [technologies]);
  
  // Extract experience levels for filter dropdown
  const experienceLevels = useMemo(() => {
    if (!technologies || !Array.isArray(technologies)) return ['All'];
    
    const uniqueLevels = new Set();
    technologies.forEach(tech => {
      if (tech && tech.ExpertiseLevel) {
        uniqueLevels.add(tech.ExpertiseLevel);
      }
    });
    
    return ['all', ...Array.from(uniqueLevels)];
  }, [technologies]);

  // Filter and sort technologies
  const processedTechnologies = useMemo(() => {
    if (!technologies || !Array.isArray(technologies)) return [];
    
    // First filter by search term - use debounced term instead of searchTerm
    let result = technologies.filter(tech => {
      if (!tech) return false;
      
      const searchLower = debouncedSearchTerm.toLowerCase();
      return (
        (tech.Name?.toLowerCase().includes(searchLower)) ||
        (tech.Category?.toLowerCase().includes(searchLower)) ||
        (tech.Description?.toLowerCase().includes(searchLower)) ||
        (tech.ShortDescription?.toLowerCase().includes(searchLower)) ||
        (tech.ExpertiseLevel?.toLowerCase().includes(searchLower))
      );
    });
    
    // Then filter by category if not 'all'
    if (categoryFilter !== 'all') {
      result = result.filter(tech => tech.Category === categoryFilter);
    }
    
    // Then filter by experience level if not 'all'
    if (experienceFilter !== 'all') {
      result = result.filter(tech => tech.ExpertiseLevel === experienceFilter);
    }
    
    // Then sort the results
    result.sort((a, b) => {
      let valueA, valueB;
      
      // Determine which field to sort by
      switch (sortBy) {
        case 'name':
          valueA = a.Name || '';
          valueB = b.Name || '';
          break;
        case 'category':
          valueA = a.Category || '';
          valueB = b.Category || '';
          break;
        case 'experience':
          valueA = a.YearsExperience ? parseInt(a.YearsExperience) : 0;
          valueB = b.YearsExperience ? parseInt(b.YearsExperience) : 0;
          return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        case 'level':
          // Convert expertise level to numeric value for sorting
          const levelOrder = { 'Beginner': 1, 'Intermediate': 2, 'Expert': 3 };
          valueA = a.ExpertiseLevel ? levelOrder[a.ExpertiseLevel] || 0 : 0;
          valueB = b.ExpertiseLevel ? levelOrder[b.ExpertiseLevel] || 0 : 0;
          return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        default:
          valueA = a.Name || '';
          valueB = b.Name || '';
      }
      
      // String comparison for text fields
      if (sortOrder === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    
    return result;
  }, [technologies, debouncedSearchTerm, sortBy, sortOrder, categoryFilter, experienceFilter]);
  
  // Group technologies by category if viewMode is 'category'
  const groupedTechnologies = useMemo(() => {
    if (viewMode !== 'category') return {};
    
    const grouped = {};
    
    if (processedTechnologies && Array.isArray(processedTechnologies)) {
      processedTechnologies.forEach(tech => {
        if (tech) {
          const category = tech.Category || 'Other';
          if (!grouped[category]) {
            grouped[category] = [];
          }
          grouped[category].push(tech);
        }
      });
    }
    
    return grouped;
  }, [processedTechnologies, viewMode]);
  
  // Handle search clear
  const handleClearSearch = () => {
    setSearchTerm('');
  };
  
  // Handle reset all filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSortBy('category');
    setSortOrder('asc');
    setCategoryFilter('all');
    setExperienceFilter('all');
    setViewMode('category');
  };
  
  // If no technologies are available or an error occurred
  if ((!technologies || technologies.length === 0) && !isLoading) {
    return (
      <>
        <SEO 
          title="Technologies We Use | Lasthash Software Solutions"
          description="Explore the cutting-edge technologies we use to build powerful, scalable software solutions for businesses of all sizes."
          keywords="web technologies, programming languages, frameworks, React, Node.js, AWS, cloud technologies"
          canonical="/technologies"
        />
        
        <MainLayout isTransparentHeader={false}>
          <Box 
            sx={{ 
              position: 'relative',
              py: { xs: 8, md: 12 },
              background: isDark 
                ? 'linear-gradient(to right, #141e30, #243b55)'
                : 'linear-gradient(to right, #2193b0, #6dd5ed)',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Container maxWidth="lg">
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2 
                }}
              >
                Our Technology Stack
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Explore the cutting-edge technologies powering our innovative solutions
              </Typography>
            </Container>
          </Box>

          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, textAlign: 'center' }}>
            <Typography variant="h5" color="text.secondary">
              {error ? "There was an error loading our technologies. Please try again later." : 
                "We're currently updating our technology stack. Check back soon!"}
            </Typography>
          </Container>
        </MainLayout>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Technologies We Use | Lasthash Software Solutions"
        description="Explore the cutting-edge technologies we use to build powerful, scalable software solutions for businesses of all sizes."
        keywords="web technologies, programming languages, frameworks, React, Node.js, AWS, cloud technologies"
        canonical="/technologies"
      />
      
      <MainLayout isTransparentHeader={false}>
        <Box 
          sx={{ 
            position: 'relative',
            py: { xs: 8, md: 12 },
            background: isDark 
              ? 'linear-gradient(to right, #141e30, #243b55)'
              : 'linear-gradient(to right, #2193b0, #6dd5ed)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                mb: 2 
              }}
            >
              Our Technology Stack
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                opacity: 0.9
              }}
            >
              Explore the cutting-edge technologies powering our innovative solutions
            </Typography>
            
            {/* Search Box */}
            <Box 
              component={Paper} 
              elevation={5}
              sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                mt: 6,
                mb: -8,
                position: 'relative',
                zIndex: 10,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: isDark 
                  ? '0 10px 30px rgba(0,0,0,0.4)' 
                  : '0 10px 30px rgba(0,0,0,0.15)'
              }}
            >
              <TextField
                fullWidth
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'white',
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputBase-input': {
                    py: 2,
                    px: 3,
                    color: isDark ? 'white' : 'inherit',
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <Button 
                        onClick={handleClearSearch} 
                        sx={{ minWidth: 'auto', p: 1 }}
                      >
                        <ClearIcon sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)' }} />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, pt: { xs: 10, md: 14 } }}>
          {/* Filter and Sort Controls */}
          <Paper 
            sx={{ 
              p: 2, 
              mb: 4, 
              background: isDark ? 'rgba(255,255,255,0.05)' : 'white',
              borderRadius: 2,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'stretch', md: 'center' },
              gap: 2,
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 5,
              overflowX: 'visible',
              overflowY: 'visible'
            }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              alignItems="center" 
              sx={{ flexGrow: 1 }}
            >
              <FormControl size="small" sx={{ minWidth: 120, zIndex: 6 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  label="Category"
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 300 // Limit height to prevent excessive shifting
                      }
                    }
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category.toLowerCase()}>
                      {category === 'all' ? 'All Categories' : category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <FormControl size="small" sx={{ minWidth: 120, zIndex: 6 }}>
                <InputLabel>Expertise</InputLabel>
                <Select
                  value={experienceFilter}
                  label="Expertise"
                  onChange={(e) => setExperienceFilter(e.target.value)}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 300 // Limit height to prevent excessive shifting
                      }
                    }
                  }}
                >
                  {experienceLevels.map((level) => (
                    <MenuItem key={level} value={level.toLowerCase()}>
                      {level === 'all' ? 'All Levels' : level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <FormControl size="small" sx={{ minWidth: 120, zIndex: 6 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 300 // Limit height to prevent excessive shifting
                      }
                    }
                  }}
                >
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="category">Category</MenuItem>
                  <MenuItem value="experience">Years Experience</MenuItem>
                  <MenuItem value="level">Expertise Level</MenuItem>
                </Select>
              </FormControl>
              
              <ToggleButtonGroup
                value={sortOrder}
                exclusive
                onChange={(e, newValue) => {
                  if (newValue !== null) {
                    setSortOrder(newValue);
                  }
                }}
                size="small"
              >
                <ToggleButton value="asc" aria-label="ascending">
                  <ArrowUpwardIcon />
                </ToggleButton>
                <ToggleButton value="desc" aria-label="descending">
                  <ArrowDownwardIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            
            <Stack direction="row" spacing={2} alignItems="center">
              <ToggleButtonGroup
                value={viewMode}
                exclusive
                onChange={(e, newValue) => {
                  if (newValue !== null) {
                    setViewMode(newValue);
                  }
                }}
                size="small"
              >
                <ToggleButton value="category" aria-label="group by category">
                  <FilterListIcon />
                </ToggleButton>
                <ToggleButton value="list" aria-label="list view">
                  <SortIcon />
                </ToggleButton>
              </ToggleButtonGroup>
              
              <Button 
                variant="outlined" 
                size="small" 
                onClick={handleResetFilters}
                startIcon={<ClearIcon />}
              >
                Reset
              </Button>
            </Stack>
          </Paper>
          
          {/* Show results count */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Showing {processedTechnologies.length} {processedTechnologies.length === 1 ? 'technology' : 'technologies'}
              {searchTerm && ` for "${searchTerm}"`}
              {categoryFilter !== 'all' && ` in ${categoryFilter}`}
              {experienceFilter !== 'all' && ` with ${experienceFilter} expertise`}
            </Typography>
          </Box>
          
          {/* Display technologies */}
          {processedTechnologies.length > 0 ? (
            viewMode === 'category' ? (
              // Category group view
              Object.entries(groupedTechnologies).map(([category, techs]) => (
                <Box key={category} sx={{ mb: 8 }}>
                  <Box sx={{ mb: 4 }}>
                    <Typography 
                      variant="h4" 
                      component="h2" 
                      sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        position: 'relative',
                        display: 'inline-block',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          bottom: -4,
                          width: '50%',
                          height: 3,
                          background: getCategoryColor(category),
                          borderRadius: '2px'
                        }
                      }}
                    >
                      {category}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                      {getCategoryDescription(category)}
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={3}>
                    {techs.map((tech) => (
                      <Grid item xs={12} sm={6} md={4} key={tech.id || `tech-${Math.random()}`}>
                        <TechnologyCard tech={tech} isDark={isDark} getCategoryColor={getCategoryColor} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))
            ) : (
              // List view
              <Grid container spacing={3}>
                {processedTechnologies.map((tech) => (
                  <Grid item xs={12} sm={6} md={4} key={tech.id || `tech-${Math.random()}`}>
                    <TechnologyCard tech={tech} isDark={isDark} getCategoryColor={getCategoryColor} />
                  </Grid>
                ))}
              </Grid>
            )
          ) : (
            // No results
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No technologies found matching your criteria
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search or filters to see more results.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleResetFilters}
                sx={{ mt: 3 }}
              >
                Reset All Filters
              </Button>
            </Box>
          )}
        </Container>
      </MainLayout>
    </>
  );
}

// Technology Card Component - Wrap with React.memo to prevent unnecessary rerenders
const TechnologyCard = React.memo(function TechnologyCard({ tech, isDark, getCategoryColor }) {
  // Helper function to get expertise level color
  const getExpertiseLevelColor = (level) => {
    switch(level) {
      case 'Beginner':
        return '#4caf50'; // Light green
      case 'Intermediate':
        return '#ff9800'; // Orange
      case 'Expert':
        return '#f44336'; // Red
      default:
        return 'rgba(0,0,0,0.1)';
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        background: isDark ? 'rgba(255,255,255,0.05)' : 'white',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }
      }}
    >
      <CardActionArea 
        component={Link}
        href={`/technology/${tech.Slug || tech.id}`}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box 
            sx={{ 
              position: 'relative',
              width: 80,
              height: 80,
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.paper',
              p: 1
            }}
          >
            {tech.Icon?.url ? (
              <Image
                src={tech.Icon.url}
                alt={tech.Name || 'Technology icon'}
                width={60}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            ) : (
              <Box sx={{ width: 60, height: 60, bgcolor: 'background.paper' }} />
            )}
          </Box>
        </Box>
        
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {tech.Name || 'Technology'}
          </Typography>
          
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2, flexWrap: 'wrap' }}>
            <Chip 
              label={tech.Category || 'Other'}
              size="small"
              sx={{ 
                bgcolor: getCategoryColor(tech.Category || 'Other'),
                color: 'white',
              }}
            />
            
            {tech.ExpertiseLevel && (
              <Chip 
                label={tech.ExpertiseLevel}
                size="small"
                sx={{ 
                  bgcolor: getExpertiseLevelColor(tech.ExpertiseLevel),
                  color: 'white',
                  fontWeight: 'medium'
                }}
              />
            )}
          </Stack>
          
          <Typography variant="body2" color="text.secondary">
            {tech.ShortDescription || 
             truncateText(tech.Description, 100) || 
             `${tech.ExpertiseLevel || ''} ${tech.YearsExperience ? `with ${tech.YearsExperience}+ years experience` : ''}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

// Helper function to truncate text
function truncateText(text, maxLength) {
  if (!text) return '';
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

// Helper function to get category descriptions
function getCategoryDescription(category) {
  switch(category) {
    case 'Frontend':
      return 'Modern, responsive user interfaces built with the latest web technologies.';
    case 'Backend':
      return 'Robust server-side solutions that power our applications with high performance and scalability.';
    case 'Database':
      return 'Secure and efficient data storage solutions for various application requirements.';
    case 'Cloud & DevOps':
      return 'Scalable cloud infrastructure and DevOps practices for reliable application hosting and continuous delivery.';
    case 'Mobile':
      return 'Cross-platform and native mobile development technologies for iOS and Android.';
    default:
      return 'Specialized technologies that enhance our development capabilities.';
  }
}

export async function getStaticProps() {
  try {
    // Fetch all technologies with sorting and populate
    const response = await fetchAPI("/technologies", {
      sort: ['Category:asc', 'Name:asc'],
      pagination: {
        limit: 100
      },
      populate: "*"
    });
    
    // Extract the technologies array from the response
    // Adjust this based on the actual structure of your API response
    const technologies = response.data ? response.data : response;
    
    return {
      props: {
        technologies: technologies || [],
        isLoading: false,
        error: false
      },
      // Revalidate content every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching technologies:', error);
    return {
      props: {
        technologies: [],
        isLoading: false,
        error: true
      },
      // Revalidate sooner if there was an error
      revalidate: 60,
    };
  }
}