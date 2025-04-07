import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useState, useMemo } from 'react';
import TopHeader from '../header/TopHeader';
import MainHeader from '../header/MainHeader';
import BottomHeader from '../header/BottomHeader';
import TopFooter from '../footer/TopFooter';
import BottomFooter from '../footer/BottomFooter';

const MainLayout = ({ children }) => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
          },
          secondary: {
            main: '#9c27b0',
          },
          background: {
            default: mode === 'light' ? '#ffffff' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        components: {
          MuiContainer: {
            styleOverrides: {
              root: {
                '@media (min-width: 1200px)': {
                  maxWidth: '1200px',
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontSize: '1rem',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
                color: mode === 'light' ? '#000000' : '#ffffff',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box component="header">
          <TopHeader />
          <MainHeader onToggleTheme={toggleTheme} isDarkMode={mode === 'dark'} />
          <BottomHeader />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, py: { xs: 4, md: 6 } }}>
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