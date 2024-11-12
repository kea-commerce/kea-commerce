import { Outlet } from 'react-router';

import { Footer } from '@kea-commerce/shared/footer';
import { Nav } from '@kea-commerce/shared/nav';

import NxWelcome from './nx-welcome';

export const App = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};
