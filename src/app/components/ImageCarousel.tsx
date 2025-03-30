'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import carousel1 from '@/app/images/carousel1.jpg';
import carousel2 from '@/app/images/carousel2.jpg';
import carousel3 from '@/app/images/carousel3.jpg';
import carousel4 from '@/app/images/carousel4.jpg';
import carousel5 from '@/app/images/carousel5.jpg';

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

export default function CompactCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="flex justify-center w-full my-8">
      <div 
        className="embla w-[100vw] h-[500px] mx-auto overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full">
          {images.map((img, index) => (
            <div 
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
              key={index}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                quality={100}
                className="object-cover"
                sizes="50vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}