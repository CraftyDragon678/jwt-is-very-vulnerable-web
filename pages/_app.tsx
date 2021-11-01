import type { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';
import { SWRConfig } from 'swr';
import fetchJson from '../utils/fetchJson';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: console.error,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          if (error.status === 404) return;
          if (key === '/users/me') return;
          if (retryCount >= 3) return;
          setTimeout(() => revalidate({ retryCount }), 5000);
        },
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />;
    </SWRConfig>
  );
}

export default MyApp;
