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
    <>
      <div className='flex items-center pb-3 md:p-0'>
        <Link key={links.title} to={links.url}>
          <li className='text-2xl pl-4 md:p-0'>{links.title}</li>
        </Link>
        {icons ? (
          <button aria-label={`${shopOpen ? 'Close' : 'Open'} shop menu`} onClick={toggleShop} type='button'>
            {shopOpen ? icons.iconUp : icons.iconDown}
          </button>
        ) : undefined}
      </div>

      {links.icon && shopOpen ? (
        <div className='md:absolute md:left-0 md:top-full md:z-50 md:w-max md:min-w-full'>
          <ShopDropdown />
        </div>
      ) : undefined}
    </>
  );
};

{
  /* <Link key={links.title} to={links.url}>
<div className='flex items-center pb-3 md:p-0'>
  <li className='text-2xl pl-4 md:p-0'>{links.title}</li> 
  </Link>
  {icons ? (
    <button aria-label={`${shopOpen ? 'Close' : 'Open'} shop menu`} onClick={toggleShop} type='button'>
      {shopOpen ? icons.iconUp : icons.iconDown}
    </button>
  ) : undefined}
</div>

{links.icon && shopOpen ? (
<div className='md:absolute md:left-0 md:top-full md:z-50 md:w-max md:min-w-full'>
  <ShopDropdown />
</div>
) : undefined}
</> */
}
