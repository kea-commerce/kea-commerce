import { ContactUsForm } from './contact-us-form';

export const ContactUsPage = () => {
  return (
    <div className='flex flex-col items-center mx-10 mt-8'>
      <div className='text-2xl'>Contact Us</div>
      <ContactUsForm />
    </div>
  );
};
