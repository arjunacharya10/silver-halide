'use client';

import { ClickableImage } from './ClickableImage';

const DARK_BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScAAAAAElFTkSuQmCC';

type GalleryImage = { src: string; width: number; height: number };

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <section className="columns-1 sm:columns-2 lg:columns-3 gap-[2px] px-[2px] pb-[2px]">
      {images.map(({ src, width, height }, i) => (
        <div key={src} className="break-inside-avoid mb-[2px]">
          <ClickableImage
            src={src}
            alt=""
            width={width}
            height={height}
            className="w-full h-auto block"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i < 6}
            blurDataURL={DARK_BLUR}
          />
        </div>
      ))}
    </section>
  );
}
