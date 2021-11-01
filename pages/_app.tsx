import type { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <GlobalStyle />
      <Component {...pageProps} />;
    </SWRConfig>
  );
}

export default MyApp;
