'use client';

import Image from 'next/image';
import { useLightbox } from './Lightbox';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ClickableImage({ src, alt, width, height, className, sizes, priority }: Props) {
  const { open } = useLightbox();
  return (
    <div className="cursor-zoom-in" onClick={() => open({ src, alt, width, height })}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
