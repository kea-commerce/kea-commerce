import axios from 'axios';

import { type ContactUsFormData } from '../types';

export const postContactUs = async (formData: ContactUsFormData): Promise<void> => {
  await axios.post<ContactUsFormData>('http://localhost:3333/api/contact-us', formData);
};
