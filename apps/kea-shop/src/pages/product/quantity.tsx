import { useCallback, useState } from 'react';
import { TfiMinus, TfiPlus } from 'react-icons/tfi';

type QuantityProps = Readonly<{
  stock: number;
}>;

export const Quantity = ({ stock }: QuantityProps) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const increaseQuantity = useCallback(() => {
    if (stock && productQuantity < stock) setProductQuantity(productQuantity + 1);
  }, [productQuantity, stock]);

  const decreaseQuantity = useCallback(() => {
    if (productQuantity > 0) setProductQuantity(productQuantity - 1);
  }, [productQuantity]);

  const noStock = <p className='text-base text-center md:text-xl'>Sold Out</p>;

  return (
    <div className='flex justify-center items-center'>
      <button aria-label='decrease quantity of product' onClick={decreaseQuantity} type='button'>
        <TfiMinus />
      </button>
      <div className='border-2 py-1 px-3 mx-4 md:min-w-14 md:max-w-14 min-w-10 max-w-10 bg-white flex justify-center'>
        {stock === 0 ? noStock : productQuantity}
      </div>
      <button aria-label='increase quantity of product' onClick={increaseQuantity} type='button'>
        <TfiPlus />
      </button>
    </div>
  );
};
