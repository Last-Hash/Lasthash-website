import SEO from '../components/common/SEO';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from '../src/theme';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    // Check system preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setMode(darkModeQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setMode(e.matches ? 'dark' : 'light');
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO /> {/* Default SEO tags */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;