import { Box, Container, Grid, Typography, Link, useTheme } from '@mui/material';

const TopFooter = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      bgcolor: theme.palette.mode === 'light' ? 'primary.main' : '#1A1A1A',
      color: '#ffffff',
      py: 6,
      transition: 'background-color 0.3s ease',
      borderBottom: 1,
      borderColor: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'
    }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              About Lasthash
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              We are a modern software development company focused on delivering innovative solutions
              using cutting-edge technologies.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {['Services', 'Solutions', 'About Us', 'Contact'].map((text, index) => (
                <Link 
                  key={index}
                  href={`/${text.toLowerCase().replace(' ', '-')}`} 
                  color="inherit" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#fff',
                      pl: 0.5
                    }
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              Contact Info
            </Typography>
            {[
              { label: 'Email:', value: 'info@lasthash.com' },
              { label: 'Phone:', value: '+1234567890' },
              { label: 'Address:', value: 'Your Company Address' }
            ].map((item, index) => (
              <Typography 
                key={index}
                variant="body2" 
                gutterBottom
                sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  mb: 1
                }}
              >
                <Box component="span" sx={{ color: '#fff' }}>{item.label}</Box> {item.value}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopFooter;