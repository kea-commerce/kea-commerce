import { type RouteObject } from 'react-router-dom';

import { AboutPage } from '../pages/about';
import { Cart } from '../pages/cart';
import { Categories } from '../pages/categories';
import { Checkout } from '../pages/checkout';
import { ContactUsPage } from '../pages/contact-us';
import { HomePage } from '../pages/home';
import { Order } from '../pages/order';
import { Privacy } from '../pages/privacy';
import { ProductPage } from '../pages/product';
import { Search } from '../pages/search';
import { Terms } from '../pages/terms';
import { User } from '../pages/user';

import { App } from './app';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'collections/:collection',
        element: <Categories />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'contact',
        element: <ContactUsPage />,
      },
      {
        path: 'order/:id',
        element: <Order />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'products/:name/:id',
        element: <ProductPage />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'profile/:name',
        element: <User />,
      },
    ],
  },
];
