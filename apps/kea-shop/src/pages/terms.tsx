import { LegalTerms } from '@kea-commerce/shared/legalTerms/index';
import { TermsAndConditions } from '@kea-commerce/shared/legalTerms/terms-and-conditions';

export const Terms = () => {
  return <LegalTerms content={TermsAndConditions} />;
};
