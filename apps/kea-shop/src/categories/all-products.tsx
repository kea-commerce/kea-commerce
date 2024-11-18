import { ProductCard } from '@kea-commerce/shared/product';

import { useProductsData } from './lib';

export const AllProducts = () => {
  const { isPending, isError, data, error } = useProductsData();

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
