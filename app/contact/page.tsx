export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-69px)] flex flex-col justify-center px-10 py-20">
      <p className="text-zinc-400 text-lg mb-8">
        I honestly have no clue why you&apos;d want to talk to me, but I&apos;d still love to hear
        from you.
      </p>

      <a
        href="mailto:arjunchangeeacharya1998@gmail.com"
        className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-4xl text-white underline underline-offset-8 decoration-zinc-600 hover:decoration-white transition-colors w-fit mb-10"
      >
        arjunchangeeacharya1998@gmail.com
      </a>

      <a
        href="https://www.linkedin.com/in/arjunacharya10/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="font-[family-name:var(--font-cormorant)] text-2xl text-zinc-400 hover:text-white transition-colors w-fit"
      >
        in
      </a>
    </div>
  );
}
