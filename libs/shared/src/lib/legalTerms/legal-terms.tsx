import { isMobile } from 'react-device-detect';

import { LegalTermsContent } from './legal-terms-content';
import { LegalTermsNavbar } from './legal-terms-navbar';
import { type LegalTermsLayout } from './type';

type LegalTermsContentProps = Readonly<{
  content: LegalTermsLayout;
}>;

export const LegalTerms = ({ content }: LegalTermsContentProps) => (
  <div className='justify-items-center'>
    <div className='justify-items-center w-full text-3xl p-10'>
      <h1>{content.title}</h1>
    </div>
    <div className='flex flex-row'>
      <div className='md:px-10 max-w-sm'>{isMobile ? undefined : <LegalTermsNavbar navbarContent={content} />}</div>
      <div className='px-8 md:p-10 md:pt-0 pb-10 md:max-w-5xl'>
        <LegalTermsContent content={content} />
      </div>
    </div>
  </div>
);
