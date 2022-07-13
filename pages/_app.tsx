import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AppPropsWithLayout } from '../models/Layouts';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
