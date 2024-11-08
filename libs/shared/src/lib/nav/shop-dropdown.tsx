import { Link } from 'react-router-dom';

const collections = [
  { title: 'Bath & Body', link: 'bath-body' },
  { title: 'Home', link: 'home' },
  { title: 'Kids & Baby', link: 'kids-baby' },
  { title: 'Kitchen', link: 'kitchen' },
  { title: 'Laundry & Cleaning', link: 'laundry-cleaning' },
  { title: 'Pets', link: 'pets' },
  { title: 'Shop All Products', link: 'shop' },
];

export const ShopDropdown = () => {
  return (
    <ul className="pl-7 pb-4 md:bg-lighterYellow md:absolute md:py-0.5 md:pr-5 md:pl-2 md:mt-2">
      {collections.map((category, index) => (
        <Link
          to={`collections/${category.link}`}
          aria-label={`shop for ${category.title}`}
          key={index}
        >
          <li >{category.title}</li>
        </Link>
      ))}
    </ul>
  );
};
