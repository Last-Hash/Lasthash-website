import { AppBar, Container, Box } from '@mui/material';
import Logo from '../common/Logo';
import ThemeSwitcher from '../common/ThemeSwitcher';

const MainHeader = ({ onToggleTheme, isDarkMode }) => {
  return (
    <AppBar position="static">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Logo />
          <ThemeSwitcher onToggle={onToggleTheme} isDark={isDarkMode} />
        </Box>
      </Container>
    </AppBar>
  );
};

export default MainHeader;