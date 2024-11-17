import type { ChangeEvent } from 'react';

type LabelProps = Readonly<{
  name: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}>;

//add something that when required fielld not filled it will outlien that red and have error message for the user e.g. please enter your name

export const Label = ({ name, type, value, placeholder, label, handleChange }: LabelProps) => {
  return (
    <div className='flex flex-col my-2'>
      <label className='focus:border-slate-50' htmlFor={name}>
        {label}
      </label>
      {type === 'text' ? (
        <input
          className='border border-lightGrey focus:border-keaGreen focus:outline-none px-4 py-2 rounded-md'
          id={name}
          name={name}
          onChange={handleChange}
          placeholder={value === '' ? placeholder : value}
          required
          type={type}
          value={value}
        />
      ) : (
        <textarea
          className='border border-lightGrey focus:border-keaGreen focus:outline-none px-4 py-2 rounded-md'
          id={name}
          name={name}
          onChange={handleChange}
          placeholder={value === '' ? placeholder : value}
          required
          value={value}
        />
      )}
    </div>
  );
};
