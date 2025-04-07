import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Box sx={{ 
      backgroundImage: 'linear-gradient(to right, #1976d2, #1565c0)',
      color: 'white',
      pt: { xs: 8, md: 12 },
      pb: { xs: 8, md: 12 }
    }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                mb: 2 
              }}>
              Transform Your Ideas Into Reality
            </Typography>
            <Typography variant="h2" 
              sx={{ 
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 4,
                fontWeight: 'normal' 
              }}>
              We build innovative software solutions for businesses worldwide
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                href="/contact"
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                sx={{ color: 'white', borderColor: 'white' }}
                size="large"
                href="/portfolio"
              >
                View Our Work
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: { xs: '300px', md: '400px' } }}>
              <Image
                src="/hero-image.png"
                alt="Software Development"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;