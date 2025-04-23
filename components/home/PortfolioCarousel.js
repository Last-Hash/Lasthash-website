import { Box, Container, Card, CardContent, Typography, IconButton, Chip, Stack } from '@mui/material';
import { Navigation, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import SectionTitle from '../common/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const PortfolioCarousel = ({ portfolios }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  if (!portfolios?.length) {
    return null;
  } 

  return (
    <Box 
      sx={{ 
        position: 'relative',
        py: { xs: 6, md: 10 }, 
        bgcolor: 'transparent',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark 
            ? `linear-gradient(120deg, 
                ${theme.palette.grey[900]} 0%, 
                ${theme.palette.background.paper} 100%)`
            : `linear-gradient(120deg, 
                ${theme.palette.grey[50]} 0%, 
                #ffffff 50%,
                ${theme.palette.grey[100]} 100%)`,
          opacity: isDark ? 0.95 : 0.7,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: isDark ? 0.05 : 0.03,
          backgroundImage: `
            linear-gradient(45deg, ${isDark ? '#fff' : '#000'} 25%, transparent 25%), 
            linear-gradient(-45deg, ${isDark ? '#fff' : '#000'} 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, ${isDark ? '#fff' : '#000'} 75%), 
            linear-gradient(-45deg, transparent 75%, ${isDark ? '#fff' : '#000'} 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          zIndex: 0
        }
      }}
    >
      {/* Add a wrapper for content to appear above background effects */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section title in container */}
        <Container maxWidth="lg" sx={{ mb: 6 }}>
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Explore our recent work and success stories"
          />
        </Container>
        
        {/* Full-width carousel section */}
        <Box sx={{ 
          position: 'relative',
          '.swiper-slide': {
            height: 'auto', // Make all slides equal height
          }
        }}>
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={true}
            initialSlide={0}
            loop={true}
            loopFillGroupWithBlank={true}
            rewind={false}
            slideToClickedSlide={true}
            watchSlidesProgress={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            grabCursor={true}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 32,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 32,
                centeredSlides: true,
              },
            }}
            style={{ 
              padding: '40px 0',
            }}
          >
            {portfolios.map((portfolio) => (
              <SwiperSlide key={portfolio.id}>
                <Link href={`/portfolio/${portfolio.Slug}`} passHref style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      bgcolor: isDark ? 'background.paper' : 'white',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: isDark 
                        ? '0 4px 20px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme => `0 12px 28px ${
                          isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.15)'
                        }`,
                        '& .portfolio-image': {
                          transform: 'scale(1.05)'
                        }
                      }
                    }}
                  >
                    {/* Image Box - Fixed Height */}
                    <Box 
                      sx={{ 
                        position: 'relative',
                        height: { xs: 200, sm: 220, md: 240 }, // Fixed height
                        overflow: 'hidden',
                        backgroundColor: isDark ? 'grey.900' : 'grey.100'
                      }}
                    >
                      {portfolio.ThumbnailImage?.url && (
                        <Image
                          src={portfolio.ThumbnailImage.url}
                          alt={portfolio.Title || 'Portfolio item'}
                          fill
                          className="portfolio-image"
                          style={{ 
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                          }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </Box>

                    {/* Content Box - Fixed Heights for Elements */}
                    <CardContent 
                      sx={{ 
                        p: 3,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {/* Title - Fixed Height */}
                      <Box sx={{ height: 60, mb: 1 }}>
                        <Typography 
                          variant="h6"
                          sx={{ 
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.5
                          }}
                        >
                          {portfolio.Title || 'Untitled Project'}
                        </Typography>
                      </Box>

                      {/* Categories - Fixed Height */}
                      <Box sx={{ height: 32, mb: 1.5 }}>
                        {portfolio.portfolio_categories?.length > 0 && (
                          <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5}>
                            {portfolio.portfolio_categories.slice(0, 2).map((category) => (
                              <Chip
                                key={category.id}
                                label={category.title}
                                size="small"
                                color="primary"
                                sx={{
                                  bgcolor: isDark ? 'primary.dark' : 'primary.light',
                                  color: 'white',
                                  fontSize: '0.7rem', // Reduced font size
                                  height: 20, // Reduced height
                                  '& .MuiChip-label': {
                                    px: 1, // Reduced padding
                                    maxWidth: '120px', // Max width
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                  }
                                }}
                              />
                            ))}
                          </Stack>
                        )}
                      </Box>

                      {/* Technologies - Fixed Height */}
                      <Box sx={{ height: 32, mt: 'auto' }}>
                        {portfolio.technologies?.length > 0 && (
                          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                            {portfolio.technologies.slice(0, 3).map((tech) => (
                              <Chip
                                key={tech.id}
                                icon={tech.Icon?.url && (
                                  <Box 
                                    sx={{ 
                                      width: 16, 
                                      height: 16, 
                                      position: 'relative', 
                                      mr: 0.5,
                                      display: 'flex',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      src={tech.Icon.url}
                                      alt={tech.Name}
                                      fill
                                      style={{ objectFit: 'contain' }}
                                    />
                                  </Box>
                                )}
                                label={tech.Name}
                                size="small"
                                sx={{ 
                                  bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'grey.100',
                                  fontSize: '0.75rem',
                                  height: 24 // Fixed height for chips
                                }}
                              />
                            ))}
                          </Stack>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Improved navigation arrows */}
          <Box 
            className="swiper-button-prev"
            sx={{
              position: 'absolute',
              left: { xs: 4, md: 12 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 36, md: 44 },
              height: { xs: 36, md: 44 },
              borderRadius: '12px',
              bgcolor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              '&:hover': {
                transform: 'translateY(-50%) scale(1.05)',
                bgcolor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,1)',
              },
              '&::after': {
                display: 'none'
              },
              '@media (max-width: 640px)': {
                width: 32,
                height: 32
              }
            }}
          >
            <ArrowBackIcon sx={{ 
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: isDark ? 'white' : 'text.primary'
            }} />
          </Box>
          
          <Box 
            className="swiper-button-next"
            sx={{
              position: 'absolute',
              right: { xs: 4, md: 12 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 36, md: 44 },
              height: { xs: 36, md: 44 },
              borderRadius: '12px',
              bgcolor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              '&:hover': {
                transform: 'translateY(-50%) scale(1.05)',
                bgcolor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,1)',
              },
              '&::after': {
                display: 'none'
              },
              '@media (max-width: 640px)': {
                width: 32,
                height: 32
              }
            }}
          >
            <ArrowForwardIcon sx={{ 
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: isDark ? 'white' : 'text.primary'
            }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioCarousel;