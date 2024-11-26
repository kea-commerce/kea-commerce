export type LegalTermsLayout = {
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
