import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import type { CustomWindow } from '@kea-commerce/shared/models';

import { routes } from './app/routes';

declare const window: CustomWindow;

const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const router = createBrowserRouter(routes);

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <Auth0Provider
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://keacommerce/api',
      }}
      clientId='oMrrnFgzFSoONc03BQNshhpVJ7TSbU8p'
      domain='kotare-2024-shae.au.auth0.com'
    >
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </PersistQueryClientProvider>
    </Auth0Provider>
  </StrictMode>
);
