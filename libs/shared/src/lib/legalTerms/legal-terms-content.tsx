import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import type { LegalTermsLayout } from './type';

type LegalTermsContentProps = Readonly<{
  content: LegalTermsLayout;
}>;

export const LegalTermsContent = ({ content }: LegalTermsContentProps) => {
  const [openSections, setOpenSections] = useState(() => {
    const initialState: Record<number, boolean> = {};
    for (const section of content.sections) {
      initialState[section.sectionNumber] = true;
    }
    return initialState;
  });

  const toggleSection = (sectionNumber: number) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionNumber]: !prevState[sectionNumber],
    }));
  };
  const handleToggleSection = (sectionNumber: number) => () => {
    toggleSection(sectionNumber);
  };

  return (
    <div>
      {content.sections.map((section) => (
        <div key={section.sectionNumber}>
          <button
            className='flex items-center py-2 md:py-4'
            onClick={handleToggleSection(section.sectionNumber)}
            type='button'
          >
            <h2 className='font-bold text-2xl text-left' id={section.heading}>
              {`${section.sectionNumber}. ${section.heading}`}
            </h2>
            {openSections[section.sectionNumber] ? (
              <FaChevronUp className='w-8 ml-2' />
            ) : (
              <FaChevronDown className='w-8 ml-2' />
            )}
          </button>
          {openSections[section.sectionNumber] ? (
            <p className=' border-t border-t-black-500'>{section.sectionInformation}</p>
          ) : undefined}
          {openSections[section.sectionNumber] && section.subSections && section.subSections.length > 0 ? (
            <div>
              {section.subSections.map((subSection) => (
                <div key={subSection.subInformation}>
                  <h3 className='font-semibold text-base pt-3'>{`${subSection.subHeading}`}</h3>
                  <p className='pb-2 md:pb-4 md:pt-2'>{subSection.subInformation}</p>
                </div>
              ))}
            </div>
          ) : undefined}
        </div>
      ))}
    </div>
  );
};
