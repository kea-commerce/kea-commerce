import { useParams } from 'react-router-dom';

import { AddToCartButton } from './add-to-cart-button';
import { Quantity } from './quantity';
import { useProductData } from './use-product-data';

export const IndividualProduct = () => {
  const { id } = useParams<string>();
  const { data, isError, isPending, error } = useProductData(id);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='flex-row justify-items-center mt-16 md:mt-0 md:flex md:justify-center md:bg-lighterYellow md:mx-16 md:h-screen md:items-center'>
      <div className='flex justify-center items-center my-4 justify-around'>
        <img
          alt={`product of ${data.name}`}
          className='border-2 border-slate-200 max-w-max rounded-2xl md:min-w-96 md:m-4'
          src={data.productImage}
        />
      </div>
      <div className='flex flex-col justify-around px-5 md:justify-between md:min-h-96'>
        <div className='px-5'>
          <h2 className='font-medium text-3xl pb-1 md:text-6xl md:py-4'>{data.name}</h2>
          <p className='font-medium text-xl md:text-4xl'>${data.price}</p>
        </div>
        <div className='flex flex-row justify-around items-center pt-4 md:text-3xl'>
          Quantity:
          <Quantity stock={data.stock} />
          <AddToCartButton />
        </div>
        <div className='p-5 md:text-2xl'>
          <h3 className='font-semibold md:text-3xl'>Description</h3>
          {data.description}
        </div>
      </div>
    </div>
  );
};
