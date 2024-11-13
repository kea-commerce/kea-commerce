import { Link } from 'react-router-dom';

import { ProductCard } from '@kea-commerce/shared/product';

import { HomePageMetadata, useHomeData } from './lib';

export const HomePage = () => {
  const { isPending, isError, data, error } = useHomeData();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {data?.data.map((product) => (
        <Link key={product.id} to={`products/${product.name}/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}

      {data?.metadata ? <HomePageMetadata metadata={data.metadata} /> : undefined}
    </div>
  );
};
