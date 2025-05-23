import { Grid, Card, Box, Typography, Chip, CardContent, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material/styles';

const PortfolioGrid = ({ portfolios = [], limit }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  // Convert portfolios input to array if it's wrapped in data property
  const portfoliosArray = portfolios?.data || portfolios;
  
  const displayedItems = Array.isArray(portfoliosArray) 
    ? (limit ? portfoliosArray.slice(0, limit) : portfoliosArray)
        .filter(project => project.ThumbnailImage?.url || project.ThumbnailImage?.formats?.medium?.url)
    : [];

  if (!displayedItems?.length) {
    return (
      <Typography textAlign="center" color="text.secondary">
        No projects available at the moment.
      </Typography>
    );
  }

  return (
    <Grid container spacing={4}>
      {displayedItems.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Link 
            href={`/portfolio/${project.Slug}`} 
            passHref 
            style={{ 
              textDecoration: 'none',
              display: 'block',
              cursor: 'pointer',
              height: '100%'
            }}
            title={`View details: ${project.Title}`}
          >
            <Card
              component="article"
              sx={{ 
                height: '100%',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: isDark 
                    ? '0 8px 24px rgba(0,0,0,0.4)' 
                    : '0 8px 24px rgba(0,0,0,0.1)',
                  '& .project-image': {
                    transform: 'scale(1.05)'
                  }
                }
              }}
            >
              {/* Fixed height image container */}
              <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                <Image
                  src={project.ThumbnailImage?.formats?.medium?.url || project.ThumbnailImage?.url}
                  alt={project.Title}
                  fill
                  className="project-image"
                  style={{ 
                    objectFit: 'cover',
                    borderRadius: '4px 4px 0 0',
                    transition: 'transform 0.5s ease'
                  }}
                />
                {project.Featured && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 'medium'
                    }}
                  >
                    Featured
                  </Box>
                )}
              </Box>
              
              <CardContent 
                sx={{ 
                  flexGrow: 1, 
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Title with fixed height - removed mb (margin bottom) */}
                <Box sx={{ height: 56 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: isDark ? 'common.white' : 'text.primary',
                      fontWeight: 'bold',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: 1.4
                    }}
                  >
                    {project.Title}
                  </Typography>
                </Box>

                {/* Combined categories and technologies with consistent spacing */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 'auto' }}>
                  {/* Categories */}
                  <Box>
                    {project.portfolio_categories?.length > 0 && (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.portfolio_categories.map((category) => (
                          <Chip
                            key={category.id}
                            label={category.title}
                            size="small"
                            color="primary"
                            sx={{
                              bgcolor: isDark ? 'primary.dark' : 'primary.light',
                              color: 'white',
                              fontSize: '0.75rem',
                              height: '24px'
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>

                  {/* Technologies */}
                  <Box>
                    {project.technologies?.length > 0 && (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech.id}
                            icon={tech.Icon?.url ? (
                              <Box sx={{ width: 20, height: 20, position: 'relative', mr: -0.5 }}>
                                <Image
                                  src={tech.Icon.url}
                                  alt=""
                                  fill
                                  style={{ objectFit: 'contain' }}
                                />
                              </Box>
                            ) : null}
                            label={tech.Name}
                            size="small"
                            variant="outlined"
                            sx={{
                              bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                              color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                              border: 'none',
                              '& .MuiChip-icon': {
                                ml: 0.5
                              }
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PortfolioGrid;