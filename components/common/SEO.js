import Head from 'next/head';

const SEO = ({ 
  title = 'Lasthash - Software Development Company',
  description = 'Lasthash is a leading software development company offering web, mobile, and cloud solutions for businesses of all sizes.',
  keywords = 'software development, web development, mobile apps, cloud solutions, digital transformation',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonical = '',
  children
}) => {
  const siteUrl = 'https://lasthash.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Lasthash" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Additional meta tags passed as children */}
      {children}
    </Head>
  );
};

export default SEO;