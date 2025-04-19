import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import ServiceCard from '../../components/common/ServiceCard';
import { useServiceData } from '../../hooks/useServiceData';

export default function Services() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { services } = useServiceData();

  return (
    <>
      <SEO 
        title="Our Services | Lasthash Software Solutions"
        description="Explore our comprehensive range of software development services including web development, mobile apps, cloud solutions and more."
        keywords="software development services, web development, mobile apps, cloud services"
        canonical="/services"
      />

      <MainLayout>
        {/* Hero Section */}
        <Box 
          sx={{ 
            position: 'relative',
            py: { xs: 8, md: 12 },
            background: isDark 
              ? 'linear-gradient(to right, #141e30, #243b55)'
              : 'linear-gradient(to right, #2193b0, #6dd5ed)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h1" 
              component="h1"
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                mb: 2 
              }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h5"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                opacity: 0.9
              }}
            >
              Comprehensive software solutions tailored to your business needs
            </Typography>
          </Container>
        </Box>

        {/* Services Grid */}
        <Container sx={{ py: { xs: 8, md: 12 } }}>
          {Object.entries(services.services.sections).map(([key, section]) => (
            <Box key={key} sx={{ mb: 8 }}>
              <Typography 
                variant="h3" 
                component="h2"
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 'bold',
                  mb: 3,
                  color: isDark ? 'white' : 'text.primary'
                }}
              >
                {section.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                {section.description}
              </Typography>
              
              <Grid container spacing={4}>
                {section.items.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      link={service.link}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Container>
      </MainLayout>
    </>
  );
}