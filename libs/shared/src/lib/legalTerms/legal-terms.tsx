import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import { LegalTermsNavbar } from './legal-terms-navbar';
import { TermsAndConditions } from './terms-and-conditions';

export const LegalTerms = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(() =>
    TermsAndConditions.sections.reduce((accumulator, section) => {
      accumulator[section.sectionNumber] = true;
      return accumulator;
    }, {} as Record<number, boolean>)
  );

  const toggleSection = (sectionNumber: number) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionNumber]: !prevState[sectionNumber],
    }));
  };

  return (
    <div className='justify-items-center'>
      <div className='justify-items-center w-full text-3xl p-10'>
        <h1>{TermsAndConditions.title}</h1>
      </div>
      <div className='flex flex-row'>
        <LegalTermsNavbar terms={TermsAndConditions} />
        <div className='p-10 pt-0'>
          {TermsAndConditions.sections.map((section) => (
            <div key={section.sectionNumber}>
              <button className='flex items-center' onClick={() => toggleSection(section.sectionNumber)} type='button'>
                <h2 className='font-bold text-2xl'>{`${section.sectionNumber}. ${section.heading}`}</h2>
                {openSections[section.sectionNumber] ? (
                  <FaChevronUp className='w-8 ml-2' />
                ) : (
                  <FaChevronDown className='w-8 ml-2' />
                )}
              </button>
              {openSections[section.sectionNumber] ? (
                <p className=' border-t border-t-black-500'>{section.information}</p>
              ) : undefined}
              {openSections[section.sectionNumber] && section.subSections && section.subSections.length > 0 ? (
                <div>
                  {section.subSections.map((subSection) => (
                    <div key={subSection.subSectionNumber}>
                      <h3 className='font-semibold text-base'>{`${subSection.subSectionNumber} ${subSection.subHeading}`}</h3>
                      <p>{subSection.subInformation}</p>
                    </div>
                  ))}
                </div>
              ) : undefined}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
