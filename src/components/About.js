import Image from 'next/image';
import Box from './Box';

export default function About({ data, timeline }) {
  const contentAnimation = delay => {
    const offset = 0.3;
    timeline
      .from('.about-text', { opacity: 0, y: 30, duration: 0.8 }, delay + offset)
      .from(
        '.about-icon',
        { opacity: 0, rotate: 180, duration: 1, ease: 'slow.out' },
        delay + offset
      );
  };

  return (
    <Box
      timeline={timeline}
      className='-translate-y-full scale-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <div className='flex size-full flex-col justify-center items-start px-8'>
        <p className='about-text max-w-[25rem] text-lg font-serif font-normal leading-[180%]'>
          {data?.text}
        </p>
      </div>
    </Box>
  );
}
