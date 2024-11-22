import type { LegalTermsLayout } from './type';

type LegalTermsNavbarProps = {
  readonly terms: LegalTermsLayout;
};
export const LegalTermsNavbar = ({ terms }: LegalTermsNavbarProps) => {
  return (
    <div className='pl-2'>
      {terms.sections.map((sections) => (
        <ul key={sections.information}>
          <li className='py-3 font-semibold '>{`${sections.sectionNumber}. ${sections.heading}`}</li>
        </ul>
      ))}
    </div>
  );
};
