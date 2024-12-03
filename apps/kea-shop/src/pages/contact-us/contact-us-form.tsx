import { type ChangeEvent, useCallback, useState } from 'react';

import { Button } from '@kea-commerce/shared/button';

import { postContactUs } from './lib/post-contact-us-data';
import { Label } from './label';
import type { ContactUsFormData, FormItems } from './types';

export const ContactUsForm = () => {
  const [formState, setFormState] = useState<ContactUsFormData>({
    id: '',
    name: '',
    email: '',
    message: '',
  });

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

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

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
