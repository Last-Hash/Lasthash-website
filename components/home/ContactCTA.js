import { Box, Container, Typography, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useTheme } from '@mui/material/styles';

const ContactCTA = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: isDark
          ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #1a1a1a 100%)`
          : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h2"
          sx={{ 
            mb: 3,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Ready to Transform Your Business?
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 6,
            opacity: 0.9,
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          Let's discuss how our software solutions can help your business grow
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                p: 3,
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  bgcolor: 'rgba(255, 255, 255, 0.15)'
                }
              }}
            >
              <SupportAgentIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Schedule a Free Consultation
              </Typography>
              <Typography sx={{ mb: 3, opacity: 0.9 }}>
                Book a call with our experts to discuss your project
              </Typography>
              <Button 
                variant="contained"
                size="large"
                sx={{ 
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
                href="/contact"
              >
                Book a Call
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                p: 3,
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  bgcolor: 'rgba(255, 255, 255, 0.15)'
                }
              }}
            >
              <EmailIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Send Us a Message
              </Typography>
              <Typography sx={{ mb: 3, opacity: 0.9 }}>
                Get in touch with our team to discuss your requirements
              </Typography>
              <Button 
                variant="outlined"
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                href="/contact#message"
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactCTA;