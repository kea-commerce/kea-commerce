import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppShell } from './app/app-shell';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <AppShell />
  </StrictMode>
);
