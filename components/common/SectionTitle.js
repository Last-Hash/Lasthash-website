import { Box, Typography } from '@mui/material';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <Box sx={{ mb: 6, textAlign: align }}>
      <Typography variant="h2" component="h2" 
        sx={{ 
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
          mb: 2 
        }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" component="p" 
          sx={{ 
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;