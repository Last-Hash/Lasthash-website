import { AppBar, Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TopHeader = () => {
  const theme = useTheme();
  
  return (
    <AppBar 
      position="static" 
      color="primary"
      sx={{ 
        py: 0.5,
        bgcolor: theme.palette.mode === 'light' ? 'primary.main' : 'primary.dark'
      }}
    >
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
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