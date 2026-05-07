import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { LightboxProvider } from "./components/Lightbox";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Silver Halide",
  description: "A film photography memoir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-[#ededed]">
        <LightboxProvider>
        <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-10 py-5 bg-black">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-xl text-white"
          >
            Silver Halide
          </Link>
          <nav className="flex items-center gap-7 text-sm text-zinc-300">
            <Link href="/" className="border-b border-zinc-200 text-white pb-px">
              Memoir
            </Link>
            <Link href="/gallery" className="hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="#"
              className="hover:text-white transition-colors font-semibold"
              aria-label="LinkedIn"
            >
              in
            </a>
          </nav>
        </header>
        <main className="flex-1 pt-[69px]">{children}</main>
        </LightboxProvider>
      </body>
    </html>
  );
}
