import { useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router';

import { collections } from '@kea-commerce/shared/collections-types';
import { type Product } from '@kea-commerce/shared/models';
import { ProductCard } from '@kea-commerce/shared/product';

import { sortingMethods } from './lib/sorting-methods';
import { useAllProductsData } from './lib/use-all-products-data';
import { CategoriesBreadcrumb } from './categories-breadcrumb';

export const FilteredProducts = () => {
  const { collection } = useParams<{ collection: string }>();
  const { data: allProducts, isError, error, isPending } = useAllProductsData();

  const [sortMethod, setSortMethod] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleChangeFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedMethod = event.target.value;

      const sortFunction = sortingMethods[selectedMethod as keyof typeof sortingMethods];

      const productsToSort: Product[] =
        collection === 'shop'
          ? allProducts?.data || []
          : allProducts?.data.filter((product) => product.category === collection) || [];

      const sortedProducts = sortFunction ? sortFunction(productsToSort) : productsToSort;

      setSortMethod(selectedMethod);
      setFilteredProducts(sortedProducts);
    },
    [allProducts?.data, collection]
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
  const collectionNames = collections.find((collectionModel) => collectionModel.link === collection);

  return (
    <>
      <div className={isMobile ? 'sticky top-0 bg-white py-5 bg-opacity-90' : 'py-5'}>
        <CategoriesBreadcrumb collectionName={collectionNames?.title} />
      </div>
      <div>
        <label>
          Filter Products By:
          <select name='filterProductsBy' onChange={handleChangeFilter} value={sortMethod}>
            <option value='featured'>Featured</option>
            <option value='bestSelling'>Best Selling</option>
            <option value='highToLowPrice'>Price High to Low</option>
            <option value='lowToHighPrice'>Price Low to High</option>
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
