import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Contact({
  dict,
  footer,
}: {
  dict: Dictionary['contact'];
  footer: Dictionary['footer'];
}) {
  const links = [
    { label: dict.email, href: 'mailto:raph.baeza13@gmail.com', value: 'raph.baeza13@gmail.com' },
    { label: dict.linkedin, href: 'https://linkedin.com/', value: '@raphaelbaeza' },
    { label: dict.github, href: 'https://github.com/', value: '@raphaelbaeza' },
  ];

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">
          {dict.kicker}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-gradient">
          {dict.title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-lg md:text-xl text-zinc-400 mb-16 max-w-2xl">{dict.subtitle}</p>
      </Reveal>

      <div className="space-y-px border-t border-white/10">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={0.3 + i * 0.1}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
                {link.label}
              </span>
              <span className="text-lg md:text-xl text-white group-hover:translate-x-[-4px] transition-transform">
                {link.value} →
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.6}>
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            ↓ {dict.downloadCV}
          </a>
          <p className="text-xs font-mono text-zinc-600">
            © {footer.year} — {footer.madeWith}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
