import { Box } from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
import AboutContent from '../components/about/AboutContent';

export default function About() {
  return (
    <Box>
      <MainLayout isTransparentHeader={false}>
        <AboutContent />
      </MainLayout>
    </Box>
  );
}