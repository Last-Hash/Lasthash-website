import { AppBar, Container, Box, Button, Menu, MenuItem, Grid, Typography, ListItemIcon } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
// Corrected icons import
import {
  Web as WebIcon,
  Code as CodeIcon,
  ShoppingCart as ShoppingCartIcon,
  Terminal as TerminalIcon,
  PhoneIphone as PhoneIphoneIcon,
  Android as AndroidIcon,
  Apple as AppleIcon,
  WebAsset as WebAssetIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
  Business as BusinessIcon,
  Autorenew as AutorenewIcon,
  Update as UpdateIcon,
  RocketLaunch as RocketLaunchIcon,
  TipsAndUpdates as TipsAndUpdatesIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
  Token as TokenIcon,
  Router as RouterIcon
} from '@mui/icons-material';

const menuItems = {
  services: {
    cols: 3,
    sections: {
      webDev: {
        title: 'Web Development',
        icon: <WebIcon />,
        description: 'Modern web solutions for your business',
        items: [
          { 
            title: 'Frontend Development',
            icon: <CodeIcon />,
            description: 'Responsive and interactive user interfaces',
            link: '/services/frontend-development'
          },
          { 
            title: 'Backend Development',
            icon: <TerminalIcon />,
            description: 'Scalable server-side solutions',
            link: '/services/backend-development'
          },
          { 
            title: 'Full Stack Development',
            icon: <WebAssetIcon />,
            description: 'End-to-end web applications',
            link: '/services/fullstack-development'
          },
          { 
            title: 'E-commerce Solutions',
            icon: <ShoppingCartIcon />,
            description: 'Custom online store development',
            link: '/services/ecommerce'
          }
        ]
      },
      mobileDev: {
        title: 'Mobile Development',
        icon: <PhoneIphoneIcon />,
        description: 'Native and cross-platform apps',
        items: [
          { 
            title: 'iOS Development',
            icon: <AppleIcon />,
            description: 'Native iOS applications',
            link: '/services/ios-development'
          },
          { 
            title: 'Android Development',
            icon: <AndroidIcon />,
            description: 'Native Android applications',
            link: '/services/android-development'
          }
        ]
      },
      cloudServices: {
        title: 'Cloud & DevOps',
        icon: <CloudIcon />,
        description: 'Cloud infrastructure solutions',
        items: [
          { 
            title: 'AWS Solutions',
            icon: <StorageIcon />,
            description: 'Amazon Web Services integration',
            link: '/services/aws'
          },
          { 
            title: 'DevOps Implementation',
            icon: <BuildIcon />,
            description: 'Streamline your development pipeline',
            link: '/services/devops'
          }
        ]
      }
    }
  },
  solutions: {
    cols: 2,
    sections: {
      enterprise: {
        title: 'Enterprise Solutions',
        icon: <BusinessIcon />,
        description: 'Enterprise-grade digital solutions',
        items: [
          { 
            title: 'Digital Transformation',
            icon: <AutorenewIcon />,
            description: 'Modernize your business processes',
            link: '/solutions/digital-transformation'
          },
          { 
            title: 'Legacy Modernization',
            icon: <UpdateIcon />,
            description: 'Update legacy systems',
            link: '/solutions/legacy-modernization'
          }
        ]
      },
      specialized: {
        title: 'Specialized Solutions',
        icon: <PsychologyIcon />,
        description: 'Cutting-edge technology solutions',
        items: [
          { 
            title: 'AI & ML Solutions',
            icon: <PsychologyIcon />,
            description: 'Intelligent automation solutions',
            link: '/solutions/ai-ml'
          },
          { 
            title: 'Blockchain',
            icon: <TokenIcon />,
            description: 'Decentralized applications',
            link: '/solutions/blockchain'
          },
          { 
            title: 'IoT Solutions',
            icon: <RouterIcon />,
            description: 'Connected device ecosystems',
            link: '/solutions/iot'
          }
        ]
      }
    }
  }
};

const BottomHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('');
  const mode = 'light'; // Example mode, replace with actual mode logic

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  return (
    <AppBar 
      position="relative" 
      elevation={0}
      sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        backdropFilter: 'blur(8px)',
        backgroundColor: mode === 'light' ? 'rgba(238, 238, 238, 0.95)' : 'rgba(34, 40, 49, 0.95)'
      }}
    >
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
            sx={{ 
              textAlign: 'left',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: '#EEEEEE',
                '& .MuiSvgIcon-root': {
                  color: '#EEEEEE'
                }
              },
              transition: 'all 0.3s ease'
            }}
          >
            Services
          </Button>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            onClick={(e) => handleClick(e, 'solutions')}
            sx={{ 
              textAlign: 'left',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: '#EEEEEE',
                '& .MuiSvgIcon-root': {
                  color: '#EEEEEE'
                }
              },
              transition: 'all 0.3s ease'
            }}
          >
            Solutions
          </Button>
          <Button 
            sx={{ 
              textAlign: 'left',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: '#EEEEEE'
              },
              transition: 'all 0.3s ease'
            }}
          >
            About Us
          </Button>
          <Button 
            sx={{ 
              textAlign: 'left',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: '#EEEEEE'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Contact
          </Button>
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
              maxWidth: '1200px',
              mt: 1.5,
              '& .MuiMenu-list': {
                p: 3,
              },
            },
          }}
        >
          {currentMenu && (
            <Grid container spacing={3}>
              {Object.entries(menuItems[currentMenu].sections).map(([key, section], index) => (
                <Grid item xs={12} md={12 / menuItems[currentMenu].cols} key={key}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        {section.icon}
                      </ListItemIcon>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {section.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                      {section.description}
                    </Typography>
                  </Box>
                  {section.items.map((item, itemIndex) => (
                    <MenuItem 
                      key={itemIndex} 
                      onClick={handleClose}
                      component={Link}
                      href={item.link}
                      sx={{ 
                        py: 1.5,
                        px: 2,
                        borderRadius: 1,
                        mb: 1,
                        '&:hover': {
                          backgroundColor: 'primary.light',
                          '& .MuiTypography-root': { color: 'white' },
                          '& .MuiListItemIcon-root': { color: 'white' }
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        {item.icon}
                      </ListItemIcon>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                          {item.description}
                        </Typography>
                      </Box>
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