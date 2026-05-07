import fs from 'fs';
import path from 'path';
import { GalleryGrid } from '../components/GalleryGrid';

const GALLERY_DIR = path.join(process.cwd(), 'public/images/gallery');
const SUPPORTED = /\.(jpe?g|png|webp)$/i;

function readJpegDimensions(filePath: string): { width: number; height: number } | null {
  try {
    const fd = fs.openSync(filePath, 'r');
    const buf = Buffer.alloc(65536);
    fs.readSync(fd, buf, 0, 65536, 0);
    fs.closeSync(fd);
    if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
    let offset = 2;
    while (offset < buf.length - 8) {
      if (buf[offset] !== 0xff) break;
      const marker = buf[offset + 1];
      if (marker >= 0xc0 && marker <= 0xc3) {
        return {
          width: (buf[offset + 7] << 8) | buf[offset + 8],
          height: (buf[offset + 5] << 8) | buf[offset + 6],
        };
      }
      const segLen = (buf[offset + 2] << 8) | buf[offset + 3];
      offset += 2 + segLen;
    }
    return null;
  } catch {
    return null;
  }
}

function getGalleryImages() {
  if (!fs.existsSync(GALLERY_DIR)) return [];
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => SUPPORTED.test(f))
    .sort()
    .map((filename) => {
      const dims = readJpegDimensions(path.join(GALLERY_DIR, filename));
      return {
        src: `/images/gallery/${filename}`,
        width: dims?.width ?? 3088,
        height: dims?.height ?? 2048,
      };
    });
}

export default function Gallery() {
  const images = getGalleryImages();

  return (
    <>
      {/* Intro */}
      <section className="px-10 pt-16 pb-20">
        <hr className="border-zinc-800 mb-12" />
        <p className="font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl leading-[1.2] text-zinc-100 max-w-7xl">
          Proof that I occasionally step away from screens to observe humans, light, shadows, and
          expensive rolls of film. All photos here are straight out of my Kodak Snapic A1 with
          absolutely zero post-processing or editing. Mostly because my lazy brain didn&apos;t want
          to put in the effort, so I came up with a Theory of Commitment&#x2122; where every future
          upload must remain untouched, and now I call it art.
        </p>
      </section>

      {/* Masonry grid */}
      {images.length > 0 ? (
        <GalleryGrid images={images} />
      ) : (
        <section className="px-10 py-20 text-zinc-600 text-sm tracking-wider uppercase">
          No images yet.
        </section>
      )}
    </>
  );
}
