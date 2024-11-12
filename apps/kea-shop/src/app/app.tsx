import { Outlet } from 'react-router';

import { Footer } from '@kea-commerce/shared/footer';
import { Nav } from '@kea-commerce/shared/nav';

export const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
