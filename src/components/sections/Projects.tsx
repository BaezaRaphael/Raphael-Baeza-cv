import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Projects({ dict }: { dict: Dictionary['projects'] }) {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
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

      <div className="space-y-6">
        {dict.items.map((proj, i) => {
          const hasImage = 'image' in proj && proj.image;
          return (
            <Reveal key={proj.name} delay={i * 0.1}>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border-soft bg-card hover:bg-card-hover hover:border-border-strong transition-all duration-500 overflow-hidden"
              >
                <div className={`grid gap-0 ${hasImage ? 'md:grid-cols-2' : ''}`}>
                  {hasImage && (
                    <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] bg-zinc-950 overflow-hidden border-b md:border-b-0 md:border-r border-border-soft">
                      <Image
                        src={proj.image as string}
                        alt={('imageAlt' in proj && (proj.imageAlt as string)) || proj.name}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {proj.name}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
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
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
