import type { LegalTermsLayout } from './type';

export const PrivacyAndPolicy: LegalTermsLayout = {
  title: 'Privacy & Policy',
  sections: [
    {
      sectionNumber: 1,
      heading: 'Introduction',
      information: 'Overview of privacy practices and policies.',
      subSections: [
        { subSectionNumber: '1.1', subHeading: 'Purpose', subInformation: 'Explains the purpose of this policy.' },
        {
          subSectionNumber: '1.2',
          subHeading: 'Definitions',
          subInformation: 'Key terms used in the privacy policy.',
        },
        { subSectionNumber: '1.3', subHeading: 'Scope', subInformation: 'Applicability of the privacy policy.' },
        { subSectionNumber: '1.4', subHeading: 'Consent', subInformation: 'How users provide consent to this policy.' },
      ],
    },
    {
      sectionNumber: 2,
      heading: 'Data Collection',
      information: 'Details of data collection practices.',
      subSections: [
        {
          subSectionNumber: '2.1',
          subHeading: 'Types of Data',
          subInformation: 'What types of data are collected from users.',
        },
        {
          subSectionNumber: '2.2',
          subHeading: 'Collection Methods',
          subInformation: 'How data is collected, including online forms and cookies.',
        },
        {
          subSectionNumber: '2.3',
          subHeading: 'Third-Party Sources',
          subInformation: 'Data obtained from external sources.',
        },
      ],
    },
    {
      sectionNumber: 3,
      heading: 'Data Usage',
      information: 'How collected data is used.',
      subSections: [
        {
          subSectionNumber: '3.1',
          subHeading: 'Service Provision',
          subInformation: 'Using data to deliver services to users.',
        },
        {
          subSectionNumber: '3.2',
          subHeading: 'Personalization',
          subInformation: 'Customizing user experiences based on data.',
        },
        {
          subSectionNumber: '3.3',
          subHeading: 'Marketing',
          subInformation: 'How user data may be used for marketing purposes.',
        },
      ],
    },
    {
      sectionNumber: 4,
      heading: 'Data Sharing',
      information: 'Details of data sharing practices.',
      subSections: [
        {
          subSectionNumber: '4.1',
          subHeading: 'With Affiliates',
          subInformation: 'Sharing data with affiliated entities.',
        },
        {
          subSectionNumber: '4.2',
          subHeading: 'With Service Providers',
          subInformation: 'Sharing data with third-party service providers.',
        },
        {
          subSectionNumber: '4.3',
          subHeading: 'Legal Obligations',
          subInformation: 'Data shared to comply with legal requirements.',
        },
      ],
    },
    {
      sectionNumber: 5,
      heading: 'Data Security',
      information: 'How data is protected.',
      subSections: [
        {
          subSectionNumber: '5.1',
          subHeading: 'Security Measures',
          subInformation: 'Measures in place to secure user data.',
        },
        {
          subSectionNumber: '5.2',
          subHeading: 'Data Breach',
          subInformation: 'Response and notification procedures for data breaches.',
        },
      ],
    },
    {
      sectionNumber: 6,
      heading: 'User Rights',
      information: 'Rights users have regarding their data.',
      subSections: [
        {
          subSectionNumber: '6.1',
          subHeading: 'Access',
          subInformation: 'Users can request access to their data.',
        },
        {
          subSectionNumber: '6.2',
          subHeading: 'Correction',
          subInformation: 'Users can request corrections to their data.',
        },
        {
          subSectionNumber: '6.3',
          subHeading: 'Deletion',
          subInformation: 'Users can request the deletion of their data.',
        },
      ],
    },
    {
      sectionNumber: 7,
      heading: 'Policy Updates',
      information: 'How updates to this policy are handled.',
      subSections: [
        {
          subSectionNumber: '7.1',
          subHeading: 'Notification',
          subInformation: 'Users will be notified of significant changes.',
        },
        {
          subSectionNumber: '7.2',
          subHeading: 'Effective Date',
          subInformation: 'When updates to the policy take effect.',
        },
      ],
    },
  ],
};
