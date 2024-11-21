import { TermsAndConditions } from './terms-and-conditions';

export const LegalTerms = () => {
  return (
    <div>
      <div>
        <h1>{TermsAndConditions.title}</h1>
      </div>
      <div>
        {TermsAndConditions.sections.map((section) => (
          <div key={section.sectionNumber}>
            <h2>{`${section.sectionNumber}. ${section.heading}`}</h2>
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
