import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Hamburger = ({ isOpen, onClick }: HamburgerProps) => {
  return (
    <button aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={onClick} type='button'>
      {isOpen ? (
        <IoMdClose className='border-2 rounded p-0.5 min-w-10 min-h-10' />
      ) : (
        <RxHamburgerMenu className='min-w-10 min-h-12' />
      )}
    </button>
  );
};
