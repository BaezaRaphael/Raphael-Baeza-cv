import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Passions({ dict }: { dict: Dictionary['passions'] }) {
  return (
    <section id="passions" className="py-32 px-6 max-w-6xl mx-auto relative">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="relative">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-subtle mb-4">
            {dict.kicker}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-gradient">
            {dict.title}
          </h2>
        </Reveal>

        {dict.intro && (
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl mb-16">
              {dict.intro}
            </p>
          </Reveal>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {dict.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-card-hover border border-border-soft relative">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{p.title}</h3>
                <p className="text-muted leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
