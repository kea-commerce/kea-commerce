import { type IconType } from 'react-icons';

export type Products = {
  name: string;
  price: number;
  productImage: string;
};

export type AboutUs = {
  selfImage: string;
  name: string;
  role: string;
  linkedin: string;
  linkedinIcon: IconType;
  github: string;
  githubIcon: IconType;
  aboutMe: string;
};
