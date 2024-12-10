'use client';

import { Carousel as FlowbiteCarousel } from 'flowbite-react/components/Carousel';
import { customCarouselTheme } from './theme';
import Image from 'next/image';

export const Carousel = () => {
  return (
    <FlowbiteCarousel theme={customCarouselTheme}>
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-1.webp"
        alt="image carousel-1"
        height={500}
        width={700}
      />
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-2.webp"
        alt="image carousel-2"
        height={400}
        width={700}
      />
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-3.webp"
        alt="image carousel-3"
        height={400}
        width={700}
      />
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-4.webp"
        alt="image carousel-4"
        height={400}
        width={700}
      />
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-5.webp"
        alt="image carousel-5"
        height={400}
        width={700}
      />
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-6.webp"
        alt="image carousel-6"
        height={400}
        width={700}
      />
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-7.webp"
        alt="image carousel-7"
        height={400}
        width={700}
      />
      <Image
        className="min-h-[300px] md:min-h-[500px]"
        src="/images/carousel-8.webp"
        alt="image carousel-8"
        height={400}
        width={700}
      />
    </FlowbiteCarousel>
  );
};
