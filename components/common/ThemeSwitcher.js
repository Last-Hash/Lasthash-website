import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { keyframes } from '@mui/system';

const ThemeSwitcher = ({ onToggle, isDark, isTransparent }) => {
  // Define animations
  const rotateAnimation = keyframes`
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(0.8);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  `;

  const pulseAnimation = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `;

  return (
    <Tooltip 
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      TransitionProps={{ timeout: 600 }}
    >
      <IconButton 
        onClick={onToggle} 
        sx={{
          transition: 'all 0.3s ease',
          bgcolor: 'transparent',
          borderRadius: '50%',
          p: 1,
          '&:hover': {
            bgcolor: isTransparent 
              ? 'rgba(255,255,255,0.1)'
              : isDark 
                ? 'rgba(255,255,255,0.1)' 
                : 'rgba(0,0,0,0.1)',
            transform: 'translateY(-2px)',
          },
          '& svg': {
            animation: `${pulseAnimation} 0.3s ease`,
            transition: 'all 0.3s ease',
            color: isTransparent ? '#fff' : 'primary.main',
            filter: isTransparent && isDark 
              ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
              : 'none',
          },
          '&:active svg': {
            animation: `${rotateAnimation} 0.5s ease`,
          },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '50%',
            border: '2px solid transparent',
            transition: 'all 0.3s ease',
          },
          '&:hover::after': {
            border: `2px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
            transform: 'scale(1.1)',
          }
        }}
      >
        {isDark ? (
          <Brightness7Icon 
            sx={{ 
              color: isTransparent ? '#fff' : 'primary.main',
              fontSize: '1.5rem',
              filter: isTransparent && isDark 
                ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                : 'drop-shadow(0 0 2px rgba(255,255,255,0.2))'
            }} 
          />
        ) : (
          <Brightness4Icon 
            sx={{ 
              color: isTransparent ? '#fff' : 'primary.main',
              fontSize: '1.5rem'
            }} 
          />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;