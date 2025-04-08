import { AppBar, Container, Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../common/Logo';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { useTheme } from '@mui/material/styles';

const MainHeader = ({ onToggleTheme, isDarkMode, onToggleMobileMenu }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar 
      position="relative" 
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: isDark 
          ? 'rgba(34, 40, 49, 0.95)'
          : 'rgba(238, 238, 238, 0.95)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          py={1.5}
        >
          <Logo />
          <Box display="flex" alignItems="center" gap={1}>
            <ThemeSwitcher onToggle={onToggleTheme} isDark={isDarkMode} />
            {isMobile && (
              <IconButton
                onClick={onToggleMobileMenu}
                sx={{ 
                  color: 'text.primary',
                  ml: 1
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default MainHeader;