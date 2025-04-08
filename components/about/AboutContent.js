import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';

const AboutContent = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <SectionTitle 
          title="About Lasthash" 
          subtitle="Your Trusted Technology Partner"
        />
        
        {/* Main Content */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '500px' }}>
              <Image
                src="https://picsum.photos/800/1000?tech"
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
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Story
            </Typography>
            <Typography paragraph>
              Founded in 2010, Lasthash has been at the forefront of digital innovation, 
              helping businesses transform their operations through cutting-edge technology 
              solutions.
            </Typography>
            
            <Typography paragraph>
              With over a decade of experience and 500+ successful projects, we've built 
              a reputation for delivering high-quality software solutions that drive 
              business growth and innovation.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                {[
                  { number: '500+', label: 'Projects Completed' },
                  { number: '50+', label: 'Expert Developers' },
                  { number: '10+', label: 'Years Experience' },
                  { number: '98%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <Paper 
                      elevation={0}
                      sx={{ 
                        p: 3, 
                        textAlign: 'center',
                        bgcolor: 'background.paper',
                        border: 1,
                        borderColor: 'divider'
                      }}
                    >
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: 'primary.main',
                          mb: 1
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography 
                        variant="body2"
                        color="text.secondary"
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Mission & Vision */}
          <Grid item xs={12}>
            <Box sx={{ mt: 6 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Paper 
                    sx={{ 
                      p: 4,
                      height: '100%',
                      bgcolor: 'background.paper'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 'bold',
                        color: 'primary.main'
                      }}
                    >
                      Our Mission
                    </Typography>
                    <Typography>
                      To empower businesses with innovative technology solutions that 
                      drive growth, efficiency, and digital transformation. We strive 
                      to deliver excellence through cutting-edge software development 
                      and unwavering commitment to client success.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper 
                    sx={{ 
                      p: 4,
                      height: '100%',
                      bgcolor: 'background.paper'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 'bold',
                        color: 'primary.main'
                      }}
                    >
                      Our Vision
                    </Typography>
                    <Typography>
                      To be the global leader in delivering transformative digital 
                      solutions that shape the future of technology. We envision a 
                      world where businesses thrive through seamless integration of 
                      innovative software solutions.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutContent;