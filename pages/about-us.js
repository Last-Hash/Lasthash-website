import { Box } from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
import AboutContent from '../components/about/AboutContent';
import SEO from '../components/common/SEO';

export default function AboutUs() {
  return (
    <>
      <SEO 
        title="About Lasthash - Our Story & Mission"
        description="Learn about Lasthash's journey, our mission, values and the expert team behind our innovative software solutions."
        keywords="about Lasthash, software company, tech company, development team, company history"
        canonical="/about-us"
      />
      <Box>
        <MainLayout isTransparentHeader={false}>
          <AboutContent />
        </MainLayout>
      </Box>
    </>
  );
}