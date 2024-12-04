import { type FC } from 'react';
import { isMobile } from 'react-device-detect';

import { collections } from '@kea-commerce/shared/collections-types';
import { ProductCard } from '@kea-commerce/shared/product';

import { CategoriesBreadcrumb } from './categories-breadcrumb';
import { useCollectionData } from './lib';

type CollectionProps = Readonly<{
  collection?: string;
}>;

export const Collection: FC<CollectionProps> = ({ collection = 'all' }) => {
  const { data: products, isError, error, isPending } = useCollectionData(collection);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isPending || !products) {
    return <span>Loading...</span>;
  }

  const collectionNames = collections.find((collectionModel) => collectionModel.link === collection);

  return (
    <>
      <div className={isMobile ? 'sticky top-0 bg-white py-5 bg-opacity-90' : 'py-5'}>
        <CategoriesBreadcrumb collectionName={collectionNames?.title} />
      </div>

      <div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
