import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { NavigateNext as NavigateNextIcon, Home as HomeIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

export default function Breadcrumbs({ items }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" sx={{ color: 'inherit', opacity: 0.7 }} />}
      sx={{ 
        mb: 4,
        color: 'inherit',
        '& .MuiBreadcrumbs-li a': {
          color: 'inherit',
          opacity: 0.7,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          transition: 'opacity 0.2s',
          '&:hover': {
            opacity: 1
          }
        }
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        if (isLast) {
          return (
            <Typography 
              key={item.href || index}
              sx={{ 
                color: 'inherit',
                opacity: 1
              }}
            >
              {item.label}
            </Typography>
          );
        }

        return (
          <Link 
            key={item.href || index} 
            href={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}