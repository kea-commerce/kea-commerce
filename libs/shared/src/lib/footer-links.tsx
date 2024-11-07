import { Link } from 'react-router-dom';

type FooterLink = {
  title: string;
  link: string;
};

interface Props {
  links: FooterLink[];
}

export const FooterLinks = ({ links }: Props) => {
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
