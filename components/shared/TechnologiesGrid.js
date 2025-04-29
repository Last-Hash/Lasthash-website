import { Grid, Paper, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../common/SectionTitle';

const TechnologiesGrid = ({ 
  technologies = [], 
  isLoading = false, 
  error = false,
  title = "Technologies We Master",
  subtitle = "Cutting-edge tools and frameworks we use" 
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  if (isLoading) {
    return <Typography textAlign="center">Loading technologies...</Typography>;
  }

  if (error) {
    return <Typography textAlign="center" color="error">Error loading technologies</Typography>;
  }

  return (
    <Box>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        align="center"
      />
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {technologies.map((tech, index) => (
          <Grid item xs={12} sm={6} md={3} key={tech.id || index}>
            <Paper 
              component={Link}
              href={`/technology/${tech.Slug}`}
              sx={{ 
                p: 3,
                height: '100%',
                bgcolor: 'background.paper',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: isDark 
                    ? '0 8px 24px rgba(0,0,0,0.4)'
                    : '0 8px 24px rgba(0,0,0,0.1)',
                  bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'background.paper'
                }
              }}
            >
              {tech.Icon?.url && (
                <Box 
                  sx={{ 
                    width: 60,
                    height: 60,
                    mb: 2,
                    position: 'relative'
                  }}
                >
                  <Image
                    src={tech.Icon.url}
                    alt={tech.Name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              )}
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  color: isDark ? 'common.white' : 'text.primary',
                  textAlign: 'center'
                }}
              >
                {tech.Name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                  textAlign: 'center'
                }}
              >
                {tech.ShortDescription || tech.Description?.substring(0, 100)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologiesGrid;