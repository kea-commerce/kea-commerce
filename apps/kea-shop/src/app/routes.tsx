import { createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './app';
import Home from '../pages/home';
import About from '../pages/about';
import Categories from '../pages/categories';
import Cart from '../pages/cart';
import Contact from '../pages/contact';
import Order from '../pages/order';
import Privacy from '../pages/privacy';
import Product from '../pages/product';
import Search from '../pages/search';
import Terms from '../pages/terms';
import User from '../pages/user';
import Checkout from '../pages/checkout';

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/collections/:collection" element={<Categories />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/order/:id" element={<Order />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/products/:name/:id" element={<Product />} />
    <Route path="/search" element={<Search />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/profile/:name" element={<User />} />
  </Route>
);
