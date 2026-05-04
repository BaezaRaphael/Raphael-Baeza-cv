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
          const imageAlt = ('imageAlt' in proj && (proj.imageAlt as string)) || proj.name;

          return (
            <Reveal key={proj.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-border-soft bg-card overflow-hidden">
                <div className={`grid ${hasImage ? 'md:grid-cols-2' : ''}`}>
                  {hasImage && (
                    <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 md:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-border-soft overflow-hidden">
                      {/* Soft ambient glow */}
                      <div
                        className="absolute inset-0 opacity-50 pointer-events-none blur-3xl"
                        style={{
                          background:
                            'radial-gradient(circle at 50% 50%, rgba(120, 90, 255, 0.18), transparent 65%)',
                        }}
                      />

                      {/* Browser window */}
                      <div className="relative w-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.02]">
                        {/* Chrome bar */}
                        <div className="bg-zinc-800 px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
                          <div className="flex-1 mx-3 px-3 py-0.5 rounded-md bg-zinc-900/80 text-[10px] text-zinc-500 font-mono text-center truncate">
                            pdf-app.local
                          </div>
                        </div>
                        {/* Screenshot */}
                        <div className="relative aspect-[16/9] bg-zinc-950">
                          <Image
                            src={proj.image as string}
                            alt={imageAlt}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
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
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
