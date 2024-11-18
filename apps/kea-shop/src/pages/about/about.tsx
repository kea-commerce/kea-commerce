import { AboutMemberCard } from './about-member-card';

export const About = () => {
  const aboutInfo = {
    aboutImage: 'https://dummyimage.com/300x300/cccccc/000000&text=About+Us',
    info: 'Writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. Keep your thoughts flowing logically, and aim for brevity unless you&aposre writing in the long form. Your ideas have a purpose so choose words that accurately express them. Ensure your grammar is flawless as it impacts your credibility. Use the active voice whenever possible as it makes any narrative easier to read.',
  };
  return (
    <div>
      <div className='mx-auto text-center max-w-lg px-4 py-8'>
        <h1 className='text-2xl font-bold mt-4 text-center w-full md:text-3xl'>About us</h1>
        <div className='mt-2 text-center pb-4'>
          <p className='font-medium md:text-lg'>{aboutInfo.info}</p>
        </div>
      </div>
      <AboutMemberCard />
    </div>
  );
};
