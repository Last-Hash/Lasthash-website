import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';

const Custom403 = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: isDark ? 'background.paper' : 'background.default'
      }}
    >
      <Container>
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
            <Box
              sx={{
                display: 'inline-flex',
                p: 2,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'white',
                mb: 3
              }}
            >
              <LockIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Access Denied
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 2, color: 'text.secondary' }}
            >
              403 - Forbidden
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '500px', mx: { xs: 'auto', md: 0 } }}
            >
              Sorry, but you don't have permission to access this area. Please make sure you're logged in with the right credentials.
            </Typography>
            <Button
              component={Link}
              href="/"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 2,
                px: 4,
                mr: 2
              }}
            >
              Go Home
            </Button>
            <Button
              component={Link}
              href="/login"
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 2,
                px: 4
              }}
            >
              Login
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              position: 'relative',
              height: { xs: '200px', md: '400px' },
              width: '100%'
            }}
          >
            <Image
              src="/403-security.svg"
              alt="Access Denied"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Custom403;