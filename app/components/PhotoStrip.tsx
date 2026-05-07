'use client';

import Image from 'next/image';
import { useLightbox } from './Lightbox';

const stripPhotos = [
  { src: '/images/76510004.JPG', alt: 'Garden path' },
  { src: '/images/76510009.JPG', alt: 'Stream and trees' },
  { src: '/images/76510015.JPG', alt: 'Stone pagoda' },
  { src: '/images/76510031.JPG', alt: 'Church like structure' },
  { src: '/images/76510018.JPG', alt: 'Wooden bridge' },
];

export function PhotoStrip() {
  const { open } = useLightbox();
  return (
    <section className="flex w-full">
      {stripPhotos.map(({ src, alt }) => (
        <div
          key={src}
          className="relative flex-1 aspect-[2048/3088] cursor-zoom-in"
          onClick={() => open({ src, alt, width: 2048, height: 3088 })}
        >
          <Image src={src} alt={alt} fill className="object-cover" sizes="20vw" />
        </div>
      ))}
    </section>
  );
}
