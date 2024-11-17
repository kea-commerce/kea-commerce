import { type RouteObject } from 'react-router-dom';

import { About } from '../pages/about';
import { Cart } from '../pages/cart';
import { Categories } from '../pages/categories';
import { Checkout } from '../pages/checkout';
import { Contact } from '../pages/contact-us/contact';
import { HomePage } from '../pages/home';
import { Order } from '../pages/order';
import { Privacy } from '../pages/privacy';
import { Product } from '../pages/product';
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
        element: <About />,
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
        element: <Contact />,
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
        element: <Product />,
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
