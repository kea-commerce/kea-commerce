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
    <>
      {data?.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {data?.metadata ? <HomePageMetadata metadata={data.metadata} /> : undefined}
    </>
  );
};
