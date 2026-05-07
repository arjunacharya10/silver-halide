import { ClickableImage } from "./components/ClickableImage";
import { PhotoStrip } from "./components/PhotoStrip";

const galleryImages = [
  { src: "/images/hero-gallery/76510006.JPG", alt: "" },
  { src: "/images/hero-gallery/76510008.JPG", alt: "" },
  { src: "/images/hero-gallery/76510012.JPG", alt: "" },
  { src: "/images/hero-gallery/76510014.JPG", alt: "" },
  { src: "/images/hero-gallery/76510019.JPG", alt: "" },
  { src: "/images/hero-gallery/76510001.JPG", alt: "" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="w-full">
        <ClickableImage
          src="/images/76510017.JPG"
          alt="Tree canopy at Morris Arboretum"
          width={3088}
          height={2048}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
      </section>

      {/* Memoir text */}
      <section className="max-w-3xl mx-auto px-8 py-24 text-center">
        <p className="font-[family-name:var(--font-cormorant)] italic text-[1.35rem] leading-9 text-zinc-200 mb-8">
          We spent the afternoon wandering through Morris Arboretum, chasing random light streaks and cherry blossoms
          that only shows up on heavy overcast days. I was there with my girlfriend and her friend,
          strolling through the gardens while the sky hung low above the trees.
        </p>
        <p className="font-[family-name:var(--font-cormorant)] italic text-[1.35rem] leading-9 text-zinc-200">
          At one point, the three of us stopped beneath this canopy of tangled branches, and for a
          second, it reminded me of the atmosphere in Skyfall and the visual poetry of Sir Roger
          Deakins, where nothing needs to happen for a moment to feel alive. Sometimes the best
          photographs come from simply being present, waiting, when the world arranges itself perfectly on
          its own.
        </p>
      </section>

      {/* Photo strip */}
      <PhotoStrip />

      {/* Body text */}
      <section className="px-12 py-20 max-w-lg">
        <p className="text-zinc-200 text-base leading-8">
          My first real attempt at film photography taught me that film forces you to slow down,
          observe, and trust moments you cannot instantly preview. Every frame here carries the
          nervous excitement of not knowing whether anything actually turned out until much later.
        </p>
      </section>

      {/* Wide panoramic */}
      <section className="w-full">
        <ClickableImage
          src="/images/76510005.JPG"
          alt="Roman Pillars of Morris"
          width={3088}
          height={2048}
          className="w-full h-auto"
          sizes="100vw"
        />
      </section>

      {/* Camera specs */}
      <section className="px-12 py-20 max-w-lg">
        <p className="text-zinc-200 text-base leading-8 text-xl">
          Camera: Kodak Snapic A1
        </p>
        <p className="text-zinc-200 text-base leading-8 text-xl">
          Film: 400 ISO, 35mm
        </p>
      </section>

      {/* Masonry gallery */}
      <section className="columns-1 sm:columns-2 lg:columns-3 gap-1 px-1 pb-1">
        {galleryImages.map(({ src, alt }) => (
          <div key={src} className="break-inside-avoid mb-1">
            <ClickableImage
              src={src}
              alt={alt}
              width={3088}
              height={2048}
              className="w-full h-auto block"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </section>

      {/* Closing quote */}
      <section className="max-w-3xl mx-auto px-8 py-28 text-center">
        <p className="font-[family-name:var(--font-cormorant)] italic text-[1.35rem] leading-9 text-zinc-100">
          It&apos;s moments like these, spent with nature, that remind us of the privilege we are silently bestowed with. Eternally grateful for this gift. 
        </p>
        <p className="font-[family-name:var(--font-cormorant)] italic text-[1.35rem] leading-9 text-zinc-100">
          - Arjun Acharya
        </p>
      </section>
    </>
  );
}
