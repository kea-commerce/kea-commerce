import { isMobile } from 'react-device-detect';

import { LegalTermsContent } from './legal-terms-content';
import { LegalTermsNavbar } from './legal-terms-navbar';
import { TermsAndConditions } from './terms-and-conditions';

export const LegalTerms = () => {
  return (
    <div className='justify-items-center'>
      <div className='justify-items-center w-full text-3xl p-10'>
        <h1>{TermsAndConditions.title}</h1>
      </div>
      <div className='flex flex-row'>
        <div>{isMobile ? undefined : <LegalTermsNavbar terms={TermsAndConditions} />}</div>
        <div className='p-10 pt-0'>
          <LegalTermsContent content={TermsAndConditions} />
        </div>
      </div>
    </div>
  );
};
