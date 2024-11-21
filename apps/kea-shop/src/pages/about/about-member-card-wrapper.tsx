import { ourInfo } from './lib/our-info';
import { AboutMemberCards } from './about-member-cards';

export const AboutMemberCardWrapper = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mt-4 text-center w-full pb-3 md:text-3xl'>Meet the Team</h1>
      <AboutMemberCards info={ourInfo} />
    </div>
  );
};
