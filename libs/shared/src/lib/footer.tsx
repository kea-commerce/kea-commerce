import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

export default function Footer() {
  const iconClass = 'border rounded p-0.5 w-7 h-7';

  const footerLinks = [
    { title: 'About Us', url: '/about' },
    { title: 'Contact Us', url: '/contact' },
    { title: 'T&Cs', url: '/terms' },
    { title: 'Privacy Policy', url: '/privacy' },
  ];

  const footerIcons = [
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
  return (
    <div className="bg-lightYellow">
      <div className="flex justify-around min-h-5">
        <ul className="flex items-center justify-items-center p-1">
          {footerLinks.map((link) => (
            <Link to={link.url} key={link.title}>
              <li className="px-3 text-lg">{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex justify-around min-h-5">
        <ul className="flex items-center p-1">
          {footerIcons.map((icon) => (
            <Link to={icon.url} key={icon.label}>
              <li className="px-1">{icon.icon}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
