import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { ShopDropdown } from './shop-dropdown';
import type { NavLinkIcon, NavLinkItem } from './types';

type NavLinkProps = Readonly<{
  links: NavLinkItem;
  icons?: NavLinkIcon;
}>;

export const NavLink = ({ links, icons }: NavLinkProps) => {
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = useCallback(() => {
    setShopOpen(!shopOpen);
  }, [shopOpen]);

  return (
    <Link key={links.title} to={links.url}>
      <div className='flex items-center pb-3 md:p-0'>
        <li className='text-2xl pl-4 md:p-0'>{links.title}</li>
        {icons ? (
          <button aria-label={`${shopOpen ? 'Close' : 'Open'} shop menu`} onClick={toggleShop} type='button'>
            {shopOpen ? icons.iconUp : icons.iconDown}
          </button>
        ) : undefined}
      </div>
      {links.icon && shopOpen ? <ShopDropdown /> : undefined}
    </Link>
  );
};
