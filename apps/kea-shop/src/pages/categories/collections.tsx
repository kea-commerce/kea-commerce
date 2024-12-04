import { Link, useLocation } from 'react-router-dom';

import { collections } from '@kea-commerce/shared/collections';

export const Collections = () => {
  const { pathname } = useLocation();
  const splitPathname = pathname.split('/');
  const activePath = splitPathname[2];

  return (
    <div className='px-4 pt-4 h-full w-fit md:text-2xl border border-slate-200'>
      <h2>COLLECTIONS</h2>
      <ul className='px-5 pt-1 pr-7 md:text-lg'>
        {collections.map((category) => {
          const isActive = activePath === category.link;
          return (
            <li
              className={`py-2 hover:text-xl active:font-bold active:text-2xl ${isActive ? 'text-xl font-medium' : ''}`}
              id={category.link}
              key={category.title}
            >
              <Link aria-label={`shop for ${category.title}`} to={`/collections/${category.link}`}>
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
