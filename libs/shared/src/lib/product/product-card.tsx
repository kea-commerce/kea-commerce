import type { Product } from '../models';

type ProductCardProps = Readonly<{
  product: Product;
}>;

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='px-5 pt-5 pb-2'>
        <img
          alt={`Product of ${product.name}`}
          className='w-full h-auto border-2 border-slate-200 max-w-max rounded-2xl '
          src={product.productImage}
        />
      </div>
      <div className='text-center '>
        <h2 className='font-medium'>{product.name}</h2>
        <p className='font-bold'>{`$${product.price}`}</p>
      </div>
    </div>
  );
};
