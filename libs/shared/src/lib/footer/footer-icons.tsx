import { Link } from 'react-router-dom';

import { type FooterIcon } from './types';

type FooterIconProp = Readonly<{
  icon: FooterIcon[];
}>;
export const FooterIcons = ({ icon }: FooterIconProp) => {
  return (
    <ul className='flex items-center p-1'>
      {icon.map((icon) => (
        <Link aria-label={icon.label} key={icon.label} to={icon.url}>
          <li className='px-1 md:p-2 2xl:px-4.5'>{icon.icon}</li>
        </Link>
      ))}
    </ul>
  );
};
