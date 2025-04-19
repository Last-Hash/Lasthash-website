import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import ServiceCard from '../../components/common/ServiceCard';
import { useServiceData } from '../../hooks/useServiceData';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ParticleBackground from '../../components/effects/ParticleBackground';
import { motion } from 'framer-motion';

export default function Services() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { services } = useServiceData();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const breadcrumbItems = [
    { label: 'Services' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Add background colors for alternating sections
  const sectionColors = {
    light: [
      'linear-gradient(135deg, #f6f9fc 0%, #f1f4f8 100%)',
      'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      'linear-gradient(135deg, #f0f7ff 0%, #e6f0f9 100%)'
    ],
    dark: [
      'linear-gradient(135deg, #1a1f2c 0%, #161b26 100%)',
      'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
    ]
  };

  return (
    <>
      <SEO 
        title="Our Services | Lasthash Software Solutions"
        description="Explore our comprehensive range of software development services including web development, mobile apps, cloud solutions and more."
        keywords="software development services, web development, mobile apps, cloud services"
        canonical="/services"
      />

      <MainLayout>
        {/* Hero Section with Particle Effect */}
        <Box 
          sx={{ 
            position: 'relative',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            background: isDark 
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
              : 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
            color: 'white',
            overflow: 'hidden',
            pt: { xs: 12, md: 16 },
            pb: { xs: 8, md: 12 }
          }}
        >
          <ParticleBackground />
          
          {/* Centered Breadcrumbs Container */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 24, md: 32 },
              left: 0,
              right: 0,
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Breadcrumbs 
                items={breadcrumbItems}
                sx={{
                  '& .MuiBreadcrumbs-ol': {
                    justifyContent: 'center'
                  },
                  '& .MuiBreadcrumbs-li': {
                    color: 'rgba(255,255,255,0.9)'
                  },
                  '& .MuiBreadcrumbs-separator': {
                    color: 'rgba(255,255,255,0.5)'
                  }
                }}
              />
            </motion.div>
          </Box>

          {/* Rest of the hero content */}
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 6, pt: { xs: 4, md: 6 } }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 800,
                    mb: 3,
                    background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Our Services
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography 
                  variant="h5"
                  sx={{ 
                    maxWidth: '800px',
                    mx: 'auto',
                    opacity: 0.9,
                    lineHeight: 1.6
                  }}
                >
                  Comprehensive software solutions tailored to your business needs
                </Typography>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* Services Sections with Different Backgrounds */}
        {Object.entries(services.services.sections).map(([key, section], sectionIndex) => (
          <Box
            key={key}
            sx={{
              position: 'relative',
              py: { xs: 8, md: 12 },
              background: isDark 
                ? sectionColors.dark[sectionIndex % 3]
                : sectionColors.light[sectionIndex % 3],
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: isDark
                  ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: isDark
                  ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
              }
            }}
          >
            <Container maxWidth="lg">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Box sx={{ mb: 8, position: 'relative' }}>
                  <motion.div variants={itemVariants}>
                    <Typography 
                      variant="h3" 
                      component="h2"
                      sx={{ 
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 800,
                        mb: 3,
                        color: isDark ? 'white' : 'text.primary',
                        textAlign: 'center',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -16,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 80,
                          height: 4,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                          opacity: 0.8
                        }
                      }}
                    >
                      {section.title}
                    </Typography>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 8, 
                        maxWidth: 700, 
                        mx: 'auto',
                        textAlign: 'center',
                        color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                      }}
                    >
                      {section.description}
                    </Typography>
                  </motion.div>

                  <Grid container spacing={4}>
                    {section.items.map((service, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div 
                          variants={itemVariants}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <ServiceCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            link={service.link}
                          />
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Container>
          </Box>
        ))}
      </MainLayout>
    </>
  );
}