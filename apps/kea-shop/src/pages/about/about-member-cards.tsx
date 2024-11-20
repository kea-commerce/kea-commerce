import type { AboutUs } from '../type';

type AboutMemberCardProps = {
  readonly info: AboutUs[];
};
export const AboutMemberCards = ({ info }: AboutMemberCardProps) => {
  return (
    <div>
      {info.map((member) => (
        <div className='md:flex md:px-2 md:py-2 md:w-full md:justify-center md:pb-20 pb-14' key={member.name}>
          <div className='border-x-2 mx-2 border-t-2 justify-items-center md:mx-0 md:border-b-2 md:border-r-0'>
            <img
              alt={`Photograph of ${member.name}`}
              className='w-ma h-auto border-4 border-b-lightGreen m-3 md:m-4'
              src={member.selfImage}
            />
            <h2 className='text-2xl font-bold mt-2 text-center w-full md:text-3xl '>{member.name}</h2>
            <h3 className='text-xl font-bold text-center w-full text-lightGreen'>{member.role}</h3>
            <div className='flex justify-center p-4'>
              <a
                aria-label={`LinkedIn for ${member.name}`}
                className='mx-2'
                href={member.linkedin}
                key={member.name}
                rel='noopener noreferrer'
                target='_blank'
              >
                <member.linkedinIcon size={30} />
              </a>
              <a
                aria-label={`Github for ${member.name}`}
                className='mx-2'
                href={member.github}
                key={member.name}
                rel='noopener noreferrer'
                target='_blank'
              >
                <member.githubIcon size={30} />
              </a>
            </div>
          </div>
          <div className='border-2 mx-2 mb-4 text-left p-2 md:w-1/3 md:mx-0 md:mb-0 md:text-lg md:px-10 md:pt-10 text-slate-700'>
            <p className='font-medium'>{member.aboutMe}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
