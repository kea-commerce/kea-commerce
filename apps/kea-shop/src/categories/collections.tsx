import { Link } from 'react-router-dom';

import type { Collection } from '@kea-commerce/shared/nav/types';

const collections: Collection[] = [
  { title: 'All Products', link: 'shop' },
  { title: 'Bath & Body', link: 'bath-body' },
  { title: 'Home', link: 'home' },
  { title: 'Kids & Baby', link: 'kids-baby' },
  { title: 'Kitchen', link: 'kitchen' },
  { title: 'Laundry & Cleaning', link: 'laundry-cleaning' },
  { title: 'Pets', link: 'pets' },
];

export const Collections = () => {
  return (
    <div className='px-4 pt-4 h-full w-fit md:text-2xl border border-slate-200'>
      <h2>COLLECTIONS</h2>
      <ul className='px-5 pt-1 pr-7 md:text-lg'>
        {collections.map((category) => (
          <li className='py-2 hover:text-xl active:font-medium' key={category.title}>
            <Link aria-label={`shop for ${category.title}`} key={category.title} to={`/collections/${category.link}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
