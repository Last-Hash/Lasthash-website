import { Box, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

const Logo = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1,
          '&:hover': {
            '& svg': {
              transform: 'scale(1.05)',
            },
            '& .logo-text': {
              color: 'primary.main'
            }
          }
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: 'transform 0.3s ease' }}
        >
          {/* Background Circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill={theme.palette.primary.main}
            filter="url(#glow)"
          />

          {/* L Shape */}
          <path
            d="M30 25V65H70"
            stroke={isDark ? '#222831' : '#fff'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,100"
              to="100,0"
              dur="1s"
              begin="0s"
              fill="freeze"
            />
          </path>

          {/* Hash Marks */}
          <path
            d="M40 40H60M40 50H60"
            stroke={isDark ? '#222831' : '#fff'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,50"
              to="50,0"
              dur="0.5s"
              begin="0.5s"
              fill="freeze"
            />
          </path>

          {/* Glow Effect */}
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur 
                stdDeviation="2" 
                result="glow"
              />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <Box 
          component="span" 
          className="logo-text"
          sx={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            letterSpacing: '0.1em',
            color: 'text.primary',
            transition: 'color 0.3s ease',
            display: { xs: 'none', sm: 'block' }
          }}
        >
          LASTHASH
        </Box>
      </Box>
    </Link>
  );
};

export default Logo;