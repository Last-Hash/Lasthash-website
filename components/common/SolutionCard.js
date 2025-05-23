import { Card, CardContent, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

const SolutionCard = ({ title, description, icon, link }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Link href={link} passHref legacyBehavior>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: isDark 
              ? '0 8px 24px rgba(0,0,0,0.4)' 
              : '0 8px 24px rgba(0,0,0,0.1)'
          }
        }}
      >
        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              color: 'primary.main'
            }}
          >
            {icon}
          </Box>
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: isDark ? 'common.white' : 'text.primary',
              fontWeight: 'bold'
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SolutionCard;