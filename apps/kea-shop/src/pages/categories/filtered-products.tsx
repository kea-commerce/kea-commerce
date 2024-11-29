import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { type Product } from '@kea-commerce/shared/models';
import { ProductCard } from '@kea-commerce/shared/product';

import { useAllProductsData } from './lib/use-all-products-data';

export const FilteredProducts = () => {
  const { collection } = useParams<{ collection: string }>();
  const { data: allProducts, isError, error, isPending } = useAllProductsData();

  const [sortMethod, setSortMethod] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleChangeFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedMethod = event.target.value;
      const sortingMethods = {
        alphabeticallyFromA: (products: Product[]) => [...products].sort((a, b) => a.name.localeCompare(b.name)),
        alphabeticallyFromZ: (products: Product[]) => [...products].sort((a, b) => b.name.localeCompare(a.name)),
        lowToHighPrice: (products: Product[]) => [...products].sort((a, b) => a.price - b.price),
        highToLowPrice: (products: Product[]) => [...products].sort((a, b) => b.price - a.price),
        featured: (products: Product[]) => [...products].sort((a, b) => b.stock - a.stock),
        bestSelling: (products: Product[]) => [...products].sort((a, b) => a.stock - b.stock),
      };

      const sortFunction = sortingMethods[selectedMethod];

      const productsToSort =
        collection === 'shop'
          ? allProducts?.data
          : allProducts?.data.filter((product) => product.category === collection);

      const sortedProducts = sortFunction ? sortFunction(productsToSort) : productsToSort;

      setFilteredProducts(sortedProducts);
    },
    [allProducts, collection]
  );

  useEffect(() => {
    if (allProducts?.data) {
      const initialProducts =
        collection === 'shop'
          ? allProducts?.data
          : allProducts?.data.filter((product) => product.category === collection);

      const featuredProducts = [...initialProducts].sort((a, b) => b.stock - a.stock);
      setFilteredProducts(featuredProducts);
    }
  }, [allProducts, collection]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div>
        <label>
          Filter Products By:
          <select name='filterProductsBy' onChange={handleChangeFilter} value={sortMethod}>
            <option value='featured'>Featured</option>
            <option value='bestSelling'>Best Selling</option>
            <option value='highToLowPrice'>By Price High to Low</option>
            <option value='lowToHighPrice'>By Price Low to High</option>
            <option value='alphabeticallyFromA'>Alphabetically from A-Z</option>
            <option value='alphabeticallyFromZ'>Alphabetically from Z-A</option>
          </select>
        </label>
      </div>
      <div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
