import type { LegalTermsLayout } from './type';

export const TermsAndConditions: LegalTermsLayout = {
  title: 'Terms & Conditions',
  sections: [
    {
      sectionNumber: 1,
      heading: 'Introduction',
      information: 'An overview of the terms and conditions.',
      subSections: [
        { subSectionNumber: '1.1', subHeading: 'Purpose', subInformation: 'Explains the purpose of this document.' },
        {
          subSectionNumber: '1.2',
          subHeading: 'Definitions',
          subInformation: 'Key terms used throughout the agreement.',
        },
        { subSectionNumber: '1.3', subHeading: 'Scope', subInformation: 'Outlines the scope of applicability.' },
        { subSectionNumber: '1.4', subHeading: 'Acceptance', subInformation: 'Details how users accept the terms.' },
        { subSectionNumber: '1.5', subHeading: 'Modifications', subInformation: 'How changes to terms are handled.' },
        {
          subSectionNumber: '1.6',
          subHeading: 'Contact Information',
          subInformation: 'Provides contact details for inquiries.',
        },
      ],
    },
    {
      sectionNumber: 2,
      heading: 'User Responsibilities',
      information: 'The obligations of users when using the service.',
      subSections: [
        {
          subSectionNumber: '2.1',
          subHeading: 'Compliance',
          subInformation: 'Users must comply with laws and regulations.',
        },
        { subSectionNumber: '2.2', subHeading: 'Account Security', subInformation: 'How to safeguard user accounts.' },
        {
          subSectionNumber: '2.3',
          subHeading: 'Prohibited Activities',
          subInformation: 'Actions users are not allowed to perform.',
        },
        {
          subSectionNumber: '2.4',
          subHeading: 'Payment Obligations',
          subInformation: 'Outlines payment-related responsibilities.',
        },
        {
          subSectionNumber: '2.5',
          subHeading: 'Content Ownership',
          subInformation: 'Ownership of user-generated content.',
        },
        {
          subSectionNumber: '2.6',
          subHeading: 'Feedback',
          subInformation: 'How users can provide feedback on the service.',
        },
      ],
    },
    {
      sectionNumber: 3,
      heading: 'Service Provisions',
      information: 'What the service provider will deliver.',
      subSections: [
        { subSectionNumber: '3.1', subHeading: 'Availability', subInformation: 'Service availability guarantees.' },
        { subSectionNumber: '3.2', subHeading: 'Maintenance', subInformation: 'Scheduled maintenance periods.' },
        {
          subSectionNumber: '3.3',
          subHeading: 'Service Limitations',
          subInformation: 'Limits of service functionality.',
        },
        {
          subSectionNumber: '3.4',
          subHeading: 'Third-Party Services',
          subInformation: 'Integration with external services.',
        },
        {
          subSectionNumber: '3.5',
          subHeading: 'Data Handling',
          subInformation: 'How user data is processed and stored.',
        },
        {
          subSectionNumber: '3.6',
          subHeading: 'Support',
          subInformation: 'Customer support availability and response times.',
        },
      ],
    },
    {
      sectionNumber: 4,
      heading: 'Privacy Policy',
      information: 'How user data is collected and used.',
      subSections: [
        {
          subSectionNumber: '4.1',
          subHeading: 'Data Collection',
          subInformation: 'What data is collected from users.',
        },
        { subSectionNumber: '4.2', subHeading: 'Data Usage', subInformation: 'How collected data is used.' },
        { subSectionNumber: '4.3', subHeading: 'Data Sharing', subInformation: 'Who data may be shared with.' },
        {
          subSectionNumber: '4.4',
          subHeading: 'Data Security',
          subInformation: 'Measures taken to protect user data.',
        },
        { subSectionNumber: '4.5', subHeading: 'User Rights', subInformation: 'User rights regarding their data.' },
        { subSectionNumber: '4.6', subHeading: 'Retention', subInformation: 'How long data is retained.' },
      ],
    },
    {
      sectionNumber: 5,
      heading: 'Termination',
      information: 'Conditions for ending the agreement.',
      subSections: [
        {
          subSectionNumber: '5.1',
          subHeading: 'Termination by User',
          subInformation: 'How users can terminate their account.',
        },
        {
          subSectionNumber: '5.2',
          subHeading: 'Termination by Provider',
          subInformation: 'Conditions under which the provider can terminate the agreement.',
        },
        {
          subSectionNumber: '5.3',
          subHeading: 'Effects of Termination',
          subInformation: 'What happens when the agreement ends.',
        },
        {
          subSectionNumber: '5.4',
          subHeading: 'Outstanding Obligations',
          subInformation: 'Responsibilities remaining after termination.',
        },
        { subSectionNumber: '5.5', subHeading: 'Disputes', subInformation: 'Handling disputes after termination.' },
        {
          subSectionNumber: '5.6',
          subHeading: 'Reinstatement',
          subInformation: 'Possibility of account reinstatement.',
        },
      ],
    },
    {
      sectionNumber: 6,
      heading: 'Liability',
      information: 'Limits and disclaimers of liability.',
      subSections: [
        { subSectionNumber: '6.1', subHeading: 'Warranty Disclaimer', subInformation: 'Exclusions of warranties.' },
        {
          subSectionNumber: '6.2',
          subHeading: 'Liability Limitations',
          subInformation: 'Caps on liabilities for damages.',
        },
        {
          subSectionNumber: '6.3',
          subHeading: 'Indemnification',
          subInformation: 'User indemnification responsibilities.',
        },
        {
          subSectionNumber: '6.4',
          subHeading: 'Force Majeure',
          subInformation: 'Liabilities during unforeseen events.',
        },
        {
          subSectionNumber: '6.5',
          subHeading: 'Exclusions',
          subInformation: 'Cases where liabilities are not assumed.',
        },
        {
          subSectionNumber: '6.6',
          subHeading: 'Governing Law',
          subInformation: 'Jurisdiction for resolving legal issues.',
        },
      ],
    },
    {
      sectionNumber: 7,
      heading: 'Miscellaneous',
      information: 'Additional terms and provisions.',
      subSections: [
        { subSectionNumber: '7.1', subHeading: 'Entire Agreement', subInformation: 'Superseding of prior agreements.' },
        {
          subSectionNumber: '7.2',
          subHeading: 'Amendments',
          subInformation: 'How amendments are made to this agreement.',
        },
        {
          subSectionNumber: '7.3',
          subHeading: 'Severability',
          subInformation: 'What happens if a term is unenforceable.',
        },
        {
          subSectionNumber: '7.4',
          subHeading: 'No Waiver',
          subInformation: 'Non-enforcement of terms does not mean a waiver.',
        },
        { subSectionNumber: '7.5', subHeading: 'Notices', subInformation: 'How notices should be sent and received.' },
        {
          subSectionNumber: '7.6',
          subHeading: 'Assignment',
          subInformation: 'Rules regarding transfer of rights under this agreement.',
        },
      ],
    },
  ],
};
