import { Box, ThemeProvider, createTheme, CssBaseline, useScrollTrigger } from '@mui/material';
import { useState, useMemo, useEffect } from 'react';
import TopHeader from '../header/TopHeader';
import MainHeader from '../header/MainHeader';
import BottomHeader from '../header/BottomHeader';
import TopFooter from '../footer/TopFooter';
import BottomFooter from '../footer/BottomFooter';

const MainLayout = ({ children }) => {
  const [mode, setMode] = useState('light');
  const trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true
  });

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      // Optional: Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#00ADB5', // rgb(0, 173, 181)
            light: '#33BDC3',
            dark: '#007983',
          },
          secondary: {
            main: '#393E46', // rgb(57, 62, 70)
            light: '#4A515A',
            dark: '#2D3238',
          },
          background: {
            default: mode === 'light' ? '#EEEEEE' : '#222831', // rgb(238, 238, 238) : rgb(34, 40, 49)
            paper: mode === 'light' ? '#FFFFFF' : '#393E46',
          },
          text: {
            primary: mode === 'light' ? '#222831' : '#EEEEEE',
            secondary: mode === 'light' ? '#393E46' : '#00ADB5',
          },
          divider: mode === 'light' ? 'rgba(57, 62, 70, 0.12)' : 'rgba(238, 238, 238, 0.12)',
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#EEEEEE' : '#222831',
                color: mode === 'light' ? '#222831' : '#EEEEEE',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: mode === 'light' ? '#00ADB5' : '#007983',
                },
              },
              containedPrimary: {
                backgroundColor: '#00ADB5',
                color: '#EEEEEE',
                '&:hover': {
                  backgroundColor: '#007983',
                },
              },
              containedSecondary: {
                backgroundColor: '#393E46',
                color: '#EEEEEE',
                '&:hover': {
                  backgroundColor: '#2D3238',
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#FFFFFF' : '#393E46',
              },
            },
          },
          MuiContainer: {
            styleOverrides: {
              root: {
                '@media (min-width: 1200px)': {
                  maxWidth: '1200px',
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  const globalStyles = {
    '@keyframes float': {
      '0%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      },
      '100%': {
        transform: 'translateY(0px)'
      }
    },
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    '@keyframes gradientBG': {
      '0%': {
        backgroundPosition: '0% 50%'
      },
      '50%': {
        backgroundPosition: '100% 50%'
      },
      '100%': {
        backgroundPosition: '0% 50%'
      }
    }
  };

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      // Save to localStorage
      localStorage.setItem('theme-mode', newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={{ ...theme, ...globalStyles }}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box component="header" sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
          <Box sx={{ 
            height: trigger ? 0 : 'auto',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}>
            <TopHeader />
          </Box>
          <Box sx={{ 
            position: 'relative',
            backgroundColor: mode === 'light' ? '#EEEEEE' : '#222831',
            boxShadow: trigger ? 1 : 0,
            transition: 'all 0.3s ease'
          }}>
            <MainHeader onToggleTheme={toggleTheme} isDarkMode={mode === 'dark'} />
            <BottomHeader />
          </Box>
        </Box>
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            pb: { xs: 4, md: 6 }, // Changed from py to pb (padding-bottom only)
            mt: 0 
          }}
        >
          {children}
        </Box>
        <Box component="footer">
          <TopFooter />
          <BottomFooter />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;