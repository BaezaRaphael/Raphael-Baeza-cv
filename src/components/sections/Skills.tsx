import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

const TOOL_LOGO_MAP: Record<string, string> = {
  jira: '/logos/jira.svg',
  confluence: '/logos/confluence.svg',
  figma: '/logos/figma.svg',
  notion: '/logos/notion.svg',
  slack: '/logos/slack.svg',
  asana: '/logos/asana.svg',
  shopify: '/logos/shopify.svg',
  trello: '/logos/trello.svg',
  postman: '/logos/postman.svg',
};

// Bento layout per dict-order:
// 0 Gestion · 1 Agile · 2 Outils (tall) · 3 Tech · 4 Langues · 5 Certifications
const BENTO_LAYOUT = [
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-2',
];

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(180px,1fr)]">
        {dict.categories.map((cat, i) => {
          const isToolsCard = i === 2;
          const span = BENTO_LAYOUT[i] ?? 'md:col-span-1';

          return (
            <Reveal key={cat.name} delay={i * 0.06} className={span}>
              <div
                className={`h-full p-6 md:p-7 rounded-2xl border transition-all duration-300 ${
                  isToolsCard
                    ? 'border-white/10 bg-zinc-900 hover:border-white/20'
                    : 'border-border-soft bg-card hover:bg-card-hover hover:border-border-strong'
                }`}
              >
                <h3
                  className={`text-xs font-mono uppercase tracking-[0.2em] mb-5 ${
                    isToolsCard ? 'text-zinc-400' : 'text-subtle'
                  }`}
                >
                  {cat.name}
                </h3>

                {isToolsCard ? (
                  <div className="grid grid-cols-3 gap-4">
                    {cat.items.map((tool) => {
                      const logo = TOOL_LOGO_MAP[tool.toLowerCase()];
                      return (
                        <div
                          key={tool}
                          className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:scale-105 transition-all duration-200"
                        >
                          {logo && (
                            <div className="w-8 h-8 relative">
                              <Image
                                src={logo}
                                alt={`${tool} logo`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                          <span className="text-[11px] text-zinc-300 font-medium">{tool}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm md:text-base text-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
