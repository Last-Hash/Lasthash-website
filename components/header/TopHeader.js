import { AppBar, Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TopHeader = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <AppBar 
      position="static" 
      sx={{ 
        py: 0.5,
        bgcolor: isDark ? 'primary.dark' : 'primary.main',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
          sx={{
            '& .MuiTypography-root': {
              color: '#fff',
              opacity: isDark ? 0.9 : 1
            }
          }}
        >
          <Typography variant="body2">
            Contact: info@lasthash.com
          </Typography>
          <Typography variant="body2">
            Phone: +1234567890
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default TopHeader;