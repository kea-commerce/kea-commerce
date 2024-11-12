import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { type CustomWindow } from '@kea-commerce/shared/models';

import { routes } from './routes';

declare const window: CustomWindow;

const router = createBrowserRouter(routes);

const queryClient = new QueryClient();

const persister = {
  persister: createSyncStoragePersister({
    storage: window.localStorage,
  }),
};

const authParams = {
  redirect_uri: window.location.origin,
  audience: 'https://keacommerce/api',
};

export const AppShell = () => (
  <PersistQueryClientProvider client={queryClient} persistOptions={persister}>
    <Auth0Provider
      authorizationParams={authParams}
      clientId='oMrrnFgzFSoONc03BQNshhpVJ7TSbU8p'
      domain='kotare-2024-shae.au.auth0.com'
    >
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </Auth0Provider>
  </PersistQueryClientProvider>
);
