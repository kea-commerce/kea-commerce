import { RxSlash } from 'react-icons/rx';
import { Link } from 'react-router-dom';

type ProductBreadcrumbProps = Readonly<{
  collectionLink: string | undefined;
  productName: string;
  collectionName: string | undefined;
}>;

export const ProductBreadcrumb = ({ collectionName, collectionLink, productName }: ProductBreadcrumbProps) => {
  return (
    <div className='text-lg flex flex-row items-center md:gap-2 md:text-xl'>
      <Link className='hover:font-medium' to='/collections/shop'>
        Shop
      </Link>
      <RxSlash className='pt-1' />
      <Link className='hover:font-medium' to={`/collections/${collectionLink}`}>
        {collectionName}
      </Link>
      <RxSlash className='pt-1' />
      <h2 className='font-normal'>{productName}</h2>
    </div>
  );
};
