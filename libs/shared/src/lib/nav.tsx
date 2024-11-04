import { IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export function Nav() {
  const iconClass = 'border-2 rounded desktop:p-0.5 desktop:w-12 desktop:h-12';

  return (
    <div className="bg-lightYellow flex items-center justify-between">
      <img
        src="/leafIcon.png"
        alt="E-Kea Comm logo"
        className="desktop:max-w-52 desktop:p-6"
      />
      <h1 className="desktop:text-5xl">E-Kea Comm</h1>
      <div className="flex items-center justify-between gap-4 pr-3">
        <Link to="/about">
          <p className="desktop:text-2xl">OUR STORY</p>
        </Link>

        <div className="flex items-center justify-between">
          <Link to="/collections/:collection">
            <p className="desktop:text-2xl">SHOP</p>
          </Link>
          <FaChevronDown className="desktop:w-8" />
        </div>

        <div className="flex items-center justify-between gap-2 pr-3">
          <Link to="/search">
            <IoSearch className={iconClass} />
          </Link>

          <Link to="/cart">
            <MdOutlineShoppingCart className={iconClass} />
          </Link>

          <Link to="/profile/:name">
            <MdOutlineAccountCircle className={iconClass} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
