import { IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const iconClass = 'border-2 rounded p-0.5 w-12 h-12';

const navLinks = [
  { title: 'OUR STORY', url: '/about' },
  {
    title: 'SHOP',
    url: '/collections/:collection',
    icon: <FaChevronDown className="w-8" />,
  },
];

const iconList = [
  { icon: <IoSearch className={iconClass} />, url: '/search' },
  { icon: <MdOutlineShoppingCart className={iconClass} />, url: '/cart' },
  {
    icon: <MdOutlineAccountCircle className={iconClass} />,
    url: '/profile/:name',
  },
];

const logoItems = [
  {
    item: (
      <img src="/leafIcon.png" alt="E-Kea Comm logo" className="max-w-52 p-6" />
    ),
  },
  { item: <h1 className="text-6xl">E-Kea Comm</h1> },
];

export function Nav() {
  return (
    <nav className="bg-lightYellow flex items-center justify-between">
      <div>
        <Link to="/">
          <ul className="flex flex-row">
            {logoItems.map((logo, index) => (
              <li key={index} className="flex items-center">
                {logo.item}
              </li>
            ))}
          </ul>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex items-center gap-4">
          {navLinks.map((link, index) => (
            <Link to={link.url}>
              <div className="flex items-center">
                <li key={index} className="desktop:text-2xl">
                  {link.title}
                </li>
                {link.icon && <span>{link.icon}</span>}
              </div>
            </Link>
          ))}
        </ul>

        <ul className="flex items-center justify-between gap-4 pr-5">
          {iconList.map((icon, index) => (
            <Link to={icon.url}>
              <li key={index}>{icon.icon}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );

  //   return (
  //     <div className="bg-lightYellow flex items-center justify-between">
  //       <Link to="/">
  //         <div className="flex items-center">
  //           <img
  //             src="/leafIcon.png"
  //             alt="E-Kea Comm logo"
  //             className="desktop:max-w-52 desktop:p-6"
  //           />
  //           <h1 className="desktop:text-6xl">E-Kea Comm</h1>
  //         </div>
  //       </Link>
  //       <div className="flex items-center justify-between gap-4 pr-3">
  //         <Link to="/about">
  //           <p className="desktop:text-2xl">OUR STORY</p>
  //         </Link>

  //         <div className="flex items-center justify-between">
  //           <Link to="/collections/:collection">
  //             <p className="desktop:text-2xl">SHOP</p>
  //           </Link>
  //           <FaChevronDown className="desktop:w-8" />
  //         </div>

  //         <div className="flex items-center justify-between gap-2 pr-3">
  //           <Link to="/search">
  //             <IoSearch className={iconClass} />
  //           </Link>

  //           <Link to="/cart">
  //             <MdOutlineShoppingCart className={iconClass} />
  //           </Link>

  //           <Link to="/profile/:name">
  //             <MdOutlineAccountCircle className={iconClass} />
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default Nav;
