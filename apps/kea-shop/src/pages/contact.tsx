import { Form } from '@kea-commerce/shared/form';

export const Contact = () => {

  return (
    <div>
      <div className="flex justify-center gap-10">
      <div className="text-2xl">Contact Us</div>
      <div className="bg-slate-50">
        <Form />
      </div>
      </div>
  </div>
)
}