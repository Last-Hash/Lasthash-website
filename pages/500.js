import { Box, Container, Typography, Button, keyframes } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../components/layouts/MainLayout';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

// Make this page static
export const getStaticProps = () => {
  return {
    props: {}
  };
};

const Custom500 = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <MainLayout isTransparentHeader={false}>
      <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark 
              ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)'
              : 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%)',
            zIndex: 1
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '6rem', md: '8rem' },
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 2
                }}
              >
                500
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 700
                }}
              >
                Server Error
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mb: 4, maxWidth: '500px', mx: { xs: 'auto', md: 0 } }}
              >
                Oops! Something went wrong on our servers. We're working to fix the issue. Please try again later.
              </Typography>
              <Button
                component={Link}
                href="/"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 2,
                  px: 4
                }}
              >
                Back to Home
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                height: { xs: '200px', md: '400px' },
                width: '100%',
                animation: `${float} 6s ease-in-out infinite`
              }}
            >
              <Image
                src="/500-error.svg"
                alt="500 Error"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Custom500;