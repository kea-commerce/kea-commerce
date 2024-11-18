import { useParams } from 'react-router';

import { ProductCard } from '@kea-commerce/shared/product';

import { useFilteredProductsData } from './lib/use-filtered-products';

export const FilteredProducts = () => {
  const { collection } = useParams<{ collection: string }>();

  const { isPending, isError, data, error } = useFilteredProductsData(collection);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
      {data?.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
