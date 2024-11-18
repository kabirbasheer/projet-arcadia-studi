'use client';

import { Carousel as FlowbiteCarousel } from 'flowbite-react/components/Carousel';
import { customCarouselTheme } from './theme';

export const Carousel = () => {
  
    return (
        <FlowbiteCarousel theme={customCarouselTheme}>
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-1.webp" alt="image carousel-1" />
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-2.webp" alt="image carousel-2" />
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-3.webp" alt="image carousel-3" />
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-4.webp" alt="image carousel-4" />
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-5.webp" alt="image carousel-5" />
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-6.webp" alt="image carousel-6" />
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-7.webp" alt="image carousel-7" />
          <img className='min-h-[300px] md:min-h-[500px]' src="/images/carousel-8.webp" alt="image carousel-8" />
        </FlowbiteCarousel>
  );
};