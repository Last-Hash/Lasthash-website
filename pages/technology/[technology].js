import { Box, Container, Typography, Chip, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button, Divider, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { fetchAPI } from '../../utils/api';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkIcon from '@mui/icons-material/Link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
      return '#95a5a6'; // Grey
  }
};

export default function TechnologyDetail({ technology, relatedTechnologies, error }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  // Handle error or loading state
  if (error || !technology) {
    return (
      <MainLayout isTransparentHeader={false}>
        <Container sx={{ py: 10, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {error ? "Error loading technology" : "Technology not found"}
          </Typography>
          <Button 
            component={Link} 
            href="/technologies" 
            startIcon={<ArrowBackIcon />}
            variant="contained"
            sx={{ mt: 3 }}
          >
            Back to Technologies
          </Button>
        </Container>
      </MainLayout>
    );
  }
  
  // Extract data from technology object
  const { Name, Category, Description, ShortDescription, OfficialWebsite, Icon, ExpertiseLevel, YearsExperience } = technology;
  const iconUrl = Icon?.url;
  
  // Parse features if available (assuming features might be in a string separated by line breaks)
  const featureString = Description || ShortDescription || '';
  const featuresList = featureString.split('\n').filter(f => f.trim());
  
  return (
    <>
      <SEO 
        title={`${Name} | Technology Stack | Lasthash`}
        description={`Learn how we use ${Name} to build innovative software solutions for our clients.`}
        keywords={`${Name}, ${Category}, software development, technology stack, Lasthash`}
        canonical={`/technology/${technology.Slug}`}
      />
      
      <MainLayout isTransparentHeader={false}>
        {/* Hero Section */}
        <Box 
          sx={{ 
            position: 'relative',
            py: { xs: 6, md: 10 },
            background: isDark 
              ? 'linear-gradient(to right, #141e30, #243b55)'
              : 'linear-gradient(to right, #2193b0, #6dd5ed)',
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Button 
              component={Link} 
              href="/technologies" 
              startIcon={<ArrowBackIcon />}
              sx={{ 
                color: 'white', 
                mb: 4,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Back to Technologies
            </Button>
            
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography 
                  variant="h1" 
                  component="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 'bold',
                    mb: 2 
                  }}
                >
                  {Name}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                  <Chip 
                    label={Category}
                    sx={{ 
                      bgcolor: getCategoryColor(Category),
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1,
                      px: 2
                    }}
                  />
                  
                  {ExpertiseLevel && (
                    <Chip 
                      label={`${ExpertiseLevel} Level`}
                      sx={{ 
                        bgcolor: getExpertiseLevelColor(ExpertiseLevel),
                        color: 'white',
                        fontWeight: 'bold',
                        py: 1,
                        px: 2
                      }}
                    />
                  )}
                  
                  {YearsExperience && (
                    <Chip 
                      label={`${YearsExperience}+ Years Experience`}
                      sx={{ 
                        bgcolor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                        color: 'white',
                        fontWeight: 'bold',
                        py: 1,
                        px: 2
                      }}
                    />
                  )}
                </Box>
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    maxWidth: '800px',
                    opacity: 0.9
                  }}
                >
                  {ShortDescription || (Description ? Description.substring(0, 200) + (Description.length > 200 ? '...' : '') : 
                  `${ExpertiseLevel || 'Advanced'} level technology with ${YearsExperience || 'several'} years of implementation experience.`)}
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    borderRadius: '20px',
                    bgcolor: 'background.paper',
                    p: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  {iconUrl ? (
                    <Image
                      src={iconUrl}
                      alt={Name}
                      width={150}
                      height={150}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <Box sx={{ width: 150, height: 150, bgcolor: 'grey.300' }} />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        
        {/* Content Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                About {Name}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, whiteSpace: 'pre-line' }}>
                {Description || ShortDescription || `${Name} is a powerful ${Category} technology that enables us to build efficient and scalable solutions for our clients.`}
              </Typography>
              
              {featuresList.length > 0 && (
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Key Features & Capabilities
                  </Typography>
                  
                  <List>
                    {featuresList.map((feature, index) => (
                      <ListItem key={index} sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                            <Typography variant="body1">
                              {feature}
                            </Typography>
                          } 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
              
              {/* Official Website Link */}
              {OfficialWebsite && (
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<LinkIcon />}
                  href={OfficialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 4 }}
                >
                  Visit Official Website
                </Button>
              )}
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={isDark ? 0 : 2}
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'white',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  How We Use {Name}
                </Typography>
                
                <Typography variant="body1" paragraph>
                  At Lasthash, we leverage {Name} to build robust and scalable solutions for our clients. 
                  {ExpertiseLevel && ` Our team has ${ExpertiseLevel.toLowerCase()} level expertise in this technology.`}
                  {YearsExperience && ` We've been working with ${Name} for over ${YearsExperience} years.`}
                </Typography>
                
                <Typography variant="body1">
                  We can help you implement {Name} for your next project to ensure optimal performance,
                  scalability, and maintainability.
                </Typography>
                
                <Button 
                  variant="outlined" 
                  color="primary"
                  component={Link}
                  href="/contact"
                  sx={{ mt: 3 }}
                  fullWidth
                >
                  Discuss Your Project
                </Button>
              </Paper>
            </Grid>
          </Grid>
          
          {/* Related Technologies Section */}
          {relatedTechnologies && relatedTechnologies.length > 0 && (
            <Box sx={{ mt: 10 }}>
              <Divider sx={{ mb: 6 }} />
              
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 4, 
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: -8,
                    width: '30%',
                    height: 3,
                    background: theme.palette.primary.main,
                    borderRadius: '2px'
                  }
                }}
              >
                Related Technologies
              </Typography>
              
              <Grid container spacing={3}>
                {relatedTechnologies.map(tech => (
                  <Grid item xs={12} sm={6} md={3} key={tech.id}>
                    <Paper
                      component={Link}
                      href={`/technology/${tech.Slug}`}
                      sx={{
                        p: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: 1,
                        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'divider',
                        borderRadius: 2,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 3,
                          borderColor: getCategoryColor(tech.Category)
                        }
                      }}
                    >
                      <Box 
                        sx={{ 
                          width: 60, 
                          height: 60, 
                          mb: 2,
                          position: 'relative' 
                        }}
                      >
                        {tech.Icon?.url ? (
                          <Image
                            src={tech.Icon.url}
                            alt={tech.Name}
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        ) : (
                          <Box sx={{ width: 60, height: 60, bgcolor: 'grey.300', borderRadius: '50%' }} />
                        )}
                      </Box>
                      
                      <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
                        {tech.Name}
                      </Typography>
                      
                      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ mb: 1 }}>
                        <Chip 
                          label={tech.Category}
                          size="small"
                          sx={{ 
                            bgcolor: getCategoryColor(tech.Category),
                            color: 'white',
                            mb: 0.5
                          }}
                        />
                        
                        {tech.ExpertiseLevel && (
                          <Chip 
                            label={tech.ExpertiseLevel}
                            size="small"
                            sx={{ 
                              bgcolor: getExpertiseLevelColor(tech.ExpertiseLevel),
                              color: 'white',
                              mb: 0.5
                            }}
                          />
                        )}
                      </Stack>
                      
                      {tech.YearsExperience && (
                        <Typography variant="caption" color="text.secondary">
                          {tech.YearsExperience}+ years experience
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
                
                <Grid item xs={12} sm={6} md={3}>
                  <Paper
                    component={Link}
                    href="/technologies"
                    sx={{
                      p: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      border: '1px dashed',
                      borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'divider',
                      borderRadius: 2,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: theme.palette.primary.main
                      }
                    }}
                  >
                    <MoreHorizIcon sx={{ fontSize: 40, mb: 2, color: 'text.secondary' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      View All Technologies
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          )}
        </Container>
      </MainLayout>
    </>
  );
}

export async function getStaticPaths() {
  try {
    // Fetch all technologies to generate paths
    const response = await fetchAPI("/technologies", {
      fields: ['Slug'],
      pagination: {
        limit: 100
      }
    });
    
    // Extract the technologies array from the response
    const technologies = response.data ? response.data : response;
    
    const paths = technologies.map((tech) => ({
      params: { technology: tech.Slug },
    }));
    
    return {
      paths,
      fallback: 'blocking' // Show a fallback page while generating new pages
    };
  } catch (error) {
    console.error('Error generating technology paths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    // Fetch single technology by slug
    const response = await fetchAPI("/technologies", {
      filters: {
        Slug: params.technology
      },
      populate: "*"
    });
    
    // Extract the technologies array from the response
    const technologies = response.data ? response.data : response;
    
    // Check if we got any results
    if (!technologies || technologies.length === 0) {
      return {
        notFound: true,
      };
    }
    
    const currentTechnology = technologies[0];
    
    // Fetch related technologies (same category, excluding current)
    const relatedResponse = await fetchAPI("/technologies", {
      filters: {
        Category: currentTechnology.Category,
        id: {
          $ne: currentTechnology.id // Exclude current technology
        }
      },
      pagination: {
        limit: 3 // Limit to 3 related technologies
      },
      populate: "*"
    });
    
    // Extract related technologies
    const relatedTechnologies = relatedResponse.data ? relatedResponse.data : relatedResponse;
    
    return {
      props: {
        technology: currentTechnology,
        relatedTechnologies: relatedTechnologies || [],
        error: false
      },
      // Revalidate content every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error(`Error fetching technology ${params.technology}:`, error);
    return {
      props: {
        technology: null,
        relatedTechnologies: [],
        error: true
      },
      // Revalidate sooner if there was an error
      revalidate: 60,
    };
  }
}