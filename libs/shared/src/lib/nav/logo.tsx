import { Link } from 'react-router-dom';

const shopTitle = 'E-Kea Comm';

export const Logo = () => {
  return (
    <Link to='/'>
      <div className='flex flex-row items-center'>
        <img alt='E-Kea Comm logo' className='max-w-20 p-2 md:max-w-[100px]' src='/leafIcon.png' />
        <h1 className='text-2xl md:text-4xl md:pl-1'>{shopTitle}</h1>
      </div>
    </Link>
  );
};
