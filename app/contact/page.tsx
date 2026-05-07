export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] px-8">
      <div className="max-w-xl w-full">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Contact</p>
        <h1 className="text-4xl font-light tracking-tight text-white mb-8">Get in Touch</h1>
        <p className="text-zinc-400 leading-relaxed mb-12">
          This is a placeholder for the contact page. Add a form, email address, or social links
          here.
        </p>
        <div className="space-y-4">
          <div className="h-12 bg-zinc-900 rounded-sm border border-white/5" />
          <div className="h-12 bg-zinc-900 rounded-sm border border-white/5" />
          <div className="h-32 bg-zinc-900 rounded-sm border border-white/5" />
          <div className="h-12 bg-zinc-800 rounded-sm border border-white/10 flex items-center justify-center">
            <span className="text-zinc-500 text-sm tracking-wider uppercase">Send Message</span>
          </div>
        </div>
      </div>
    </div>
  );
}
