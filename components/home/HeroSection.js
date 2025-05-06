import { Box, Container, Typography, Button, Grid } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const isDark = true; // Example variable to determine dark mode

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.1;
        
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <Box sx={{ 
      position: 'relative',
      background: theme => isDark 
        ? `linear-gradient(-45deg, ${theme.palette.primary.dark}, #1a1a1a, #222831, #2d3436)`
        : `linear-gradient(-45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark}, #2193b0, #6dd5ed)`,
      backgroundSize: '400% 400%',
      animation: 'gradientBG 15s ease infinite',
      color: 'white',
      // Increase the top padding to create space for the transparent header
      pt: { xs: 22, md: 28 }, // Increased significantly to accommodate both headers
      pb: { xs: 8, md: 12 },
      overflow: 'hidden'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ 
            animation: 'fadeIn 1s ease-out',
          }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2
              }}
            >
              Building Scalable Software Solutions for Your Business Growth
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 4,
                fontWeight: 'normal',
                opacity: 0.9
              }}
            >
              Transform your ideas into powerful digital solutions with our expert development team
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                endIcon={<RocketLaunchIcon />}
                sx={{ 
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
                href="/contact-us-us"
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                href="/portfolios"
              >
                View Our Work
              </Button>
            </Box>
            <Box sx={{ mt: 4, display: 'flex', gap: 3, alignItems: 'center' }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>500+</Typography>
                <Typography variant="body2">Projects Delivered</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>50+</Typography>
                <Typography variant="body2">Expert Developers</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>98%</Typography>
                <Typography variant="body2">Client Satisfaction</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              position: 'relative',
              height: { xs: '300px', md: '500px' },
              animation: 'float 6s ease-in-out infinite',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '20px',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 80%)',
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '-3s'
              }
            }}>
              <Image
                src="/images/hero/home-hero.jpg"
                alt="Software Development"
                fill
                style={{ 
                  objectFit: 'contain',
                  borderRadius: '10px',
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;