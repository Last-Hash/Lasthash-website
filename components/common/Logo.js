import { Typography } from '@mui/material';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="h5" component="h1" fontWeight="bold">
        Lasthash
      </Typography>
    </Link>
  );
};

export default Logo;