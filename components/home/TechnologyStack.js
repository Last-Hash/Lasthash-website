import { Box, Container, Grid, Paper, Typography, Skeleton, useMediaQuery } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LayersIcon from '@mui/icons-material/Layers';
import { keyframes } from '@mui/system';
import Link from 'next/link';

// Define animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const moveHorizontal = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const TechnologyStack = ({ technologiesData = { data: [] }, isLoading = false, hasError = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
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
  
  // Get icon for each category
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Frontend':
        return <CodeIcon sx={{ fontSize: 32 }} />;
      case 'Backend':
        return <LayersIcon sx={{ fontSize: 32 }} />;
      case 'Database':
        return <StorageIcon sx={{ fontSize: 32 }} />;
      case 'Cloud & DevOps':
        return <CloudIcon sx={{ fontSize: 32 }} />;
      case 'Mobile':
        return <PhoneIphoneIcon sx={{ fontSize: 32 }} />;
      default:
        return <LayersIcon sx={{ fontSize: 32 }} />;
    }
  };
  
  // Get color for category
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Frontend':
        return theme.palette.primary.main;
      case 'Backend':
        return theme.palette.secondary.main;
      case 'Database':
        return '#9C27B0'; // Purple
      case 'Cloud & DevOps':
        return '#2196F3'; // Blue
      case 'Mobile':
        return '#FF9800'; // Orange
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: isDark ? 'rgba(16, 20, 24, 0.95)' : '#fafafa',
      position: 'relative',
      overflow: 'hidden', // Important for containing the bubbles
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60%',
        background: isDark 
          ? 'linear-gradient(180deg, rgba(25, 118, 210, 0.05) 0%, transparent 100%)'
          : 'linear-gradient(180deg, rgba(25, 118, 210, 0.03) 0%, transparent 100%)',
        zIndex: 0
      }
    }}>
      {/* Modern wave pattern overlay */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 50 C 20 30, 80 30, 100 50 C 120 70, 180 70, 200 50' stroke='%23${isDark ? '3a74ad' : '2196f3'}' stroke-width='1' fill='none' stroke-opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 100px',
        opacity: 0.3,
        zIndex: 0
      }} />
      
      {/* Decorative floating bubbles in background */}
      {!isMobile && (
        <>
          {/* Top left bubble */}
          <Box sx={{ 
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: 180,
            height: 180,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}15, ${theme.palette.primary.main}05)`,
            filter: 'blur(30px)',
            animation: `${float} 8s ease-in-out infinite`,
            zIndex: 0
          }} />
          
          {/* Bottom right bubble */}
          <Box sx={{ 
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.secondary.main}20, ${theme.palette.secondary.main}05)`,
            filter: 'blur(40px)',
            animation: `${float} 10s ease-in-out infinite 1s`,
            zIndex: 0
          }} />
          
          {/* Middle bubble */}
          <Box sx={{ 
            position: 'absolute',
            top: '50%',
            left: '30%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: `radial-gradient(circle, #9c27b015, #9c27b005)`,
            filter: 'blur(20px)',
            animation: `${pulse} 6s ease-in-out infinite`,
            zIndex: 0
          }} />
          
          {/* Small floating elements */}
          <Box sx={{ 
            position: 'absolute',
            top: '25%',
            right: '25%',
            width: 15,
            height: 15,
            borderRadius: '50%',
            backgroundColor: `${theme.palette.primary.main}30`,
            animation: `${moveHorizontal} 15s linear infinite`,
            zIndex: 0
          }} />
          
          <Box sx={{ 
            position: 'absolute',
            bottom: '30%',
            left: '20%',
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: `${theme.palette.secondary.main}30`,
            animation: `${moveHorizontal} 12s linear infinite`,
            zIndex: 0
          }} />
          
          {/* Subtle grid pattern */}
          <Box sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), 
                             linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            zIndex: 0
          }} />
          
          {/* Modern gradient circles */}
          <Box sx={{
            position: 'absolute',
            top: '15%',
            right: '15%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}`,
            animation: `${rotate} 60s linear infinite`,
            zIndex: 0
          }} />
          
          <Box sx={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: 250,
            height: 250,
            borderRadius: '50%',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'}`,
            animation: `${rotate} 45s linear infinite reverse`,
            zIndex: 0
          }} />
          
          {/* Diagonal pattern stripes */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.02,
            backgroundImage: `linear-gradient(45deg, ${isDark ? '#ffffff' : '#000000'} 25%, transparent 25%, transparent 50%, ${isDark ? '#ffffff' : '#000000'} 50%, ${isDark ? '#ffffff' : '#000000'} 75%, transparent 75%, transparent)`,
            backgroundSize: '100px 100px',
            zIndex: 0
          }} />
          
          {/* Rainbow line removed as requested */}
        </>
      )}
      
      <Container sx={{ position: 'relative', zIndex: 1 }}>
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
            {categoriesArray.map(([categoryName, technologies], categoryIndex) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                key={categoryName}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    border: 1,
                    borderColor: theme => isDark ? 'rgba(255,255,255,0.1)' : 'divider',
                    bgcolor: theme => isDark ? 'rgba(30, 30, 40, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: getCategoryColor(categoryName),
                      transition: 'all 0.3s ease',
                      boxShadow: theme => isDark 
                        ? `0 8px 24px ${getCategoryColor(categoryName)}30`
                        : `0 8px 24px ${getCategoryColor(categoryName)}20`
                    }
                  }}
                >
                  {/* Top accent light */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '30%',
                    background: `linear-gradient(to bottom, ${getCategoryColor(categoryName)}10, transparent)`,
                    opacity: 0.7,
                    zIndex: 0
                  }} />
                  
                  {/* Background pattern */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.04,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M0 0h10v10H0V0zm10 10h10v10H10V10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px',
                    zIndex: 0
                  }} />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1, position: 'relative', zIndex: 1 }}>
                    <Box sx={{ 
                      color: getCategoryColor(categoryName),
                      mr: 1,
                      p: 1,
                      borderRadius: '8px',
                      backgroundColor: `${getCategoryColor(categoryName)}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: `linear-gradient(90deg, transparent, ${getCategoryColor(categoryName)}30, transparent)`,
                        transform: 'rotate(30deg)',
                        animation: `${shimmer} 3s infinite`,
                        opacity: 0.7
                      }
                    }}>
                      {getCategoryIcon(categoryName)}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        color: getCategoryColor(categoryName),
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          bottom: -4,
                          width: '30%',
                          height: 2,
                          background: `linear-gradient(90deg, ${getCategoryColor(categoryName)}, transparent)`,
                          borderRadius: '2px'
                        }
                      }}
                    >
                      {categoryName}
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                    {technologies.map((tech, index) => {
                      // Get data from API format only
                      const name = tech.Name;
                      const iconUrl = tech.Icon?.url;
                      const slug = tech.Slug || tech.id;
                      
                      if (!name || !iconUrl) return null;
                      
                      return (
                        <Grid item xs={6} sm={3} key={index}>
                          <Box 
                            component={Link}
                            href={`/technology/${slug}`}
                            sx={{ 
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: 1,
                              animation: `${float} 6s ease-in-out infinite ${index * 0.3}s`, // Staggered floating animation
                              textDecoration: 'none',
                              '&:hover': {
                                transform: 'translateY(-4px) scale(1.05)',
                                transition: 'all 0.3s ease'
                              }
                            }}
                          >
                            <Box
                              sx={{
                                position: 'relative',
                                width: 48,
                                height: 48,
                                background: `radial-gradient(circle, ${getCategoryColor(categoryName)}10, transparent 70%)`,
                                borderRadius: '50%',
                                p: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&::after': {
                                  content: '""',
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  borderRadius: '50%',
                                  border: `1px solid ${getCategoryColor(categoryName)}20`,
                                  animation: `${pulse} 3s infinite`,
                                  zIndex: 0
                                }
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
                              sx={{ 
                                fontWeight: 500,
                                color: isDark ? 'white' : 'text.primary'
                              }}
                            >
                              {name}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                  
                  {/* Decoration element at bottom */}
                  <Box sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${getCategoryColor(categoryName)}20, ${getCategoryColor(categoryName)}05)`,
                    filter: 'blur(15px)',
                    zIndex: 0
                  }} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

// Skeleton loader component for technologies
const TechnologyStackSkeleton = ({ isDark }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: isDark ? 'rgba(16, 20, 24, 0.95)' : '#fafafa',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background effects for skeleton */}
      <Box sx={{ 
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.palette.primary.main}15, ${theme.palette.primary.main}05)`,
        filter: 'blur(30px)',
        animation: `${float} 8s ease-in-out infinite`,
        zIndex: 0
      }} />
      
      <Box sx={{ 
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.palette.secondary.main}20, ${theme.palette.secondary.main}05)`,
        filter: 'blur(40px)',
        animation: `${float} 10s ease-in-out infinite 1s`,
        zIndex: 0
      }} />
      
      {/* Modern wave pattern overlay */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 50 C 20 30, 80 30, 100 50 C 120 70, 180 70, 200 50' stroke='%23${isDark ? '3a74ad' : '2196f3'}' stroke-width='1' fill='none' stroke-opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 100px',
        opacity: 0.3,
        zIndex: 0
      }} />
      
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Skeleton variant="text" width="200px" height={42} sx={{ mx: 'auto' }} />
          <Skeleton variant="text" width="80%" height={24} sx={{ mx: 'auto', mt: 1 }} />
        </Box>
        <Grid container spacing={4}>
          {Array(5).fill(0).map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3,
                  height: '100%',
                  border: 1,
                  borderColor: theme => isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  borderRadius: '12px',
                  bgcolor: theme => isDark ? 'rgba(30, 30, 40, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background pattern */}
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.03,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M0 0h10v10H0V0zm10 10h10v10H10V10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '20px 20px',
                  zIndex: 0
                }} />
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative', zIndex: 1 }}>
                  <Skeleton variant="rounded" width={48} height={48} sx={{ mr: 1, borderRadius: '8px' }} />
                  <Skeleton variant="text" width="140px" height={32} />
                </Box>
                <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                  {Array(8).fill(0).map((_, techIndex) => (
                    <Grid item xs={6} sm={3} key={techIndex}>
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        gap: 1,
                        animation: `${float} 6s ease-in-out infinite ${techIndex * 0.2}s`
                      }}>
                        <Skeleton variant="circular" width={48} height={48} />
                        <Skeleton variant="text" width={60} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologyStack;