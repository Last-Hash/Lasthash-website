import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider, Paper } from '@mui/material';
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

const IndianFlagLogo = () => {
  // Pre-calculate the spoke points to avoid floating-point differences
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * Math.PI) / 12;
    // Round to 3 decimal places to ensure consistency
    const x2 = Math.round((12 + 1.8 * Math.cos(angle)) * 1000) / 1000;
    const y2 = Math.round((12 + 1.8 * Math.sin(angle)) * 1000) / 1000;
    return { x2, y2 };
  });

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="4" width="24" height="5.33333" fill="#FF9933"/>
      <rect y="9.33333" width="24" height="5.33333" fill="#FFFFFF"/>
      <rect y="14.6667" width="24" height="5.33333" fill="#138808"/>
      <circle cx="12" cy="12" r="2" fill="#000080"/>
      <g fill="#000080">
        {spokes.map((spoke, i) => (
          <line
            key={i}
            x1="12"
            y1="12"
            x2={spoke.x2}
            y2={spoke.y2}
            strokeWidth="0.5"
            stroke="#000080"
          />
        ))}
      </g>
    </svg>
  );
};

const TopFooter = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
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
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)`
          : `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: '#ffffff',
        pt: 8,
        pb: 4,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundImage: isDark
            ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
          zIndex: 1
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        {/* Company Info Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Logo />
            <Box sx={{ 
              mt: 2,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderLeft: '3px solid',
              borderColor: isDark ? theme.palette.primary.main : theme.palette.secondary.main,
              pl: 2,
              background: isDark ? 'rgba(255,255,255,0.03)' : 'transparent',
              borderRadius: '0 4px 4px 0',
              py: 1
            }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 'bold',
                color: isDark ? theme.palette.primary.main : '#fff'
              }}>
                {years}
              </Typography>
              <Typography sx={{ color: isDark ? 'rgba(255,255,255,0.9)' : '#fff' }}>
                Years of code baking 
                <FavoriteIcon 
                  sx={{ 
                    color: '#dc3545',
                    fontSize: 16,
                    ml: 1,
                    filter: isDark ? 'drop-shadow(0 0 2px rgba(220,53,69,0.5))' : 'none',
                    animation: 'heartBeat 1.5s ease infinite',
                    '@keyframes heartBeat': {
                      '0%': { transform: 'scale(1)', filter: 'brightness(1)' },
                      '50%': { transform: 'scale(1.2)', filter: 'brightness(1.3)' },
                      '100%': { transform: 'scale(1)', filter: 'brightness(1)' }
                    }
                  }}
                />
              </Typography>
            </Box>

            <Typography sx={{ 
              color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
              mb: 4,
              maxWidth: '90%'
            }}>
              We are a modern software development company focused on delivering innovative solutions
              using cutting-edge technologies.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index}
                  href={social.url}
                  target="_blank"
                  sx={{ 
                    color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
                    transition: 'all 0.3s ease',
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'transparent',
                    '&:hover': {
                      color: '#fff',
                      transform: 'translateY(-5px)',
                      background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3,
              fontWeight: 600,
              position: 'relative',
              color: isDark ? theme.palette.primary.main : '#fff',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 50,
                height: 3,
                background: isDark ? theme.palette.primary.main : theme.palette.secondary.main
              }
            }}>
              Quick Links
            </Typography>
            <Grid container spacing={2}>
              {['Services', 'Solutions', 'About Us', 'Contact', 'Portfolio', 'Careers', 'Blog', 'FAQ'].map((text, index) => (
                <Grid item xs={6} key={index}>
                  <Link 
                    href={`/${text.toLowerCase().replace(' ', '-')}`}
                    sx={{ 
                      color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#fff',
                        transform: 'translateX(8px)'
                      }
                    }}
                  >
                    → {text}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3,
              fontWeight: 600,
              position: 'relative',
              color: isDark ? theme.palette.primary.main : '#fff',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 50,
                height: 3,
                background: isDark ? theme.palette.primary.main : theme.palette.secondary.main
              }
            }}>
              Contact Us
            </Typography>
            {contactInfo.map((item, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 3,
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateX(8px)'
                  }
                }}
              >
                <Box sx={{ 
                  color: isDark ? theme.palette.primary.main : theme.palette.secondary.main 
                }}>
                  {item.icon}
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2" sx={{ 
                    opacity: isDark ? 0.7 : 0.8,
                    color: isDark ? theme.palette.primary.main : '#fff'
                  }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: isDark ? 'rgba(255,255,255,0.9)' : '#fff' }}>
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 4,
          borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)'
        }} />

        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography sx={{ 
            color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.6)' 
          }}>
            © {new Date().getFullYear()} Lasthash. All rights reserved.
          </Typography>

          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            background: isDark ? 'rgba(255,255,255,0.03)' : 'transparent',
            py: 1,
            px: 2,
            borderRadius: 2
          }}>
            <IndianFlagLogo />
            <Typography sx={{
              color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
              fontFamily: 'monospace',
              letterSpacing: 1
            }}>
              PROUDLY MADE IN INDIA - SINCE 2010
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopFooter;