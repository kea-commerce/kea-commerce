import { useCallback, useState } from 'react';
import { TfiMinus, TfiPlus } from 'react-icons/tfi';

type QuantityProps = Readonly<{
  stock: number;
}>;

export const Quantity = ({ stock }: QuantityProps) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const increaseQuantity = useCallback(() => {
    if (stock && productQuantity < stock) {
      setProductQuantity(productQuantity + 1);
    } else {
      // setProductQuantity(productQuantity + 1);
      // pop up msg re no stock
      <p>no stock</p>;
    }
  }, [productQuantity, stock]);

  const decreaseQuantity = useCallback(() => {
    if (productQuantity > 0) setProductQuantity(productQuantity - 1);
  }, [productQuantity]);

  return (
    <div className='flex justify-center items-center'>
      <button aria-label='decrease quantity of product' onClick={decreaseQuantity} type='button'>
        <TfiMinus />
      </button>
      <p className='border border-2 py-1 px-3 mx-4 md:min-w-12 md:max-w-12 min-w-9 max-w-9 bg-white flex justify-center'>
        {productQuantity}
      </p>
      <button aria-label='increase quantity of product' onClick={increaseQuantity} type='button'>
        <TfiPlus />
      </button>
    </div>
  );
};
