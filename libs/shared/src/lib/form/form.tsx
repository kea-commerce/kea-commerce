import { type ChangeEvent, useCallback, useState } from 'react';

import { Button } from '../button/button';

import { postContactUs } from './lib/post-contact-us-data';
import { Label } from './label';
import { type FormItems } from './types';

export const Form = () => {
  const initialFormState = {
    id: '',
    name: '',
    email: '',
    message: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const formItems: FormItems[] = [
    { name: 'name', label: 'Name', type: 'text', value: formState.name, placeholder: `What's your full name?` },
    { name: 'email', label: 'Email', type: 'text', value: formState.email, placeholder: 'you@example.co.nz' },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      value: formState.message,
      placeholder: 'Write your message for the team here',
    },
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(async () => {
    await postContactUs(formState);
  }, [formState]);

  return (
    <form className='flex flex-col w-[100%] lg:max-w-[40%] 2xl:max-w-[20%]' onSubmit={handleSubmit}>
      {formItems.map((item) => (
        <Label
          handleChange={handleChange}
          key={item.name}
          label={item.label}
          name={item.name}
          placeholder={item.placeholder}
          type={item.type}
          value={item.value}
        />
      ))}
      <Button text='Submit' />
    </form>
  );
};
