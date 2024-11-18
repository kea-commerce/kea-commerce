import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { type AboutUs } from '../type';

export const AboutMemberCard = () => {
  const ourInfo: AboutUs[] = [
    {
      selfImage: 'https://dummyimage.com/300x300/cccccc/000000&text=Rebecca+Lang',
      name: 'Rebecca Lang',
      role: 'Project Lead & Full Stack Developer',
      linkedinIcon: <FaLinkedin size={30} />,
      linkedin: 'https://www.linkedin.com/in/rebecca-lang-nz/',
      github: 'https://github.com/Rebecca-Llang',
      githubIcon: <FaGithub size={30} />,
      aboutMe:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor mi tortor, et cursus quam pretium id. Donec erat sem, pulvinar vitae euismod id, malesuada sed purus. Vestibulum vitae commodo mi, sed fermentum odio. Vestibulum venenatis, velit eu facilisis sodales, urna odio lobortis nisl, sit amet ultrices quam tellus mollis turpis. Quisque sagittis luctus nunc placerat pretium. Integer sit amet lectus sed tortor vehicula porta. Vivamus imperdiet condimentum accumsan. Proin a efficitur eros.',
    },
    {
      selfImage: 'https://dummyimage.com/300x300/cccccc/000000&text=Olivia+Burgess',
      name: 'Olivia Burgess',
      role: 'UI/UX Designer & Full Stack Developer',
      linkedin: 'https://www.linkedin.com/in/olivia-burgess-0bbb82200/',
      linkedinIcon: <FaLinkedin size={30} />,
      github: 'https://github.com/olivia-burgess',
      githubIcon: <FaGithub size={30} />,
      aboutMe:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor mi tortor, et cursus quam pretium id. Donec erat sem, pulvinar vitae euismod id, malesuada sed purus. Vestibulum vitae commodo mi, sed fermentum odio. Vestibulum venenatis, velit eu facilisis sodales, urna odio lobortis nisl, sit amet ultrices quam tellus mollis turpis. Quisque sagittis luctus nunc placerat pretium. Integer sit amet lectus sed tortor vehicula porta. Vivamus imperdiet condimentum accumsan. Proin a efficitur eros.',
    },
    {
      selfImage: 'https://dummyimage.com/300x300/cccccc/000000&text=Hāmi+Hawkins',
      name: 'Hāmi Hawkins',
      role: 'Full Stack Developer',
      linkedin: 'https://www.linkedin.com/in/h%C4%81mi-hawkins/',
      linkedinIcon: <FaLinkedin size={30} />,
      github: 'https://github.com/hami-hawkins',
      githubIcon: <FaGithub size={30} />,
      aboutMe:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor mi tortor, et cursus quam pretium id. Donec erat sem, pulvinar vitae euismod id, malesuada sed purus. Vestibulum vitae commodo mi, sed fermentum odio. Vestibulum venenatis, velit eu facilisis sodales, urna odio lobortis nisl, sit amet ultrices quam tellus mollis turpis. Quisque sagittis luctus nunc placerat pretium. Integer sit amet lectus sed tortor vehicula porta. Vivamus imperdiet condimentum accumsan. Proin a efficitur eros.',
    },
    {
      selfImage: 'https://dummyimage.com/300x300/cccccc/000000&text=Shae+Jacobs',
      name: 'Shae Jacobs',
      role: 'Full Stack Developer',
      linkedin: 'https://www.linkedin.com/in/shae-jacobs/',
      linkedinIcon: <FaLinkedin size={30} />,
      github: 'https://github.com/Shae-Jacobs',
      githubIcon: <FaGithub size={30} />,
      aboutMe:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor mi tortor, et cursus quam pretium id. Donec erat sem, pulvinar vitae euismod id, malesuada sed purus. Vestibulum vitae commodo mi, sed fermentum odio. Vestibulum venenatis, velit eu facilisis sodales, urna odio lobortis nisl, sit amet ultrices quam tellus mollis turpis. Quisque sagittis luctus nunc placerat pretium. Integer sit amet lectus sed tortor vehicula porta. Vivamus imperdiet condimentum accumsan. Proin a efficitur eros.',
    },
    {
      selfImage: 'https://dummyimage.com/300x300/cccccc/000000&text=Ryan+Bosher',
      name: 'Ryan Bosher',
      role: 'Tech Lead & Full Stack Developer',
      linkedin: 'https://www.linkedin.com/in/ryan-bosher/',
      linkedinIcon: <FaLinkedin size={30} />,
      github: 'https://github.com/bosh-code',
      githubIcon: <FaGithub size={30} />,
      aboutMe:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor mi tortor, et cursus quam pretium id. Donec erat sem, pulvinar vitae euismod id, malesuada sed purus. Vestibulum vitae commodo mi, sed fermentum odio. Vestibulum venenatis, velit eu facilisis sodales, urna odio lobortis nisl, sit amet ultrices quam tellus mollis turpis. Quisque sagittis luctus nunc placerat pretium. Integer sit amet lectus sed tortor vehicula porta. Vivamus imperdiet condimentum accumsan. Proin a efficitur eros.',
    },
  ];

  return (
    <div>
      <h1 className='text-2xl font-bold mt-4 text-center w-full pb-3 md:text-3xl'>Meet the Team</h1>
      {ourInfo.map((info) => (
        <div className='md:flex md:px-2 md:py-2 md:w-full md:justify-center md:pb-20 pb-14' key={info.name}>
          <div className='border-x-2 mx-2 border-t-2 justify-items-center md:mx-0 md:border-b-2 md:border-r-0'>
            <img
              alt={`Photograph of ${info.name}`}
              className='w-ma h-auto border-4 border-b-lightGreen m-3 md:m-4'
              src={info.selfImage}
            />
            <h2 className='text-2xl font-bold mt-2 text-center w-full md:text-3xl '>{info.name}</h2>
            <h3 className='text-xl font-bold text-center w-full text-lightGreen'>{info.role}</h3>
            <div className='flex justify-center p-4'>
              <a
                aria-label={`LinkedIn for ${info.name}`}
                className='mx-2'
                href={info.linkedin}
                key={info.name}
                rel='noopener noreferrer'
                target='_blank'
              >
                <div>{info.linkedinIcon}</div>
              </a>
              <a
                aria-label={`Github for ${info.name}`}
                className='mx-2'
                href={info.github}
                key={info.name}
                rel='noopener noreferrer'
                target='_blank'
              >
                <div>{info.githubIcon}</div>
              </a>
            </div>
          </div>
          <div className='border-2 mx-2 mb-4 text-left p-2 md:w-1/3 md:mx-0 md:mb-0 md:text-lg md:px-10 md:pt-10 text-slate-700'>
            <p className='font-medium'>{info.aboutMe}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
