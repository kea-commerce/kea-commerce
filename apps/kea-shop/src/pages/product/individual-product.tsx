import { useParams } from 'react-router-dom';

import type { Product } from '@kea-commerce/shared/models';

import { useHomeData } from '../home/lib';

import { AddToCartButton } from './add-to-cart-button';
import { Quantity } from './quantity';

export const IndividualProduct = () => {
  const { data, isError, isPending, error } = useHomeData();
  const { name } = useParams();
  const product: Product | undefined = data?.data[1];

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='flex-row justify-items-center'>
      <div className='flex justify-center items-center my-4 justify-around'>
        <img
          alt={`product of ${name}`}
          className='border-2 border-slate-200 max-w-max rounded-2xl'
          src={product?.productImage}
        />
      </div>
      <div className='flex flex-col justify-around px-5'>
        <div className='px-5'>
          <h2 className='font-medium text-3xl pb-1'>{name}</h2>
          <p className='font-medium text-xl'>${product?.price}</p>
        </div>
        <div className='flex flex-row justify-around items-center pt-4'>
          Quantity:
          <Quantity stock={product?.stock} />
          <AddToCartButton />
        </div>
        <div className='p-5'>
          <h3 className='font-semibold'>Description</h3>
          {product?.description}
        </div>
      </div>
    </div>
  );
};
