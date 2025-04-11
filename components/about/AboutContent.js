import { Container, Box, Typography, Grid, Card, CardContent, Avatar, Divider, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import CodeIcon from '@mui/icons-material/Code';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AboutContent = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  // Company values
  const values = [
    {
      title: 'Innovation',
      description: 'We continuously explore and implement cutting-edge technologies and methodologies.',
      icon: <EmojiObjectsIcon fontSize="large" />
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical standards in all our interactions.',
      icon: <SecurityIcon fontSize="large" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to deliver exceptional results.',
      icon: <PeopleIcon fontSize="large" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we create and deliver.',
      icon: <CodeIcon fontSize="large" />
    },
    {
      title: 'Customer Focus',
      description: 'We prioritize understanding and exceeding our clients\' expectations.',
      icon: <LanguageIcon fontSize="large" />
    },
  ];
  
  // Client logos using picsum.photos
  const clients = [
    'https://picsum.photos/seed/client1/200/100',
    'https://picsum.photos/seed/client2/200/100',
    'https://picsum.photos/seed/client3/200/100',
    'https://picsum.photos/seed/client4/200/100',
    'https://picsum.photos/seed/client5/200/100',
    'https://picsum.photos/seed/client6/200/100',
  ];
  
  // Timeline milestones
  const milestones = [
    {
      year: '2010',
      title: 'Our Beginning',
      description: 'Lasthash was founded in Delhi with a mission to create innovative software solutions.'
    },
    {
      year: '2014',
      title: 'Growth & Expansion',
      description: 'Expanded our team to 25 members and opened a second office in Bangalore.'
    },
    {
      year: '2017',
      title: 'International Reach',
      description: 'Began serving international clients and established partnership with US tech companies.'
    },
    {
      year: '2020',
      title: 'New Horizons',
      description: 'Launched our cloud services division and remote-first work culture.'
    },
    {
      year: '2023',
      title: 'Today',
      description: 'With over 50 team members, we continue to innovate and grow our service portfolio.'
    },
  ];
  
  // Styled components for better visuals
  const ValueCard = styled(Card)(({ theme }) => ({
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: isDark 
        ? '0 10px 30px -10px rgba(0,0,0,0.3)' 
        : '0 10px 30px -10px rgba(0,0,0,0.2)',
    }
  }));
  
  const TimelineItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    marginBottom: theme.spacing(5),
    '&:last-child': {
      marginBottom: 0
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 28,
      top: 40,
      bottom: -30,
      width: 2,
      background: theme.palette.primary.main,
      [theme.breakpoints.down('sm')]: {
        left: 20,
      }
    },
    '&:last-child:before': {
      display: 'none'
    }
  }));
  
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          py: { xs: 10, md: 15 },
          background: isDark 
            ? 'linear-gradient(to right, #141e30, #243b55)'
            : 'linear-gradient(to right, #2193b0, #6dd5ed)',
          color: 'white',
          textAlign: 'center',
          borderRadius: { md: '0 0 20% 20%/0 0 5% 5%' }
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
            Our Story
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
            Since 2010, we've been turning innovative ideas into powerful software solutions
          </Typography>
        </Container>
      </Box>
      
      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                position: 'relative',
                height: { xs: '300px', md: '450px' },
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: isDark 
                  ? '0 20px 40px rgba(0,0,0,0.3)'
                  : '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <Image 
                src="https://picsum.photos/seed/teamwork/800/600" 
                alt="Lasthash team"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionTitle
              subTitle="Our Journey"
              title="From Startup to Industry Leader"
              align="left"
            />
            <Typography variant="body1" paragraph>
              Founded in 2010 by a team of passionate developers, Lasthash began with a simple mission: to create software that makes a difference. From our humble beginnings in a small office in Delhi, we've grown into a dynamic team of over 50 talented professionals.
            </Typography>
            <Typography variant="body1" paragraph>
              What started as a web development agency has evolved into a full-service software company, helping businesses of all sizes transform their digital presence and operations. Throughout our journey, we've remained committed to our founding principles of innovation, quality, and client satisfaction.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, we're proud to have served hundreds of clients across multiple industries, from startups to Fortune 500 companies, delivering solutions that drive growth and efficiency.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      
      {/* Mission and Vision */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 10 },
          background: isDark 
            ? 'linear-gradient(135deg, rgba(20,30,48,0.7) 0%, rgba(36,59,85,0.7) 100%)'
            : 'linear-gradient(135deg, rgba(33,147,176,0.05) 0%, rgba(109,213,237,0.05) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subTitle="Purpose & Direction"
            title="Our Mission & Vision"
            align="center"
          />
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    background: theme.palette.primary.main
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                    To empower businesses with innovative software solutions that solve real-world problems, enhance efficiency, and drive growth.
                  </Typography>
                  <Typography variant="body1">
                    We believe that technology should be an enabler, not a barrier. That's why we create solutions that are powerful yet intuitive, complex yet user-friendly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    background: theme.palette.secondary.main
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                    To be a leading force in digital transformation, recognized globally for our innovative solutions, technical excellence, and client-centered approach.
                  </Typography>
                  <Typography variant="body1">
                    We envision a future where every business, regardless of size or industry, can leverage cutting-edge technology to achieve its full potential.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Our Values */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SectionTitle
          subTitle="Guiding Principles"
          title="Our Core Values"
          align="center"
        />
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ValueCard>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ 
                    color: theme.palette.primary.main,
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2">
                    {value.description}
                  </Typography>
                </CardContent>
              </ValueCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Timeline Section */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 10 },
          background: isDark 
            ? 'linear-gradient(135deg, rgba(20,30,48,0.7) 0%, rgba(36,59,85,0.7) 100%)'
            : 'linear-gradient(135deg, rgba(33,147,176,0.05) 0%, rgba(109,213,237,0.05) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subTitle="Our Journey"
            title="Key Milestones"
            align="center"
          />
          <Box sx={{ mt: 6, pl: { xs: 5, md: 7 } }}>
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <Box 
                  sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    background: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                    mr: 3,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {milestone.year}
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body1">
                    {milestone.description}
                  </Typography>
                </Box>
              </TimelineItem>
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* Our Expertise */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 10 },
          background: isDark 
            ? 'linear-gradient(135deg, rgba(20,30,48,0.7) 0%, rgba(36,59,85,0.7) 100%)'
            : 'linear-gradient(135deg, rgba(33,147,176,0.05) 0%, rgba(109,213,237,0.05) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subTitle="What We Do Best"
            title="Our Expertise"
            align="center"
          />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box 
                  sx={{ 
                    p: 3,
                    borderRadius: 2,
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)'
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Web Application Development
                  </Typography>
                  <Typography variant="body1">
                    We build responsive, scalable web applications using modern frameworks like React, Angular, and Vue.js, backed by robust server-side technologies.
                  </Typography>
                </Box>
                <Box 
                  sx={{ 
                    p: 3,
                    borderRadius: 2,
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)'
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Mobile App Development
                  </Typography>
                  <Typography variant="body1">
                    Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and performance.
                  </Typography>
                </Box>
                <Box 
                  sx={{ 
                    p: 3,
                    borderRadius: 2,
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)'
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Custom Software Solutions
                  </Typography>
                  <Typography variant="body1">
                    Tailor-made software applications designed to address specific business challenges and optimize operations.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box 
                  sx={{ 
                    p: 3,
                    borderRadius: 2,
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)'
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Cloud Services & DevOps
                  </Typography>
                  <Typography variant="body1">
                    Cloud migration, infrastructure management, and DevOps practices that enhance scalability, security, and operational efficiency.
                  </Typography>
                </Box>
                <Box 
                  sx={{ 
                    p: 3,
                    borderRadius: 2,
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)'
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    E-Commerce Solutions
                  </Typography>
                  <Typography variant="body1">
                    Comprehensive e-commerce platforms with seamless payment integration, inventory management, and customer experience optimization.
                  </Typography>
                </Box>
                <Box 
                  sx={{ 
                    p: 3,
                    borderRadius: 2,
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)'
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    AI & Machine Learning
                  </Typography>
                  <Typography variant="body1">
                    Intelligent solutions that leverage data analytics, machine learning, and AI to provide actionable insights and automation.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Our Clients */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SectionTitle
          subTitle="Trusted By"
          title="Our Clients"
          align="center"
        />
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 6 }}>
          We're proud to have worked with a diverse range of clients, from startups to enterprise organizations,
          across various industries around the globe.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {clients.map((client, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box 
                sx={{ 
                  p: 2,
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: isDark ? 'grayscale(100%) brightness(1.5)' : 'grayscale(100%)',
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1
                  }
                }}
              >
                <Image 
                  src={client} 
                  alt="Client logo"
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Contact CTA */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          background: isDark 
            ? 'linear-gradient(to right, #141e30, #243b55)'
            : 'linear-gradient(to right, #2193b0, #6dd5ed)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Work With Us?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Let's discuss how we can help transform your business with innovative software solutions.
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  mb: 2
                }}>
                  <EmailIcon />
                </Box>
                <Typography variant="body1">
                  contact@lasthash.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  mb: 2
                }}>
                  <PhoneIcon />
                </Box>
                <Typography variant="body1">
                  +91-7982377273
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  mb: 2
                }}>
                  <LocationOnIcon />
                </Box>
                <Typography variant="body1">
                  Delhi, India
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            component={Link}
            href="/contact"
            sx={{ 
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              fontSize: '1.1rem'
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutContent;