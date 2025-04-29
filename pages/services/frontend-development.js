import { Box, Container, Typography, Grid, Paper, Button, Card, CardContent, IconButton, Stack, Divider, Avatar, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import { fetchAPI } from '../../utils/api';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { NavigateNext as NavigateNextIcon, Home as HomeIcon } from '@mui/icons-material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DevicesIcon from '@mui/icons-material/Devices';
import WebIcon from '@mui/icons-material/Web';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BugReportIcon from '@mui/icons-material/BugReport';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ParticleBackground from '../../components/effects/ParticleBackground';
import PortfolioSection from '../../components/home/PortfolioSection';
import TechnologiesGrid from '../../components/shared/TechnologiesGrid';
import ProjectsGrid from '../../components/shared/ProjectsGrid';

// Updated services data with more comprehensive offerings
const frontendServices = [
  {
    title: "Custom UI/UX Development",
    description: "We design and develop bespoke user interfaces tailored to your brand and target audience, ensuring intuitive navigation and engaging interactions.",
    icon: <AutoFixHighIcon fontSize="large" />,
    features: ["Brand-aligned design", "Intuitive navigation", "Engaging interactions"]
  },
  {
    title: "Responsive Web Design",
    description: "We build websites and applications that adapt seamlessly to all screen sizes and devices, providing optimal viewing experiences.",
    icon: <DevicesIcon fontSize="large" />
  },
  {
    title: "Single-Page Applications",
    description: "Leverage the power of SPAs for fast, fluid user experiences, ideal for complex web applications requiring high interactivity.",
    icon: <WebIcon fontSize="large" />
  },
  {
    title: "Frontend Optimization",
    description: "Our team optimizes your frontend code for maximum performance, ensuring fast loading times and improved SEO.",
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: "Accessibility Compliance",
    description: "We build inclusive web experiences that adhere to WCAG standards, ensuring your website is usable by everyone.",
    icon: <AccessibilityNewIcon fontSize="large" />
  },
  {
    title: "Frontend Testing",
    description: "Implement rigorous testing methodologies to ensure quality, functionality, and cross-browser compatibility.",
    icon: <BugReportIcon fontSize="large" />
  }
];

// Add key advantages data
const keyAdvantages = [
  {
    title: "Experienced and Passionate Team",
    description: "Our frontend developers are highly skilled, stay up-to-date with the latest trends, and are passionate about creating exceptional user interfaces.",
    icon: <GroupIcon fontSize="large" />
  },
  {
    title: "User-Centric Approach",
    description: "We prioritize user experience in every project, ensuring intuitive and engaging interfaces that delight your users.",
    icon: <PeopleAltIcon fontSize="large" />
  },
  {
    title: "Performance Focused",
    description: "We optimize every aspect of frontend development to ensure fast loading times and smooth interactions.",
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: "Cross-Platform Compatibility",
    description: "Our solutions work flawlessly across all devices, browsers, and screen sizes.",
    icon: <DevicesOtherIcon fontSize="large" />
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure reliable and bug-free deliverables.",
    icon: <VerifiedUserIcon fontSize="large" />
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous maintenance and support to keep your frontend running smoothly.",
    icon: <SupportAgentIcon fontSize="large" />
  }
];

// Keep dummyTestimonials as it's used in the testimonials section
const dummyTestimonials = [
  {
    text: "Lasthash transformed our website into a modern, engaging platform that our customers love.",
    author: "John Smith",
    position: "CTO, TechCorp",
    image: "https://picsum.photos/200?random=1"
  },
  {
    text: "The attention to detail and focus on user experience was exceptional.",
    author: "Sarah Johnson",
    position: "Product Manager, InnovateCo",
    image: "https://picsum.photos/200?random=2"
  },
];

export default function FrontendDevelopment({ technologies, portfolios, isLoading, error }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'Frontend Development' }
  ];

  return (
    <>
      <SEO 
        title="Frontend Development Services: Crafting Exceptional User Experiences | Lasthash"
        description="Transform your digital presence with our expert frontend development services. We build responsive, performant, and user-friendly web interfaces."
        keywords="frontend development, React, Angular, Vue.js, UI/UX design, responsive design, web development, user experience"
        canonical="/services/frontend-development"
      />
      
      <MainLayout>
        {/* Redesigned Hero Section */}
        <Box 
          sx={{ 
            position: 'relative',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            background: isDark 
              ? 'linear-gradient(135deg, #141e30 0%, #243b55 100%)'
              : 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
            color: 'white',
            pt: { xs: 12, md: 16 },
            pb: { xs: 8, md: 12 },
            overflow: 'hidden'
          }}
        >
          {/* Add ParticleBackground */}
          <ParticleBackground />

          {/* Add animated gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.4,
              background: isDark
                ? 'radial-gradient(circle at 50% 50%, rgba(61, 90, 254, 0.1), transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent 70%)',
              animation: 'pulse 8s ease-in-out infinite',
              '@keyframes pulse': {
                '0%': { opacity: 0.4 },
                '50%': { opacity: 0.6 },
                '100%': { opacity: 0.4 }
              }
            }}
          />

          {/* Add floating elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: isDark
                ? 'radial-gradient(circle at center, rgba(0,173,181,0.1), transparent 70%)'
                : 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)',
              animation: 'float 6s ease-in-out infinite',
              '@keyframes float': {
                '0%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
                '100%': { transform: 'translateY(0px)' }
              }
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Breadcrumbs items={breadcrumbItems} />
            
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: { xs: 4, md: 0 } }}>
                  <Typography 
                    component="h1"
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 900,
                      lineHeight: 1.2,
                      mb: 3,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: 80,
                        height: 4,
                        bgcolor: 'primary.main',
                        borderRadius: 2
                      }
                    }}
                  >
                    Frontend Development{' '}
                    <Box 
                      component="span" 
                      sx={{ 
                        color: isDark ? 'primary.light' : 'primary.main',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '30%',
                          bgcolor: isDark ? 'rgba(0,173,181,0.2)' : 'rgba(33,147,176,0.2)',
                          zIndex: -1
                        }
                      }}
                    >
                      Excellence
                    </Box>
                  </Typography>

                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4,
                      opacity: 0.9,
                      lineHeight: 1.6,
                      maxWidth: 600
                    }}
                  >
                    Transform your digital presence with cutting-edge frontend solutions that combine stunning design with powerful functionality.
                  </Typography>

                  <Stack direction="row" spacing={3} sx={{ mb: 6 }}>
                    <Button 
                      variant="contained"
                      size="large"
                      href="/contact"
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.9)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      Start Your Project
                    </Button>
                    <Button 
                      variant="outlined"
                      size="large"
                      href="/portfolio"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255,255,255,0.1)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      View Our Work
                    </Button>
                  </Stack>

                  {/* Quick Stats */}
                  <Grid container spacing={4}>
                    {[
                      { number: '100+', label: 'Successful Projects' },
                      { number: '50+', label: 'Expert Developers' },
                      { number: '98%', label: 'Client Satisfaction' }
                    ].map((stat, index) => (
                      <Grid item xs={4} key={index}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {stat.label}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box 
                  sx={{ 
                    position: 'relative',
                    height: { xs: '300px', md: '500px' },
                    transform: 'perspective(1000px) rotateY(-15deg)',
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(-5deg) translateY(-10px)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: theme => `0 32px 64px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)'}`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: isDark
                          ? 'linear-gradient(135deg, rgba(0,173,181,0.2), transparent)'
                          : 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)',
                        zIndex: 2
                      }
                    }}
                  >
                    <Image
                      src="https://picsum.photos/1200/800?random=1"
                      alt="Frontend Development"
                      fill
                      style={{ 
                        objectFit: 'cover',
                        filter: isDark ? 'brightness(0.7)' : 'none'
                      }}
                      priority
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Services Section */}
        <Container sx={{ py: { xs: 8, md: 12 } }}>
          <SectionTitle
            title="Our Frontend Development Services"
            subtitle="Comprehensive frontend solutions tailored to your needs"
            align="center"
          />
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {frontendServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    bgcolor: 'background.paper',
                    backgroundImage: isDark 
                      ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: isDark 
                        ? '0 8px 24px rgba(0,0,0,0.4)'
                        : '0 8px 24px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
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
                    <Typography variant="h6" gutterBottom>
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

        {/* Why Choose Us Section */}
        <Box sx={{ 
          bgcolor: theme => isDark 
            ? 'background.default' 
            : 'grey.50',
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark 
              ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 70%)'
              : 'none',
            pointerEvents: 'none'
          }
        }}>
          <Container>
            <SectionTitle
              title="Why Choose Lasthash for Frontend Development"
              subtitle="Our commitment to excellence sets us apart"
              align="center"
            />
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {keyAdvantages.map((advantage, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      textAlign: 'center',
                      p: 4,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme => isDark 
                          ? '0 8px 24px rgba(0,0,0,0.4)'
                          : '0 8px 24px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <IconButton 
                      sx={{ 
                        mb: 2,
                        color: 'primary.main',
                        '&:hover': { bgcolor: 'transparent' }
                      }}
                      disableRipple
                    >
                      {advantage.icon}
                    </IconButton>
                    <Typography variant="h6" gutterBottom>
                      {advantage.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {advantage.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Technologies Section */}
        <Container sx={{ py: { xs: 8, md: 12 } }}>
          <TechnologiesGrid
            technologies={technologies}
            isLoading={isLoading}
            error={error}
            title="Frontend Technologies We Master"
            subtitle="Cutting-edge tools and frameworks we use to build exceptional frontend solutions"
          />
        </Container>

        {/* Portfolio Section */}
        <ProjectsGrid
          portfolios={portfolios}
          isLoading={isLoading}
          hasError={error}
          title="Frontend Development Projects"
          subtitle="Explore our successful frontend development projects"
          limit={6}
        />

        {/* Testimonials Section */}
        <Container sx={{ py: { xs: 8, md: 12 } }}>
          <SectionTitle
            title="Client Testimonials"
            subtitle="What our clients say about our frontend development services"
            align="center"
          />
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {dummyTestimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    p: 4,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme => isDark 
                        ? '0 8px 24px rgba(0,0,0,0.4)'
                        : '0 8px 24px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Avatar 
                    src={testimonial.image}
                    alt={testimonial.author}
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    "{testimonial.text}"
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {testimonial.author}, {testimonial.position}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Final CTA Section */}
        <Box sx={{ 
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          background: isDark 
            ? 'linear-gradient(135deg, #141e30 0%, #243b55 100%)'
            : 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark 
              ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)'
              : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            pointerEvents: 'none'
          }
        }}>
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Ready to Build Something Amazing?
            </Typography>
            <Typography sx={{ mb: 4, opacity: 0.9 }}>
              Let's discuss how our frontend development expertise can help bring your vision to life
            </Typography>
            <Button 
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)'
                }
              }}
            >
              Start Your Project
            </Button>
          </Container>
        </Box>
      </MainLayout>
    </>
  );
}

// Update getStaticProps to handle errors gracefully
export async function getStaticProps() {
  try {
    // Fetch portfolios with frontend technologies
    const portfoliosResponse = await fetchAPI("/portfolios", {
      filters: {
        technologies: {
          Category: {
            $eq: "Frontend"
          }
        }
      },
      sort: ['id:desc'],
      populate: {
        ThumbnailImage: { populate: '*' },
        technologies: { populate: '*' },
        portfolio_categories: { populate: '*' }
      }
    });

    // Extract unique frontend technologies from portfolios
    const frontendTechnologies = portfoliosResponse?.data?.reduce((acc, portfolio) => {
      const techs = portfolio.technologies?.filter(tech => tech.Category === "Frontend") || [];
      techs.forEach(tech => {
        if (!acc.find(t => t.id === tech.id)) {
          acc.push(tech);
        }
      });
      return acc;
    }, []);

    // Remove duplicate portfolios
    const uniquePortfolios = portfoliosResponse?.data?.reduce((acc, current) => {
      const x = acc.find(item => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      }
      return acc;
    }, []);

    return {
      props: {
        technologies: frontendTechnologies || [],
        portfolios: { data: uniquePortfolios || [] },
        isLoading: false,
        error: false
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        technologies: [],
        portfolios: { data: [] },
        isLoading: false,
        error: true
      },
      revalidate: 60,
    };
  }
}