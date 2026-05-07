'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Image from 'next/image';

type LightboxImage = { src: string; alt: string; width: number; height: number };
type LightboxCtx = { open: (img: LightboxImage) => void };

const LightboxContext = createContext<LightboxCtx | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox used outside LightboxProvider');
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [img, setImg] = useState<LightboxImage | null>(null);

  const open = useCallback((image: LightboxImage) => setImg(image), []);
  const close = useCallback(() => setImg(null), []);

  useEffect(() => {
    if (!img) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [img, close]);

  useEffect(() => {
    document.body.style.overflow = img ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [img]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {img && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Controls */}
          <div className="absolute top-5 right-6 flex items-center gap-6 z-10">
            <a
              href={img.src}
              download
              onClick={(e) => e.stopPropagation()}
              className="text-zinc-400 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors"
            >
              Download
            </a>
            <button
              onClick={close}
              aria-label="Close"
              className="text-zinc-400 hover:text-white text-3xl leading-none transition-colors"
            >
              ×
            </button>
          </div>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
