import { AppBar, Container, Box } from '@mui/material';
import Logo from '../common/Logo';
import ThemeSwitcher from '../common/ThemeSwitcher';

const MainHeader = ({ onToggleTheme, isDarkMode }) => {
  return (
    <AppBar 
      position="relative" 
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(238, 238, 238, 0.95)',
        borderBottom: '1px solid',
        borderColor: 'divider'
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
          <ThemeSwitcher onToggle={onToggleTheme} isDark={isDarkMode} />
        </Box>
      </Container>
    </AppBar>
  );
};

export default MainHeader;