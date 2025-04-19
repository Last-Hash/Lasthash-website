import { Box, Container, Grid } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
import { useServiceData } from '../../hooks/useServiceData';

const ServicesSection = () => {
  const { services } = useServiceData();
  
  // Get all featured services
  const featuredServices = Object.values(services.services.sections)
    .flatMap(section => 
      section.items.filter(item => item.featured)
    );

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default'
      }}
    >
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Explore our comprehensive range of software development services"
          sx={{ mb: 6 }}
        />
        
        <Grid container spacing={4}>
          {featuredServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;