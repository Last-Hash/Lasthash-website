import { Box, Container, Typography, Button, Grid } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Box sx={{ 
      background: theme => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      color: 'white',
      pt: { xs: 8, md: 12 },
      pb: { xs: 8, md: 12 },
      overflow: 'hidden'
    }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2
              }}
            >
              Building Scalable Software Solutions for Your Business Growth
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 4,
                fontWeight: 'normal',
                opacity: 0.9
              }}
            >
              Transform your ideas into powerful digital solutions with our expert development team
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                endIcon={<RocketLaunchIcon />}
                sx={{ 
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
                href="/contact"
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                href="/portfolio"
              >
                View Our Work
              </Button>
            </Box>
            <Box sx={{ mt: 4, display: 'flex', gap: 3, alignItems: 'center' }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>500+</Typography>
                <Typography variant="body2">Projects Delivered</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>50+</Typography>
                <Typography variant="body2">Expert Developers</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>98%</Typography>
                <Typography variant="body2">Client Satisfaction</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              position: 'relative', 
              height: { xs: '300px', md: '500px' },
              animation: 'float 6s ease-in-out infinite'
            }}>
              <Image
                src="https://picsum.photos/800/600?tech"
                alt="Software Development"
                fill
                style={{ 
                  objectFit: 'contain',
                  borderRadius: '10px',
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;