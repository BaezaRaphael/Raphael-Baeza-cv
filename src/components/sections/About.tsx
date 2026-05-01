import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function About({ dict }: { dict: Dictionary['about'] }) {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-subtle mb-4">
          {dict.kicker}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-gradient">
          {dict.title}
        </h2>
      </Reveal>

      <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
        <Reveal delay={0.2}>
          <p>{dict.p1}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p>{dict.p2}</p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-muted">{dict.p3}</p>
        </Reveal>
      </div>
    </section>
  );
}
