import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { NavigateNext as NavigateNextIcon, Home as HomeIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';

export default function Breadcrumbs({ items, pageTitle }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Create schema markup for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `${process.env.NEXT_PUBLIC_SITE_URL}${item.href}` })
      }))
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: 'inherit', opacity: 0.7 }} />}
        aria-label="Navigation breadcrumbs"
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
        <Link 
          href="/" 
          style={{ display: 'flex', alignItems: 'center' }}
          title="Return to Homepage"
        >
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
                aria-current="page"
              >
                {item.label}
              </Typography>
            );
          }

          return (
            <Link 
              key={item.href || index} 
              href={item.href}
              title={`Go to ${item.label}`}
            >
              {item.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </>
  );
}