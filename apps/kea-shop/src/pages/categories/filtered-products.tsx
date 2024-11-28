import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router';

import { collections } from '@kea-commerce/shared/collections-types';
import { ProductCard } from '@kea-commerce/shared/product';

import { useAllProductsData } from './lib/use-all-products-data';
import { CategoriesBreadcrumb } from './categories-breadcrumb';

export const FilteredProducts = () => {
  const { collection } = useParams<{ collection: string }>();

  const { data: allProducts, isError, error, isPending } = useAllProductsData();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const filteredCategory = allProducts.data.filter((product) => product.category === collection);
  const collectionNames = collections.find((collectionModel) => collectionModel.link === collection);

  return (
    <>
      <div className={isMobile ? 'sticky top-0 bg-white py-5 bg-opacity-90' : 'py-5'}>
        <CategoriesBreadcrumb collectionName={collectionNames?.title} />
      </div>

      <div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
        {collection === 'shop'
          ? allProducts?.data.map((product) => <ProductCard key={product.id} product={product} />)
          : filteredCategory?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};
