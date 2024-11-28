import { useParams } from 'react-router';

import { ProductCard } from '@kea-commerce/shared/product';

import { collections } from './lib/collections';
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
      <CategoriesBreadcrumb collectionName={collectionNames?.title} collectionType={collection} />

      <div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
        {collection === 'shop'
          ? allProducts?.data.map((product) => <ProductCard key={product.id} product={product} />)
          : filteredCategory?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};
