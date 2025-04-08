import { AppBar, Container, Box, IconButton, useMediaQuery, Button, Menu, MenuItem, Grid, Typography, ListItemIcon, Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from '../common/Logo';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Web as WebIcon, 
  Code as CodeIcon,
  Terminal as TerminalIcon,
  WebAsset as WebAssetIcon,
  ShoppingCart as ShoppingCartIcon,
  PhoneIphone as PhoneIphoneIcon,
  Apple as AppleIcon,
  Android as AndroidIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Business as BusinessIcon,
  Autorenew as AutorenewIcon,
  Update as UpdateIcon,
  Psychology as PsychologyIcon,
  Token as TokenIcon,
  Router as RouterIcon,
  ContactSupport as ContactSupportIcon,
  Payment as PaymentIcon,
  Article as ArticleIcon
} from '@mui/icons-material';

const MainHeader = ({ 
  onToggleTheme, 
  isDarkMode, 
  onToggleMobileMenu, 
  mobileMenuOpen, 
  isScrolled,
  isTransparent = false // New prop to control transparency
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('');
  const [expandedMobile, setExpandedMobile] = useState('');

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  const handleMobileExpand = (itemText) => {
    setExpandedMobile(expandedMobile === itemText ? '' : itemText);
  };

  const getMenuWidth = (menuType) => {
    const cols = menuItems[menuType]?.cols || 1;
    switch (cols) {
      case 3: return '1000px';
      case 2: return '800px';
      case 1: return '400px';
      default: return '400px';
    }
  };

  const mainMenuItems = [
    { text: 'Services', hasSubmenu: true, menuKey: 'services' },
    { text: 'Solutions', hasSubmenu: true, menuKey: 'solutions' },
    { text: 'Support', hasSubmenu: true, menuKey: 'support' },
    { text: 'Portfolio', link: '/portfolio' },
    { text: 'About Us', link: '/about' }
  ];

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

  return (
    <AppBar 
      position="relative" 
      elevation={isScrolled ? 1 : 0}
      sx={{
        backdropFilter: isTransparent && !isScrolled ? 'none' : 'blur(8px)',
        backgroundColor: isTransparent && !isScrolled 
          ? 'transparent'
          : isDark 
            ? 'rgba(34, 40, 49, 0.95)'
            : 'rgba(238, 238, 238, 0.95)',
        borderBottom: isTransparent && !isScrolled ? 'none' : '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
        py: isTransparent && !isScrolled ? 3 : 1,
        mt: isTransparent && !isScrolled ? 2 : 0,
      }}
    >
      <Container>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
        >
          <Logo isTransparent={isHomePage && !isScrolled} />
          
          <Box 
            display="flex" 
            alignItems="center" 
            sx={{ 
              ml: 'auto',
              gap: { xs: 1, md: 3 }
            }}
          >
            {!isMobile && (
              <Box display="flex" gap={2}>
                {mainMenuItems.map((item) => (
                  item.hasSubmenu ? (
                    <Button
                      key={item.text}
                      endIcon={<KeyboardArrowDownIcon />}
                      onClick={(e) => handleClick(e, item.menuKey)}
                      sx={{ 
                        color: isHomePage && !isScrolled ? '#fff' : 'text.primary',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          backgroundColor: isHomePage && !isScrolled
                            ? 'rgba(255,255,255,0.1)' 
                            : 'primary.main',
                          color: '#EEEEEE'
                        }
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
                        color: isHomePage && !isScrolled ? '#fff' : 'text.primary',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          backgroundColor: isHomePage && !isScrolled
                            ? 'rgba(255,255,255,0.1)' 
                            : 'primary.main',
                          color: '#EEEEEE'
                        }
                      }}
                    >
                      {item.text}
                    </Button>
                  )
                ))}
              </Box>
            )}

            <ThemeSwitcher 
              onToggle={onToggleTheme} 
              isDark={isDarkMode}
              isTransparent={isHomePage && !isScrolled}
            />
            
            {isMobile && (
              <IconButton
                onClick={onToggleMobileMenu}
                sx={{ 
                  color: isHomePage && !isScrolled ? '#fff' : 'text.primary'
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>

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
            maxWidth: '95vw',
            mt: 1.5,
            bgcolor: isDark ? 'background.paper' : '#fff',
            '& .MuiMenu-list': {
              p: 3,
            },
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            '@media (max-width: 1200px)': {
              width: '95vw',
              maxWidth: '95vw',
              left: '50%',
              transform: 'translateX(-50%)'
            }
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        sx={{
          '& .MuiMenu-paper': {
            overflow: 'visible',
            mt: 2,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              width: 10,
              height: 10,
              bgcolor: isDark ? 'background.paper' : '#fff',
              zIndex: 0,
            },
          }
        }}
      >
        {currentMenu && menuItems[currentMenu] && (
          <Grid container spacing={3}>
            {Object.entries(menuItems[currentMenu].sections).map(([key, section]) => (
              <Grid item xs={12} md={12 / menuItems[currentMenu].cols} key={key}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 1,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}>
                    <ListItemIcon sx={{ 
                      minWidth: 40,
                      color: 'inherit'
                    }}>
                      {section.icon}
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}>
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ pl: 5 }}
                  >
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
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'primary.main',
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
                            sx={{ 
                              display: 'block',
                              transition: 'all 0.2s ease'
                            }}
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

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={onToggleMobileMenu}
        PaperProps={{
          sx: {
            width: '300px',
            bgcolor: 'background.paper',
            backgroundImage: 'none'
          }
        }}
      >
        <List sx={{ pt: 2 }}>
          {mainMenuItems.map((item) => (
            <Box key={item.text}>
              {item.hasSubmenu ? (
                <>
                  <ListItem 
                    onClick={() => handleMobileExpand(item.text)}
                    sx={{
                      cursor: 'pointer',
                      py: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        bgcolor: 'action.hover'
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: 600
                      }}
                    />
                    {expandedMobile === item.text ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={expandedMobile === item.text}>
                    <List component="div" disablePadding>
                      {Object.entries(menuItems[item.menuKey].sections).map(([key, section]) => (
                        <Box key={key} sx={{ bgcolor: 'action.hover', py: 1 }}>
                          <ListItem sx={{ pl: 4 }}>
                            <ListItemText
                              primary={section.title}
                              primaryTypographyProps={{
                                fontWeight: 600,
                                color: 'primary.main'
                              }}
                            />
                          </ListItem>
                          {section.items.map((subItem, index) => (
                            <ListItem
                              key={index}
                              component={Link}
                              href={subItem.link}
                              onClick={onToggleMobileMenu}
                              sx={{
                                pl: 6,
                                py: 1,
                                '&:hover': {
                                  bgcolor: 'primary.main',
                                  color: 'white'
                                }
                              }}
                            >
                              <ListItemText 
                                primary={subItem.title}
                                primaryTypographyProps={{
                                  variant: 'body2'
                                }}
                              />
                            </ListItem>
                          ))}
                        </Box>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem
                  component={Link}
                  href={item.link}
                  onClick={onToggleMobileMenu}
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
    </AppBar>
  );
};

export default MainHeader;