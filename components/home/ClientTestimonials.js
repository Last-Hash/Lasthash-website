import { Box, Container, Grid, Card, CardContent, Typography, Avatar, Rating } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'John Smith',
    position: 'CTO, TechCorp',
    image: 'https://picsum.photos/200?random=1',
    rating: 5,
    text: 'Lasthash delivered an exceptional software solution that transformed our business operations. Their team\'s expertise and professionalism exceeded our expectations.'
  },
  {
    name: 'Sarah Johnson',
    position: 'CEO, Innovation Labs',
    image: 'https://picsum.photos/200?random=2',
    rating: 5,
    text: 'Working with Lasthash was a game-changer for our startup. They helped us build a scalable platform that our customers love.'
  },
  {
    name: 'Michael Chen',
    position: 'Product Manager, GrowthTech',
    image: 'https://picsum.photos/200?random=3',
    rating: 5,
    text: 'The team at Lasthash consistently delivers high-quality solutions. Their technical expertise and attention to detail are outstanding.'
  }
];

const ClientTestimonials = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container>
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="What our clients say about us"
        />
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <CardContent>
                  <FormatQuoteIcon 
                    sx={{ 
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: 'primary.main',
                      opacity: 0.1,
                      fontSize: '3rem'
                    }}
                  />
                  <Box sx={{ mb: 3 }}>
                    <Rating value={testimonial.rating} readOnly />
                  </Box>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      mb: 4,
                      fontStyle: 'italic',
                      color: 'text.secondary'
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
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

export default ClientTestimonials;