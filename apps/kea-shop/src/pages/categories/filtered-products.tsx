import { useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router';

import { collections } from '@kea-commerce/shared/collections-types';
import { type Product } from '@kea-commerce/shared/models';
import { ProductCard } from '@kea-commerce/shared/product';

import { CategoriesBreadcrumb } from './categories-breadcrumb';
import { sortingMethods } from './lib';

type FilteredProductsProps = Readonly<{
  products: Product[];
}>;

export const FilteredProducts = ({ products }: FilteredProductsProps) => {
  const [sortMethod, setSortMethod] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { collection } = useParams<{ collection: string }>();

  const collectionNames = collections.find((collectionModel) => collectionModel.link === collection);

  const handleChangeFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedMethod = event.target.value;

      const sortFunction = sortingMethods[selectedMethod as keyof typeof sortingMethods];

      const productsToSort: Product[] =
        collection === 'shop' ? products : products.filter((product) => product.category === collection);

      const sortedProducts = sortFunction ? sortFunction(productsToSort) : productsToSort;

      setSortMethod(selectedMethod);
      setFilteredProducts(sortedProducts);
    },
    [collection, products, setFilteredProducts]
  );

  useEffect(() => {
    if (products) {
      const initialProducts =
        collection === 'shop' ? products : products.filter((product) => product.category === collection);

      const featuredProducts = [...initialProducts].sort((a, b) => b.stock - a.stock);
      setFilteredProducts(featuredProducts);
    }
  }, [products, collection]);

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className={isMobile ? 'sticky top-0 bg-white py-3 bg-opacity-90' : 'py-5'}>
          <CategoriesBreadcrumb collectionName={collectionNames?.title} />
        </div>
        <div className={isMobile ? 'px-5 pb-3 text-lg' : 'text-xl'}>
          <label>
            Filter Products:
            <select className='border-2 ml-2' name='filterProductsBy' onChange={handleChangeFilter} value={sortMethod}>
              <option value='featured'>Featured</option>
              <option value='bestSelling'>Best Selling</option>
              <option value='highToLowPrice'>Price High to Low</option>
              <option value='lowToHighPrice'>Price Low to High</option>
              <option value='alphabeticallyFromA'>Alphabetically from A-Z</option>
              <option value='alphabeticallyFromZ'>Alphabetically from Z-A</option>
            </select>
          </label>
        </div>
      </div>

      <div className='grid grid-cols-1 justify-center gap-5 md:grid-cols-4'>
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
