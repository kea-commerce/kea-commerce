import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type FooterIcon = {
  icon: JSX.Element;
  url: string;
  label: string;
};
export const FooterIcons = () => {
  const iconClass = 'border rounded p-0.5 w-7 h-7 md:w-10 md:h-10 2xl:p-1';
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
  return (
    <ul className='flex items-center p-1'>
      {footerIcons.map((icon) => (
        <Link aria-label={icon.label} key={icon.label} to={icon.url}>
          <li className='px-1 md:p-2 2xl:px-4.5'>{icon.icon}</li>
        </Link>
      ))}
    </ul>
  );
};
