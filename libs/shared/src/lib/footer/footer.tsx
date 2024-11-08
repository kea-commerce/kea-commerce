import { FooterIcons } from './footer-icons';
import { FooterLinks } from './footer-links';
import { type FooterLink } from './types';

const footerLinks: FooterLink[] = [
  { title: 'About Us', link: '/about' },
  { title: 'Contact Us', link: '/contact' },
  { title: 'T&Cs', link: '/terms' },
  { title: 'Privacy Policy', link: '/privacy' },
];

export const Footer = () => {
  return (
    <footer className='bg-lightYellow md:flex md:flex-row md:justify-around md:py-4'>
      <div className='flex justify-around min-h-5 md:min-h-20'>
        <FooterLinks links={footerLinks} />
      </div>

      <div className='flex justify-around min-h-5'>
        <FooterIcons />
      </div>
    </footer>
  );
};
