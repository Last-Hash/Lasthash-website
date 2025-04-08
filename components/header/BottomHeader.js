import { 
  AppBar, 
  Container, 
  Box, 
  Button, 
  Menu, 
  MenuItem, 
  Grid, 
  Typography, 
  ListItemIcon,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery // Move this here
} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
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
  Router as RouterIcon,
  ContactSupport as ContactSupportIcon,
  Payment as PaymentIcon,
  Article as ArticleIcon
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
  },
  support: {
    cols: 1,
    sections: {
      support: {
        title: 'Support & Resources',
        icon: <ContactSupportIcon />,
        description: 'Get help and stay updated',
        items: [
          {
            title: 'Contact Support',
            icon: <ContactSupportIcon />,
            description: 'Get in touch with our support team',
            link: '/support/contact'
          },
          {
            title: 'Make Payment',
            icon: <PaymentIcon />,
            description: 'Secure payment gateway for services',
            link: '/support/payment'
          },
          {
            title: 'Blog & News',
            icon: <ArticleIcon />,
            description: 'Latest updates and tech insights',
            link: '/blog'
          }
        ]
      }
    }
  }
};

const mobileMenuItems = [
  {
    text: 'Services',
    submenu: [
      'Web Development',
      'Mobile Development',
      'Cloud & DevOps',
      'View All Services'
    ],
    baseLink: '/services'
  },
  {
    text: 'Solutions',
    submenu: [
      'Enterprise Solutions',
      'AI & ML Solutions',
      'Blockchain',
      'IoT Solutions',
      'View All Solutions'
    ],
    baseLink: '/solutions'
  },
  {
    text: 'Support',
    submenu: [
      'Contact Support',
      'Make Payment',
      'Blog & News'
    ],
    baseLink: '/support'
  },
  { text: 'Portfolio', link: '/portfolio' },
  { text: 'About Us', link: '/about' }
];

const BottomHeader = ({ mobileMenuOpen, onMobileMenuClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);
  const [expandedMobile, setExpandedMobile] = useState('');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  const toggleExpanded = (menuKey) => {
    setExpandedItems(prev => 
      prev.includes(menuKey) 
        ? prev.filter(item => item !== menuKey)
        : [...prev, menuKey]
    );
  };

  const handleMobileExpand = (itemText) => {
    setExpandedMobile(expandedMobile === itemText ? '' : itemText);
  };

  const getMenuWidth = (menuType) => {
    const cols = menuItems[menuType]?.cols || 1;
    switch (cols) {
      case 1:
        return '400px'; // Single column width
      case 2:
        return '800px'; // Two columns width
      case 3:
        return '1200px'; // Three columns width (full width)
      default:
        return '1200px';
    }
  };

  const mainMenuItems = [
    { text: 'Services', hasSubmenu: true, menuKey: 'services' },
    { text: 'Solutions', hasSubmenu: true, menuKey: 'solutions' },
    { text: 'Support', hasSubmenu: true, menuKey: 'support' },
    { text: 'Portfolio', link: '/portfolio' },
    { text: 'About Us', link: '/about' }
  ];

  return (
    <>
      {/* Desktop Menu */}
      <AppBar 
        position="relative" 
        elevation={0}
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          backdropFilter: 'blur(8px)',
          backgroundColor: isDark 
            ? 'rgba(34, 40, 49, 0.95)'
            : 'rgba(238, 238, 238, 0.95)',
          transition: 'all 0.3s ease',
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Container>
          <Box 
            display={{ xs: 'none', md: 'flex' }}
            gap={2} 
            py={1}
            alignItems="center"
          >
            {mainMenuItems.map((item) => (
              item.hasSubmenu ? (
                <Button
                  key={item.text}
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={(e) => handleClick(e, item.menuKey)}
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
                  {item.text}
                </Button>
              ) : (
                <Button
                  key={item.text}
                  component={Link}
                  href={item.link}
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
                  {item.text}
                </Button>
              )
            ))}
          </Box>
        </Container>
      </AppBar>

      {/* Simplified Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={onMobileMenuClose}
        PaperProps={{
          sx: {
            width: '300px',
            bgcolor: 'background.paper'
          }
        }}
      >
        <List sx={{ pt: 2 }}>
          {mobileMenuItems.map((item) => (
            <Box key={item.text}>
              {item.submenu ? (
                <>
                  <ListItem 
                    onClick={() => handleMobileExpand(item.text)}
                    sx={{
                      cursor: 'pointer',
                      py: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: 600
                      }}
                    />
                    <KeyboardArrowDownIcon 
                      sx={{ 
                        transform: expandedMobile === item.text ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </ListItem>
                  <Box
                    sx={{
                      display: expandedMobile === item.text ? 'block' : 'none',
                      pb: 1,
                      bgcolor: 'action.hover'
                    }}
                  >
                    {item.submenu.map((subItem, index) => (
                      <ListItem 
                        key={index}
                        component={Link}
                        href={subItem === `View All ${item.text}` 
                          ? item.baseLink
                          : `${item.baseLink}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                        onClick={onMobileMenuClose}
                        sx={{
                          py: 1.5,
                          pl: 4,
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white'
                          }
                        }}
                      >
                        <ListItemText 
                          primary={subItem}
                          primaryTypographyProps={{
                            variant: 'body2'
                          }}
                        />
                      </ListItem>
                    ))}
                  </Box>
                </>
              ) : (
                <ListItem
                  component={Link}
                  href={item.link}
                  onClick={onMobileMenuClose}
                  sx={{
                    py: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 600
                    }}
                  />
                </ListItem>
              )}
            </Box>
          ))}
        </List>
      </Drawer>

      {/* Mega Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            width: currentMenu ? getMenuWidth(currentMenu) : '400px',
            maxWidth: '1200px',
            mt: 1.5,
            backgroundColor: isDark ? 'background.paper' : '#fff',
            '& .MuiMenu-list': {
              p: 3,
            },
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            '@media (max-width: 600px)': {
              width: '95vw',
              maxWidth: '95vw'
            }
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        {currentMenu && (
          <Grid container spacing={3}>
            {Object.entries(menuItems[currentMenu].sections).map(([key, section], index) => (
              <Grid item xs={12} md={12 / menuItems[currentMenu].cols} key={key}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <ListItemIcon sx={{ 
                      minWidth: 40,
                      color: isDark ? 'primary.light' : 'primary.main'
                    }}>
                      {section.icon}
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  {section.items.map((item, itemIndex) => (
                    <Grid item xs={12} key={itemIndex}>
                      <MenuItem 
                        component={Link}
                        href={item.link}
                        onClick={handleClose}
                        sx={{
                          borderRadius: 1,
                          p: 1.5,
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            '& .MuiTypography-root': { color: 'white' },
                            '& .MuiListItemIcon-root': { color: 'white' }
                          }
                        }}
                      >
                        <ListItemIcon sx={{ 
                          minWidth: 36,
                          color: isDark ? 'primary.light' : 'primary.main'
                        }}>
                          {item.icon}
                        </ListItemIcon>
                        <Box>
                          <Typography variant="subtitle2">
                            {item.title}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            sx={{ display: 'block' }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </MenuItem>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Menu>
    </>
  );
};

export default BottomHeader;