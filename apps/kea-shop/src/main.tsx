import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import routes from './app/routes';

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <StrictMode>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </PersistQueryClientProvider>
    </StrictMode>
  );
});
