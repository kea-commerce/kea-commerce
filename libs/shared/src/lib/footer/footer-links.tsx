import { Link } from 'react-router-dom';

import { type FooterLink } from './types';

type FooterLinkProps = Readonly<{
  links: FooterLink[];
}>

export const FooterLinks = ({ links }: FooterLinkProps) => {
  return (
    <ul className='flex items-center justify-items-center p-1'>
      {links.map((link) => (
        <Link key={link.title} to={link.link}>
          <li className='px-3 text-lg md:text-3xl md:px-6 2xl:px-12'>{link.title}</li>
        </Link>
      ))}
    </ul>
  );
};
