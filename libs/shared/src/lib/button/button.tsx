import { type FormEvent } from 'react';

type ButtonProps = Readonly<{
  onClick: (event: FormEvent) => void;
  text: string;
  type: string;
}>;

export const Button = ({ onClick, text, type }: ButtonProps) => {
  return (
    <button className='border bg-keaGreen rounded-md m-auto mt-2 w-[40%] py-1' onClick={onClick} type={type}>
      {text}
    </button>
  );
};
