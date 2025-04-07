import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
    </Box>
  );
}