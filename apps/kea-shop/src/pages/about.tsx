import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { type AboutUs } from './type';

export const About = () => {
  const ourInfo: AboutUs[] = [
    {
      selfImage: 'https://dummyimage.com/300x300/cccccc/000000&text=Rebecca+Lang',
      name: 'Rebecca Lang',
      role: 'role',
      linkedinIcon: <FaLinkedin />,
      linkedin: 'https://www.linkedin.com/in/rebecca-lang-nz/',
      github: 'https://github.com/Rebecca-Llang',
      githubIcon: <FaGithub />,
    },
    {
      selfImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Olivia+Burgess',
      name: 'Olivia Burgess',
      role: 'role',
      linkedin: 'https://www.linkedin.com/in/olivia-burgess-0bbb82200/',
      linkedinIcon: <FaLinkedin />,
      github: 'https://github.com/olivia-burgess',
      githubIcon: <FaGithub />,
    },
    {
      selfImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Ryan+Bosher',
      name: 'Ryan Bosher',
      role: 'role',
      linkedin: 'https://www.linkedin.com/in/ryan-bosher/',
      linkedinIcon: <FaLinkedin />,
      github: 'https://github.com/bosh-code',
      githubIcon: <FaGithub />,
    },
    {
      selfImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Hāmi+Hawkins',
      name: 'Hāmi Hawkins',
      role: 'role',
      linkedin: 'https://www.linkedin.com/in/h%C4%81mi-hawkins/',
      linkedinIcon: <FaLinkedin />,
      github: 'https://github.com/hami-hawkins',
      githubIcon: <FaGithub />,
    },
    {
      selfImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Shae+Jacobs',
      name: 'Shae Jacobs',
      role: 'role',
      linkedin: 'https://www.linkedin.com/in/shae-jacobs/',
      linkedinIcon: <FaLinkedin />,
      github: 'https://github.com/Shae-Jacobs',
      githubIcon: <FaGithub />,
    },
  ];
  return <div>About</div>;
};
