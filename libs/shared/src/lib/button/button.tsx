type ButtonProps = Readonly<{
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}>;

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className='border bg-keaGreen rounded-md m-auto mt-2 w-[40%] py-1' onClick={onClick} type='submit'>
      {text}
    </button>
  );
};
