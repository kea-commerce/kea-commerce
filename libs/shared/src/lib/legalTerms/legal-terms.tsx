type LegalTerms = {
  title: string;
  sections: { sectionNumber: number; heading: string; information: string; subheading?: string }[];
};

const data: LegalTerms = {
  title: 'Terms and Conditions',
  sections: [
    { sectionNumber: 1, heading: 'Introduction', information: 'Welcome to our terms.' },
    { sectionNumber: 2, heading: 'User Responsibilities', information: 'You must follow the rules.' },
  ],
};
export const LegalTerms = () => {
  return <div>{data.title}</div>;
};
