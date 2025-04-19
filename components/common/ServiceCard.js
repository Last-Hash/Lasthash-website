import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServiceCard = ({ title, description, icon, link }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Link href={link} passHref legacyBehavior>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          background: isDark 
            ? 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: isDark 
              ? '0 8px 24px rgba(0,0,0,0.4)' 
              : '0 8px 24px rgba(0,0,0,0.1)',
            '& .service-icon': {
              transform: 'scale(1.1) rotate(5deg)',
              color: 'primary.main'
            },
            '& .arrow-icon': {
              transform: 'translateX(4px)',
              opacity: 1
            }
          }
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box
            className="service-icon"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              transition: 'all 0.3s ease',
              color: isDark ? 'primary.light' : 'primary.main',
              '& svg': {
                fontSize: '2.5rem'
              }
            }}
          >
            {icon}
          </Box>

          <Box>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                color: isDark ? 'common.white' : 'text.primary',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              {title}
              <ArrowForwardIcon 
                className="arrow-icon"
                sx={{ 
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  color: 'primary.main'
                }} 
              />
            </Typography>

            <Typography 
              variant="body2" 
              sx={{ 
                color: isDark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                minHeight: 60,
                lineHeight: 1.6
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;