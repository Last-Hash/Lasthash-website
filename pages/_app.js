import SEO from '../components/common/SEO';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO /> {/* Default SEO tags */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;