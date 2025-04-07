import { Box, Container, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: <CodeIcon fontSize="large" />,
    link: '/services/web-development'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    icon: <PhoneIphoneIcon fontSize="large" />,
    link: '/services/mobile-development'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps services',
    icon: <CloudIcon fontSize="large" />,
    link: '/services/cloud'
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets and data',
    icon: <SecurityIcon fontSize="large" />,
    link: '/services/security'
  }
];

const ServicesSection = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
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
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <IconButton 
                    sx={{ 
                      mb: 2,
                      color: 'primary.main',
                      '&:hover': { bgcolor: 'transparent' }
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