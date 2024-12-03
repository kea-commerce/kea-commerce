type SubSection = {
  subHeading: string;
  subInformation: string;
};

type Section = {
  sectionNumber: number;
  heading: string;
  sectionInformation?: string;
  subSections?: SubSection[];
};

export type LegalTermsLayout = {
  effectiveDate?: string;
  title: string;
  sections: Section[];
};
