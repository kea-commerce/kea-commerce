import { type ChangeEvent, type FormEvent, type InvalidEvent, useCallback, useState } from 'react';

type LabelProps = Readonly<{
  name: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}>;

export const Label = ({ name, type, value, placeholder, label, handleChange }: LabelProps) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleInvalid = useCallback((event: InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setIsInvalid(true);
  }, []);

  const handleInput = useCallback((event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsInvalid(false);
  }, []);

  return (
    <div className='flex flex-col my-2'>
      <label className='focus:border-slate-50' htmlFor={name}>
        {label}
      </label>
      {type === 'text' ? (
        <input
          className={`border ${
            isInvalid ? 'border-red-500' : 'border-lightGrey'
          }  focus:border-keaGreen focus:outline-none px-4 py-2 rounded-md`}
          id={name}
          name={name}
          onChange={handleChange}
          onInput={handleInput}
          onInvalid={handleInvalid}
          placeholder={value === '' ? placeholder : value}
          required
          type={type}
          value={value}
        />
      ) : (
        <textarea
          className={`border ${
            isInvalid ? 'border-red-500' : 'border-lightGrey'
          }  focus:border-keaGreen focus:outline-none px-4 py-2 rounded-md`}
          id={name}
          name={name}
          onChange={handleChange}
          onInput={handleInput}
          onInvalid={handleInvalid}
          placeholder={value === '' ? placeholder : value}
          required
          value={value}
        />
      )}
    </div>
  );
};
