import type { LegalTermsLayout } from './type';

type LegalTermsNavbarProps = {
  readonly terms: LegalTermsLayout;
};
export const LegalTermsNavbar = ({ terms }: LegalTermsNavbarProps) => {
  return (
    <div className='pl-2 sticky top-20'>
      {terms.sections.map((sections) => (
        <ul key={sections.information}>
          <a className='hover:text-lightGreen' href={`terms#${sections.heading}`}>
            <li className='py-3 font-semibold '>{`${sections.sectionNumber}. ${sections.heading}`}</li>
          </a>
        </ul>
      ))}
    </div>
  );
};
