import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import SectionTitle from '../common/SectionTitle';

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with advanced features',
    image: 'https://picsum.photos/600/400?tech=1',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web Development'
  },
  {
    title: 'Healthcare App',
    description: 'Mobile application for healthcare management',
    image: 'https://picsum.photos/600/400?tech=2',
    tags: ['React Native', 'Firebase'],
    category: 'Mobile App'
  },
  {
    title: 'Cloud Migration',
    description: 'Enterprise system migration to AWS cloud',
    image: 'https://picsum.photos/600/400?tech=3',
    tags: ['AWS', 'DevOps', 'Docker'],
    category: 'Cloud Solutions'
  }
];

const PortfolioSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container>
        <SectionTitle 
          title="Our Latest Work" 
          subtitle="Explore our recent projects and success stories"
        />
        <Grid container spacing={4}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="overline" 
                    color="primary"
                    gutterBottom
                  >
                    {item.category}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    paragraph
                  >
                    {item.description}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {item.tags.map((tag, tagIndex) => (
                      <Chip 
                        key={tagIndex} 
                        label={tag} 
                        size="small"
                        sx={{ 
                          bgcolor: 'primary.main',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'primary.dark'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioSection;