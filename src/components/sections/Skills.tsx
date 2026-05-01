import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Skills({ dict }: { dict: Dictionary['skills'] }) {
  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto">
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

      <div className="grid md:grid-cols-3 gap-6">
        {dict.categories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.1}>
            <div className="p-8 rounded-2xl border border-border-soft bg-card hover:bg-card-hover hover:border-border-strong transition-all duration-300 h-full">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-subtle mb-6">
                {cat.name}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-base text-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
