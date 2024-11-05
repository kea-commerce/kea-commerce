import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export const Hamburger = ({ isOpen, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <IoMdClose className="border-2 rounded p-0.5 min-w-10 min-h-10" />
      ) : (
        <RxHamburgerMenu className="min-w-10 min-h-12" />
      )}
    </button>
  );
};
