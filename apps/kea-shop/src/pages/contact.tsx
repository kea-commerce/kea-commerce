import { useState } from "react";

const Contact = () => {

  const formData = {
    name: '',
    email: '',
    message: ''
  }

  const [formState, setFormState] = useState(formData)

  return (
  <div className="flex justify-center gap-10">
  <div className="text-2xl">Contact Us</div>

<div>
  <form className="flex flex-col">
    <label htmlFor='name'>Name</label>
    <input id='name' name='name' type='text' className="border"/>
  

    <label htmlFor='email'>Email</label>
    <input id='email' name='email' type='text' className="border" />
    

    <label htmlFor='name'>Message</label>
    <textarea id='name' name='name' className="border" />
    
    <button type="button" className="border rounded mt-2 mb-2">Submit</button>

  </form>
  </div>
  </div>
)
};

export default Contact;

