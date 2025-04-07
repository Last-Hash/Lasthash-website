import { AppBar, Container, Box, Button, Menu, MenuItem, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

const menuItems = {
  services: {
    webDev: {
      title: 'Web Development',
      items: [
        { title: 'Frontend Development', link: '/services/frontend-development' },
        { title: 'Backend Development', link: '/services/backend-development' },
        { title: 'Full Stack Development', link: '/services/fullstack-development' },
        { title: 'E-commerce Solutions', link: '/services/ecommerce' }
      ]
    },
    mobileDev: {
      title: 'Mobile Development',
      items: [
        { title: 'iOS Development', link: '/services/ios-development' },
        { title: 'Android Development', link: '/services/android-development' },
        { title: 'React Native', link: '/services/react-native' },
        { title: 'Flutter Development', link: '/services/flutter' }
      ]
    },
    cloudServices: {
      title: 'Cloud & DevOps',
      items: [
        { title: 'AWS Solutions', link: '/services/aws' },
        { title: 'Azure Services', link: '/services/azure' },
        { title: 'DevOps Implementation', link: '/services/devops' },
        { title: 'Cloud Migration', link: '/services/cloud-migration' }
      ]
    }
  },
  solutions: {
    enterprise: {
      title: 'Enterprise Solutions',
      items: [
        { title: 'Digital Transformation', link: '/solutions/digital-transformation' },
        { title: 'Enterprise Software', link: '/solutions/enterprise-software' },
        { title: 'Legacy Modernization', link: '/solutions/legacy-modernization' }
      ]
    },
    startup: {
      title: 'Startup Solutions',
      items: [
        { title: 'MVP Development', link: '/solutions/mvp-development' },
        { title: 'Startup Consulting', link: '/solutions/startup-consulting' },
        { title: 'Scale-up Solutions', link: '/solutions/scale-up' }
      ]
    },
    specialized: {
      title: 'Specialized Solutions',
      items: [
        { title: 'AI & ML Solutions', link: '/solutions/ai-ml' },
        { title: 'Blockchain', link: '/solutions/blockchain' },
        { title: 'IoT Solutions', link: '/solutions/iot' }
      ]
    }
  }
};

const BottomHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('');

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  return (
    <AppBar position="static" color="default" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container>
        <Box 
          display="flex" 
          gap={2} 
          py={1}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'center' }
          }}
        >
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            onClick={(e) => handleClick(e, 'services')}
            sx={{ textAlign: 'left' }}
          >
            Services
          </Button>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            onClick={(e) => handleClick(e, 'solutions')}
            sx={{ textAlign: 'left' }}
          >
            Solutions
          </Button>
          <Button sx={{ textAlign: 'left' }}>About Us</Button>
          <Button sx={{ textAlign: 'left' }}>Contact</Button>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '800px',
              mt: 1.5,
              '& .MuiMenu-list': {
                p: 2,
              },
            },
          }}
        >
          {currentMenu && (
            <Grid container spacing={2}>
              {Object.values(menuItems[currentMenu]).map((category, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {category.title}
                  </Typography>
                  {category.items.map((item, itemIndex) => (
                    <MenuItem 
                      key={itemIndex} 
                      onClick={handleClose}
                      component={Link}
                      href={item.link}
                      sx={{ 
                        py: 0.5,
                        '&:hover': {
                          backgroundColor: 'primary.light',
                          color: 'primary.contrastText',
                        }
                      }}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Grid>
              ))}
            </Grid>
          )}
        </Menu>
      </Container>
    </AppBar>
  );
};

export default BottomHeader;