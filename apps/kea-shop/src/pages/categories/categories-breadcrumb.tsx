import { RxSlash } from 'react-icons/rx';
import { Link } from 'react-router-dom';

type CategoriesBreadcrumbProps = Readonly<{
  collectionName: string | undefined;
}>;

export const CategoriesBreadcrumb = ({ collectionName }: CategoriesBreadcrumbProps) => {
  return (
    <div className='flex flex-row items-center px-5 md:px-5 text-lg md:text-xl xl:px-14 lg:text-2xl'>
      <Link className='hover:font-medium' to='/'>
        Home
      </Link>
      <RxSlash className='pt-1' />
      <Link className='hover:font-medium' to='/collections/shop'>
        Shop
      </Link>
      <RxSlash className='pt-1' />
      <h2 className='font-normal'>{collectionName}</h2>
    </div>
  );
};
