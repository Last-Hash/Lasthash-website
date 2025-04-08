import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Logo from '../common/Logo';
import { useEffect, useState } from 'react';

const IndianFlagLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="4" width="24" height="5.33333" fill="#FF9933"/>
    <rect y="9.33333" width="24" height="5.33333" fill="#FFFFFF"/>
    <rect y="14.6667" width="24" height="5.33333" fill="#138808"/>
    <circle cx="12" cy="12" r="2" fill="#000080"/>
    <g fill="#000080">
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="12"
          y1="12"
          x2={12 + 1.8 * Math.cos(i * Math.PI / 12)}
          y2={12 + 1.8 * Math.sin(i * Math.PI / 12)}
          strokeWidth="0.5"
          stroke="#000080"
        />
      ))}
    </g>
  </svg>
);

const TopFooter = () => {
  const theme = useTheme();
  const startYear = 2010;
  const [years, setYears] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(currentYear - startYear);
  }, []);

  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
    { icon: <InstagramIcon />, url: 'https://instagram.com' }
  ];

  const contactInfo = [
    { icon: <EmailIcon />, label: 'Email:', value: 'info@lasthash.com' },
    { icon: <PhoneIcon />, label: 'Phone:', value: '+1234567890' },
    { icon: <LocationOnIcon />, label: 'Address:', value: 'Your Company Address' }
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: theme.palette.mode === 'light' ? 'primary.main' : '#1A1A1A',
        color: '#ffffff',
        pt: 8,
        pb: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          opacity: theme.palette.mode === 'light' ? 0.9 : 0.1,
          zIndex: 0
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Logo />
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mt: 2
                }}
              >
                <Typography 
                  variant="h4" 
                  component="span"
                  sx={{ 
                    color: '#fff',
                    fontWeight: 'bold'
                  }}
                >
                  {years}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  Years of code baking 
                  <FavoriteIcon 
                    sx={{ 
                      color: '#dc3545', 
                      fontSize: 16,
                      animation: 'heartBeat 1.5s ease infinite',
                      '@keyframes heartBeat': {
                        '0%': {
                          transform: 'scale(1)',
                          opacity: 1
                        },
                        '15%': {
                          transform: 'scale(1.25)',
                          opacity: 0.8
                        },
                        '30%': {
                          transform: 'scale(1)',
                          opacity: 1
                        },
                        '45%': {
                          transform: 'scale(1.15)',
                          opacity: 0.9
                        },
                        '60%': {
                          transform: 'scale(1)',
                          opacity: 1
                        }
                      }
                    }} 
                  />
                </Typography>
              </Box>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.8)',
                mb: 3,
                lineHeight: 1.8
              }}
            >
              We are a modern software development company focused on delivering innovative solutions
              using cutting-edge technologies. Our mission is to transform businesses through digital excellence.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      color: '#fff',
                      transform: 'translateY(-3px)',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                color: '#fff',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  bgcolor: theme.palette.secondary.main
                }
              }}
            >
              Quick Links
            </Typography>
            <Box 
              display="grid" 
              gridTemplateColumns="1fr 1fr"
              gap={2}
              sx={{ mt: 4 }}
            >
              {['Services', 'Solutions', 'About Us', 'Contact', 'Portfolio', 'Careers', 'Blog', 'FAQ'].map((text, index) => (
                <Link 
                  key={index}
                  href={`/${text.toLowerCase().replace(' ', '-')}`} 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#fff',
                      transform: 'translateX(5px)'
                    },
                    '&::before': {
                      content: '"→"',
                      marginRight: 1,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:hover::before': {
                      opacity: 1
                    }
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                color: '#fff',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  bgcolor: theme.palette.secondary.main
                }
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ mt: 4 }}>
              {contactInfo.map((item, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 2.5,
                    '&:hover': {
                      transform: 'translateX(5px)'
                    },
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2,
                      color: theme.palette.secondary.main,
                      mt: 0.5
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ color: '#fff', mb: 0.5 }}
                    >
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            color: 'rgba(255,255,255,0.6)',
            '& a': {
              color: '#fff',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }
          }}
        >
          © {new Date().getFullYear()} Lasthash. All rights reserved. | 
          <Link href="/privacy-policy"> Privacy Policy</Link> |
          <Link href="/terms-of-service"> Terms of Service</Link>
        </Typography>

        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            mt: 3
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              py: 1,
              px: 2,
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              bgcolor: 'rgba(255,255,255,0.05)',
              gap: 1
            }}
          >
            <IndianFlagLogo />
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'monospace',
                letterSpacing: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
               PROUDLY MADE IN INDIA SINCE 2010
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopFooter;