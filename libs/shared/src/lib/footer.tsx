import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const iconClass = 'border-2 rounded p-0.5 w-8 h-8';

  const footerLinks = [
    { title: 'About Us', url: '/about' },
    { title: 'Contact Us', url: '/contact' },
    { title: 'T&Cs', url: '/terms' },
    { title: 'Privacy Policy', url: '/privacy' },
  ];

  const footerIcons = [
    {
      icon: <FaSquareFacebook className={iconClass} />,
      url: '/about',
      label: 'facebook',
    },
    {
      icon: <FaSquareInstagram className={iconClass} />,
      url: '/about',
      label: 'instagram',
    },
    {
      icon: <FaSquareXTwitter className={iconClass} />,
      url: '/about',
      label: 'X',
    },
  ];
  return (
    <>
      <ul>
        {footerLinks.map((link, index) => (
          <Link to={link.url}>
            <li key={index}>{link.title}</li>
          </Link>
        ))}
      </ul>
      <ul>
        {footerIcons.map((icon, index) => (
          <Link to={icon.url}><li key=></li></Link>
        ))}
      </ul>
    </>
  );
};
