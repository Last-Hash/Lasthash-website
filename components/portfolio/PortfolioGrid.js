import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PortfolioGrid = ({ portfolios, isDark }) => {
  if (!portfolios?.length) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6">No portfolios found</Typography>
      </Box>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container spacing={4}>
        {portfolios.map((portfolio) => (
          <Grid item xs={12} md={6} key={portfolio.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: isDark ? 'background.paper' : 'white',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.shadows[8]
                  }
                }}
              >
                {portfolio.ThumbnailImage?.data?.attributes?.url && (
                  <Box sx={{ position: 'relative', pt: '56.25%' }}>
                    <Image
                      src={portfolio.ThumbnailImage.data.attributes.url}
                      alt={portfolio.Title || 'Portfolio Project'}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 600px) 100vw, 50vw"
                    />
                  </Box>
                )}
                
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom
                    sx={{ 
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      fontWeight: 600 
                    }}
                  >
                    {portfolio.Title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {portfolio.ShortDescription}
                  </Typography>
                  
                  <Link 
                    href={`/portfolio/${portfolio.slug}`} 
                    passHref 
                    style={{ textDecoration: 'none' }}
                  >
                    <Button 
                      variant="contained" 
                      color="primary"
                      fullWidth
                      sx={{
                        mt: 'auto',
                        textTransform: 'none',
                        fontWeight: 500
                      }}
                    >
                      View Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default PortfolioGrid;