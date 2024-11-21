import { useCallback, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import { TermsAndConditions } from './terms-and-conditions';

export const LegalTerms = () => {
  // State to track open/close status for each section
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (sectionNumber: number) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionNumber]: !prevState[sectionNumber],
    }));
  };

  return (
    <div className=''>
      <div className='justify-items-center w-full text-3xl p-10'>
        <h1>{TermsAndConditions.title}</h1>
      </div>
      <div className='p-10 pt-0'>
        {TermsAndConditions.sections.map((section) => (
          <div key={section.sectionNumber}>
            <button onClick={() => toggleSection(section.sectionNumber)} type='button'>
              <h2 className='font-bold text-2xl'>{`${section.sectionNumber}. ${section.heading}`}</h2>
              {openSections[section.sectionNumber] ? (
                <FaChevronDown className='w-8' />
              ) : (
                <FaChevronUp className='w-8' />
              )}
            </button>
            <p>{section.information}</p>
            {section.subSections && section.subSections.length > 0 ? (
              <div>
                {section.subSections.map((subSection) => (
                  <div key={subSection.subSectionNumber}>
                    <h3>{`${subSection.subSectionNumber} ${subSection.subHeading}`}</h3>
                    <p>{subSection.subInformation}</p>
                  </div>
                ))}
              </div>
            ) : undefined}
          </div>
        ))}
      </div>
    </div>
  );
};
