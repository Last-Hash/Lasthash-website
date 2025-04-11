import { Box, Container, Grid, Paper, Typography, Skeleton } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

const TechnologyStack = ({ technologiesData = { data: [] }, isLoading = false, hasError = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  // If loading, show skeleton
  if (isLoading) {
    return <TechnologyStackSkeleton isDark={isDark} />;
  }
  
  // Group technologies by category from API data only
  const groupedTechnologies = {};
  
  // Process the API data
  if (technologiesData && technologiesData.data) {
    technologiesData.data.forEach(tech => {
      const category = tech.Category || 'Other';
      if (!groupedTechnologies[category]) {
        groupedTechnologies[category] = [];
      }
      groupedTechnologies[category].push(tech);
    });
  }

  // Convert to array for easier manipulation
  const categoriesArray = Object.entries(groupedTechnologies);
  const isOddCount = categoriesArray.length % 2 !== 0;

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: 'background.paper'
    }}>
      <Container>
        <SectionTitle 
          title="Technology Stack" 
          subtitle="We use cutting-edge technologies to build modern solutions"
        />
        
        {categoriesArray.length === 0 && hasError ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography>Unable to load technologies. Please try again later.</Typography>
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent={isOddCount ? "center" : "flex-start"}>
            {categoriesArray.map(([categoryName, technologies], index) => {
              // Calculate if this is the last item in an odd-count array
              const isLastInOddArray = isOddCount && index === categoriesArray.length - 1;
              
              return (
                <Grid 
                  item 
                  xs={12} 
                  md={6} 
                  key={categoryName}
                  sx={isLastInOddArray ? { 
                    gridColumn: { md: 'auto', lg: 'auto' },
                    maxWidth: { md: '50%', lg: '50%' }
                  } : {}}
                >
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 3,
                      height: '100%',
                      border: 1,
                      borderColor: theme => isDark ? 'rgba(255,255,255,0.1)' : 'divider',
                      bgcolor: theme => isDark ? 'background.paper' : 'background.default',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transition: 'all 0.3s ease',
                        boxShadow: theme => isDark 
                          ? '0 8px 24px rgba(0,0,0,0.4)'
                          : '0 8px 24px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        mb: 3,
                        fontWeight: 'bold',
                        color: 'primary.main'
                      }}
                    >
                      {categoryName}
                    </Typography>
                    <Grid container spacing={2}>
                      {technologies.map((tech, index) => {
                        // Get data from API format only
                        const name = tech.Name;
                        const iconUrl = tech.Icon?.url;
                        
                        if (!name || !iconUrl) return null;
                        
                        return (
                          <Grid item xs={6} sm={3} key={index}>
                            <Box 
                              sx={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                  transition: 'transform 0.3s ease'
                                }
                              }}
                            >
                              <Box
                                sx={{
                                  position: 'relative',
                                  width: 48,
                                  height: 48,
                                }}
                              >
                                <Image
                                  src={iconUrl}
                                  alt={name}
                                  fill
                                  style={{ objectFit: 'contain' }}
                                  unoptimized={true}
                                />
                              </Box>
                              <Typography 
                                variant="caption" 
                                align="center"
                                sx={{ fontWeight: 500 }}
                              >
                                {name}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

// Skeleton loader component for technologies
const TechnologyStackSkeleton = ({ isDark }) => {
  // Show 5 skeletons for an odd number example
  const skeletonCount = 5;
  const isOddCount = skeletonCount % 2 !== 0;
  
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Skeleton variant="text" width="200px" height={42} sx={{ mx: 'auto' }} />
          <Skeleton variant="text" width="80%" height={24} sx={{ mx: 'auto', mt: 1 }} />
        </Box>
        <Grid container spacing={4} justifyContent={isOddCount ? "center" : "flex-start"}>
          {Array(skeletonCount).fill(0).map((_, index) => {
            // Calculate if this is the last item in an odd-count array
            const isLastInOddArray = isOddCount && index === skeletonCount - 1;
            
            return (
              <Grid 
                item 
                xs={12} 
                md={6} 
                key={index}
                sx={isLastInOddArray ? {
                  gridColumn: { md: 'auto', lg: 'auto' },
                  maxWidth: { md: '50%', lg: '50%' }
                } : {}}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    border: 1,
                    borderColor: theme => isDark ? 'rgba(255,255,255,0.1)' : 'divider',
                  }}
                >
                  <Skeleton variant="text" width="140px" height={32} sx={{ mb: 3 }} />
                  <Grid container spacing={2}>
                    {Array(8).fill(0).map((_, techIndex) => (
                      <Grid item xs={6} sm={3} key={techIndex}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                          <Skeleton variant="circular" width={48} height={48} />
                          <Skeleton variant="text" width={60} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologyStack;