import { Auth0Provider } from '@auth0/auth0-react';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { type CustomWindow } from '@kea-commerce/shared/models';

declare const window: CustomWindow;

const queryClient = new QueryClient();

const persister = {
  persister: createSyncStoragePersister({
    storage: window.localStorage,
  }),
};

const authParams = { redirect_uri: globalThis.location.origin, audience: 'https://keacommerce/api' };

export const AppShell = () => {
  return (
    <>
      <Auth0Provider
        authorizationParams={authParams}
        clientId='oMrrnFgzFSoONc03BQNshhpVJ7TSbU8p'
        domain='kotare-2024-shae.au.auth0.com'
      />
      <PersistQueryClientProvider client={queryClient} persistOptions={persister} />
    </>
  );
};
