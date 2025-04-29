import { Box, Container } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import PortfolioGrid from './PortfolioGrid';
import Link from 'next/link';

const ProjectsGrid = ({ 
  portfolios = { data: [] }, 
  isLoading = false, 
  hasError = false,
  title = "Featured Projects",
  subtitle = "Explore our recent work and success stories",
  limit,
  baseUrl = '/portfolio'
}) => {
  // Filter out portfolios without slugs and map to include proper URLs
  const portfoliosWithSlugs = portfolios.data
    .filter(portfolio => portfolio.Slug) // Only include items with valid slugs
    .map(portfolio => ({
      ...portfolio,
      href: `${baseUrl}/${portfolio.Slug}` // Create proper Next.js href
    }));

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container>
        <SectionTitle 
          title={title} 
          subtitle={subtitle}
        />
        <PortfolioGrid 
          portfolios={portfoliosWithSlugs}
          limit={limit}
          LinkComponent={Link}
        />
      </Container>
    </Box>
  );
};

export default ProjectsGrid;