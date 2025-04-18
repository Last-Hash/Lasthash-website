import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ mb: 6, textAlign: align }}>
      <Typography 
        variant="h2" 
        component="h2" 
        sx={{ 
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
          mb: 2,
          color: isDark ? 'common.white' : 'text.primary'
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="h5" 
          component="p" 
          sx={{ 
            color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;