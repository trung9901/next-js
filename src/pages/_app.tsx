import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AppPropsWithLayout } from '../models/Layouts';
import { SWRConfig } from 'swr';
import instance from '../api/instance';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <Provider store={store}>
      <LayoutWrapper>
        <SWRConfig value={{ refreshInterval: 3000, fetcher: async (url) => await instance.get(url) }}>
          <Component {...pageProps} />
        </SWRConfig>
      </LayoutWrapper>
    </Provider>
  );
}

export default MyApp;
