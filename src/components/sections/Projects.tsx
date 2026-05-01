import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Projects({ dict }: { dict: Dictionary['projects'] }) {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-subtle mb-4">
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
              className="group block p-8 rounded-2xl border border-border-soft bg-card hover:bg-card-hover hover:border-border-strong transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="relative">
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {proj.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 min-h-[3rem]">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-border-soft text-subtle"
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
