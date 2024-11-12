import { Outlet } from 'react-router';

import { Footer } from '@kea-commerce/shared/footer';
import { Nav } from '@kea-commerce/shared/nav';

export const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <div className='flex-grow'>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};
