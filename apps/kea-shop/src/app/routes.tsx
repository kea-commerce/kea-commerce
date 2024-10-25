import { createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './app';
import Home from '../pages/Home';
import About from '../pages/About';
import Categories from '../pages/Categories';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Order from '../pages/Order';
import Privacy from '../pages/Privacy';
import Product from '../pages/Product';
import Search from '../pages/Search';
import Terms from '../pages/Terms';
import User from '../pages/User';
import Checkout from '../pages/Checkout';

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
