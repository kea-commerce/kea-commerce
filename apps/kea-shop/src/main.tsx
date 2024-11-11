import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { AppShell } from './app/app-shell';
import { routes } from './app/routes';

const router = createBrowserRouter(routes);

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <AppShell >
            <RouterProvider router={router} />
        <ReactQueryDevtools />

    </AppShell>
  </StrictMode>
);
