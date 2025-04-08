import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import BuildIcon from '@mui/icons-material/Build';

const Custom500 = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
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
                bgcolor: 'warning.main',
                color: 'white',
                mb: 3
              }}
            >
              <BuildIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Server Error
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 2, color: 'text.secondary' }}
            >
              500 - Something went wrong
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '500px', mx: { xs: 'auto', md: 0 } }}
            >
              Our servers are taking a coffee break. Don't worry, we've sent our best engineers to wake them up. Please try again in a moment.
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
              width: '100%'
            }}
          >
            <Image
              src="/500-robot.svg"
              alt="Server Error"
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

export default Custom500;