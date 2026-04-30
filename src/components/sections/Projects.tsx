import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Projects({ dict }: { dict: Dictionary['projects'] }) {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">
          {dict.kicker}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-gradient">
          {dict.title}
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dict.items.map((proj, i) => (
          <Reveal key={proj.name} delay={i * 0.1}>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/30 transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {proj.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 min-h-[3rem]">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
