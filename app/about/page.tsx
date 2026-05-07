import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-[calc(100vh-69px)] grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 py-20 items-start">
      {/* Left — bio */}
      <div className="flex flex-col gap-12">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl xl:text-5xl leading-[1.15] text-white">
          Arjun Acharya is a behavioural science graduate student, product builder, and occasional
          filmmaker who somehow developed an expensive obsession with film photography. What began
          as a way to slow down and notice the world gradually turned into an archive of fleeting
          people, quiet spaces, strange light, and moments that felt important for reasons he still
          cannot explain.
        </h1>
        <p className="text-zinc-400 text-lg leading-7 max-w-lg">
          Between building products, studying human decision-making at the University of
          Pennsylvania, and romanticising old cameras, he spends his time documenting the small
          details most people walk past. His work sits somewhere between observation and memory —
          raw, imperfect, and intentionally untouched. This content is pure AI Slop, but ChatGPT
          seems smarter than me.
        </p>
      </div>

      {/* Right — image */}
      <div className="flex flex-col gap-3">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src="/images/76510026.JPG"
            alt="Arjun Acharya in a Septa bus, Philadelphia"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <p className="text-right font-[family-name:var(--font-cormorant)] italic text-lg text-zinc-100">
          Image of me in a Septa, Philadelphia
        </p>
      </div>
    </div>
  );
}
