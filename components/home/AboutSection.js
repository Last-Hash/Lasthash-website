import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';

const AboutSection = () => {
  const isDark = false; // Example variable to determine theme mode

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: theme => isDark ? 'background.default' : 'background.paper',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: theme => isDark 
          ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)'
          : 'none',
        pointerEvents: 'none'
      }
    }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '400px' }}>
              <Image
                src="/images/working-in-workstatio.jpg"
                alt="About Lasthash"
                fill
                style={{ 
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionTitle 
              title="Who We Are" 
              subtitle="Driving Digital Innovation"
              align="left"
            />
            <Typography paragraph>
              Lasthash is a leading software development company dedicated to delivering 
              innovative solutions that help businesses thrive in the digital age. With 
              over 5 years of experience, we've successfully delivered 500+ projects across 
              various industries.
            </Typography>
            <Typography paragraph>
              Our team of expert developers, designers, and consultants work together to 
              create custom solutions that meet your specific needs and drive your business 
              forward.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                href="/about-us"
              >
                Learn More
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                size="large"
                href="/team"
              >
                Meet Our Team
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;