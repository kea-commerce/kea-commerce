import { useLocation } from 'react-router';

import type { LegalTermsLayout } from './type';

type LegalTermsNavbarProps = Readonly<{
  navbarContent: LegalTermsLayout;
}>;

export const LegalTermsNavbar = ({ navbarContent }: LegalTermsNavbarProps) => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  return (
    <div className='pl-2 sticky top-20'>
      {navbarContent.sections.map((navbar) => (
        <ul key={navbar.information}>
          <a className='hover:text-lightGreen' href={`${path}#${navbar.heading}`}>
            <li className='py-3 font-semibold '>{`${navbar.sectionNumber}. ${navbar.heading}`}</li>
          </a>
        </ul>
      ))}
    </div>
  );
};
