import { IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function Nav() {
  const iconClass = 'border-2 rounded desktop:p-0.5 desktop:w-12 desktop:h-12';

  return (
    <div className="bg-lightYellow flex">
      <img
        src="/mainLogo.png"
        alt="E-Kea Comm logo"
        className="desktop:max-w-52"
      />

      <Link to="/about">
        <p>Our Story</p>
      </Link>

      <Link to="/collections/:collection">
        <p>Shop</p>
      </Link>

      <Link to="/cart">
        <MdOutlineShoppingCart className={iconClass} />
      </Link>

      <Link to="/profile/:name">
        <MdOutlineAccountCircle className={iconClass} />
      </Link>

      <Link to="/search">
        <IoSearch className={iconClass} />
      </Link>
    </div>
  );
}

export default Nav;
