type SubSection = {
  subSectionNumber: string;
  subHeading: string;
  subInformation: string;
};

type Section = {
  sectionNumber: number;
  heading: string;
  information: string;
  subSections?: SubSection[];
};

export type LegalTermsLayout = {
  title: string;
  sections: Section[];
};

export type TermsDropDown = {
  title: string;
  sections: {
    sectionNumber: number;
    heading: string;
    information: string;
    subSections?: {
      subSectionNumber: string;
      subHeading: string;
      subInformation: string;
    }[];
  }[];
};
