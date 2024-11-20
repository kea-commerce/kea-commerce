import axios from 'axios';

import { type ContactUs } from '../../models';

export const postContactUs = async (formData: ContactUs): Promise<void> => {
  await axios.post<ContactUs>('http://localhost:3333/api/contact-us', formData);
};
