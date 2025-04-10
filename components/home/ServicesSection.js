import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: <CodeIcon fontSize="large" />,
    image: 'https://picsum.photos/400/300?random=2',
    link: '/services/web-development'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    icon: <PhoneIphoneIcon fontSize="large" />,
    image: 'https://picsum.photos/400/300?random=3',
    link: '/services/mobile-development'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps services',
    icon: <CloudIcon fontSize="large" />,
    image: 'https://picsum.photos/400/300?random=4',
    link: '/services/cloud'
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets and data',
    icon: <SecurityIcon fontSize="large" />,
    image: 'https://picsum.photos/400/300?random=5',
    link: '/services/security'
  }
];

const ServicesSection = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isDark = theme.palette.mode === 'dark';

  return (
    <Box ref={ref} sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: 'background.default',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
    }}>
      <Container>
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive solutions for your digital needs"
        />
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  bgcolor: theme => isDark ? 'background.paper' : 'background.default',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme => isDark 
                      ? '0 8px 24px rgba(0,0,0,0.4)'
                      : '0 8px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <IconButton 
                    sx={{ 
                      mb: 2,
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'transparent'
                      }
                    }}
                    disableRipple
                  >
                    {service.icon}
                  </IconButton>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;