import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

import { FooterIcons } from './footer-icons';
import { FooterLinks } from './footer-links';
import type { FooterIcon, FooterLink } from './types';

const iconClass = 'border rounded p-0.5 w-7 h-7 md:w-10 md:h-10 2xl:p-1';

const footerLinks: FooterLink[] = [
  { title: 'About Us', link: '/about' },
  { title: 'Contact Us', link: '/contact' },
  { title: 'T&Cs', link: '/terms' },
  { title: 'Privacy Policy', link: '/privacy' },
];

const footerIcons: FooterIcon[] = [
  {
    icon: <FaFacebookF className={iconClass} />,
    url: '/about',
    label: 'facebook',
  },
  {
    icon: <FaInstagram className={iconClass} />,
    url: '/about',
    label: 'instagram',
  },
  {
    icon: <FaXTwitter className={iconClass} />,
    url: '/about',
    label: 'X',
  },
];

export const Footer = () => {
  return (
    <footer className='bg-lightYellow md:flex md:flex-row md:justify-around md:py-4'>
      <div className='flex justify-around min-h-5 md:min-h-20'>
        <FooterLinks links={footerLinks} />
      </div>

      <div className='flex justify-around min-h-5'>
        <FooterIcons icon={footerIcons} />
      </div>
    </footer>
  );
};
