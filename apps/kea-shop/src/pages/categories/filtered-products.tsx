import { useParams } from 'react-router';

import { ProductCard } from '@kea-commerce/shared/product';

import { useAllProductsData } from './lib/use-all-products-data';
import { useFilteredProductsData } from './lib/use-filtered-products';

export const FilteredProducts = () => {
  const { collection } = useParams<{ collection: string }>();

  const { isPending, isError, data: filteredData, error } = useFilteredProductsData(collection);
  const { data: allProducts } = useAllProductsData();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const dataSet = collection === 'shop' ? allProducts : filteredData;

  return (
    <div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
      {dataSet?.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
