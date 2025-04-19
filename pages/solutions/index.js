import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainLayout from '../../components/layouts/MainLayout';
import SEO from '../../components/common/SEO';
import SolutionCard from '../../components/common/SolutionCard';
import { useServiceData } from '../../hooks/useServiceData';

export default function Solutions() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { services } = useServiceData();

  // Get solutions from the context
  const solutions = services.solutions.sections;

  return (
    <>
      <SEO 
        title="Solutions | Lasthash"
        description="Explore our innovative business solutions including digital transformation, AI/ML, blockchain, and more."
        keywords="digital transformation, enterprise solutions, AI ML solutions, blockchain, IoT solutions"
        canonical="/solutions"
      />

      <MainLayout>
        {/* Hero Section */}
        <Box 
          sx={{ 
            position: 'relative',
            py: { xs: 8, md: 12 },
            background: isDark 
              ? 'linear-gradient(135deg, #141e30 0%, #243b55 100%)'
              : 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                mb: 2 
              }}
            >
              Business Solutions
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9
              }}
            >
              Transform your business with our innovative technology solutions
            </Typography>
          </Container>
        </Box>

        {/* Solutions Grid */}
        <Container sx={{ py: { xs: 8, md: 12 } }}>
          {Object.entries(solutions).map(([key, section]) => (
            <Box key={key} sx={{ mb: 8 }}>
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    mb: 2,
                    color: isDark ? 'white' : 'text.primary'
                  }}
                >
                  {section.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                >
                  {section.description}
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {section.items.map((solution, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <SolutionCard
                      title={solution.title}
                      description={solution.description}
                      icon={solution.icon}
                      link={solution.link}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Container>
      </MainLayout>
    </>
  );
}