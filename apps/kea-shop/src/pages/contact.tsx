<<<<<<< HEAD
import { type FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router";

const Contact = () => {

  const formData = {
    name: '',
    email: '',
    message: ''
  }

  const [formState, setFormState] = useState(formData)

  const navigate = useNavigate()

  const handleSubmit = useCallback(async (evt: FormEvent) => {
    await submitNewContactReq.mutate({formState})
    navigate('/contact-submitted')
  }, [formData])

  return (
  <div className="flex justify-center gap-10">
  <div className="text-2xl">Contact Us</div>

<div>
  <form className="flex flex-col">
    <label htmlFor='name'>Name</label>
    <input id='name' name='name' type='text' required className="border"/>
  

    <label htmlFor='email'>Email</label>
    <input id='email' name='email' type='text' required className="border" />
    

    <label htmlFor='name'>Message</label>
    <textarea id='name' name='name' required className="border" />
    
    <button onClick={handleSubmit} type="button" className="border rounded mt-2 mb-2">Submit</button>

  </form>
  </div>
  </div>
)
};

export default Contact;

=======
export const Contact = () => {
  return <div>Contact</div>;
};
>>>>>>> main
