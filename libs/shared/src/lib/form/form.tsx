import { type FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../button/button';

import { Label } from './label';
import { type FormItems } from './types';

const formItems: FormItems[] = [
  { name: 'name', type: 'text' },
  { name: 'email', type: 'text' },
  { name: 'message', type: 'textarea' },
];

export const Form = () => {
  const formData = {
    name: '',
    email: '',
    message: '',
  };

  const [formState, setFormState] = useState(formData);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      await submitForm.mutate({ formState });
      navigate('/contact-submitted');
    },
    [formData]
  );

  const navigate = useNavigate();

  return (
    <form className='flex flex-col pr-24 pl-24 py-8'>
      {formItems.map((item) => (
        <Label key={item.name} name={item.name} type={item.type} />
      ))}
      <Button onClick={handleSubmit} text='Submit' />
    </form>
  );
};
