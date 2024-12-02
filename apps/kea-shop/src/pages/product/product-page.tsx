import { useParams } from 'react-router-dom';

import { collections } from '@kea-commerce/shared/collections-types';

import { useProductData } from './lib/use-product-data';
import { AddToCartButton } from './add-to-cart-button';
import { ProductBreadcrumb } from './product-breadcrumbs';
import { Quantity } from './quantity';

export const ProductPage = () => {
  const { id } = useParams<string>();
  const { data, isError, isPending, error } = useProductData(id);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const collectionBreadcrumb = collections.find((collection) => collection.title === data.category);

  return (
    <div className='md:bg-lighterYellow md:flex md:flex-row md:items-center md:justify-center'>
      <div className='flex flex-col justify-center p-4'>
        <div className='pl-2 pb-3 pr-5 md:flex md:justify-self-start md:py-3 md:text-xl'>
          <ProductBreadcrumb
            collectionLink={collectionBreadcrumb?.link}
            collectionName={data.category}
            productName={data.name}
          />
        </div>
        <div className='flex flex-col md:flex-row md:gap-8 md:items-center md:justify-center'>
          <div className='md:w-1/2 lg:w-2/5'>
            <img
              alt={`product of ${data.name}`}
              className='w-full border-2 border-slate-200 rounded-2xl md:w-96'
              src={data.productImage}
            />
          </div>
          <div className='flex flex-col md:w-1/2 lg:w-3/5 space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-medium text-3xl pt-6 md:pt-0 md:text-4xl lg:text-6xl'>{data.name}</h2>
              <p className='font-medium text-xl md:text-2xl lg:text-4xl'>${data.price}</p>
            </div>
            <div className='flex flex-row items-center gap-10 md:text-xl lg:text-2xl'>
              Quantity:
              <Quantity stock={data.stock} />
              <AddToCartButton />
            </div>
            <div className='space-y-2'>
              <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Description</h3>
              <p className='md:text-lg lg:text-xl'>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
