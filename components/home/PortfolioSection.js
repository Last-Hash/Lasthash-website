import { Box, Container, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import PortfolioGrid from '../shared/PortfolioGrid';

const PortfolioSection = ({ portfoliosData, isLoading, hasError }) => {
  // Early return for loading state
  if (isLoading) {
    return (
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Typography align="center">Loading projects...</Typography>
        </Container>
      </Box>
    );
  }

  // Early return for error state
  if (hasError) {
    return (
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Typography align="center" color="error">
            Error loading projects
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container>
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore our recent work and success stories"
        />
        <PortfolioGrid 
          portfolios={portfoliosData} // Remove .data since we're already passing the array
          limit={6}
        />
      </Container>
    </Box>
  );
};

export default PortfolioSection;