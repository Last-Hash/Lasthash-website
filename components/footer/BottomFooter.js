import { Box, Container, Typography, useTheme } from '@mui/material';

const BottomFooter = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      bgcolor: theme.palette.mode === 'light' ? 'primary.dark' : '#000',
      color: 'white', 
      py: 2,
      transition: 'background-color 0.3s ease' // Smooth transition for theme switch
    }}>
      <Container>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Lasthash. All rights reserved.
        </Typography>
      </Container> 
    </Box>
  );
};

export default BottomFooter;