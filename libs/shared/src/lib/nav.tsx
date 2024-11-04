import { IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div className="bg-lightYellow flex">
      <img src="/mainLogo.png" alt="E-Kea Comm logo" className="" />

      <Link to="/about">
        <p>Our Story</p>
      </Link>

      <Link to="/collections/:collection">
        <p>Shop</p>
      </Link>

      <Link to="/cart">
        <MdOutlineShoppingCart />
      </Link>

      <Link to="/profile/:name">
        <MdOutlineAccountCircle />
      </Link>

      <Link to="/search">
        <IoSearch />
      </Link>
    </div>
  );
}

export default Nav;
