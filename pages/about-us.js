import { Box } from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
import AboutContent from '../components/about/AboutContent';

export default function AboutUs() {
  return (
    <Box>
      <MainLayout isTransparentHeader={false}>
        <AboutContent />
      </MainLayout>
    </Box>
  );
}