export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] px-8">
      <div className="max-w-xl w-full">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">About</p>
        <h1 className="text-4xl font-light tracking-tight text-white mb-8">The Photographer</h1>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>This is a placeholder for the about page.</p>
          <p>
            Tell your story here — who you are, what draws you to photography, and what you look
            for in a frame.
          </p>
        </div>
        <div className="mt-12 w-32 h-32 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center">
          <span className="text-zinc-600 text-xs tracking-wider uppercase">Photo</span>
        </div>
      </div>
    </div>
  );
}
