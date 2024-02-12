import {
  Provider as AppBridgeProvider,
  Loading,
} from '@shopify/app-bridge-react';
import { Card, AppProvider as PolarisProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import config from './configs';

declare const window: Window & { host?: string };
declare const location: Location;

const App = () => {
  const shopifyAppHost = new URL(location.href).searchParams.get('host') || '';
  const queryClient = new QueryClient();

  if (config.environment !== 'development') {
    window.host = shopifyAppHost;
  }

  const shopifyAppBridgeConfig = {
    apiKey: config.shopifyApiKey,
    host: config.environment !== 'development' ? shopifyAppHost : config.host,
    forceRedirect: config.environment !== 'development',
  };

  return (
    <PolarisProvider i18n={{}}>
      <AppBridgeProvider config={shopifyAppBridgeConfig}>
        <QueryClientProvider client={queryClient}>
          <Loading />
          <Card>
            <h1>Hello</h1>
          </Card>
        </QueryClientProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  );
};

export default App;
