import { ProductCard } from '@kea-commerce/shared/product';

import { useHomeData } from './lib';

export const HomePage = () => {
  const { isPending, isError, data, error } = useHomeData();

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
