'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export default function Journey({ dict }: { dict: Dictionary['journey'] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="py-32 px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-subtle mb-4">
          {dict.kicker}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-20 text-gradient">
          {dict.title}
        </h2>
      </Reveal>

      <div ref={ref} className="relative pl-8 md:pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border-soft" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-foreground via-foreground to-transparent"
        />

        <div className="space-y-20">
          {dict.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative">
                <div className="absolute -left-[34px] md:-left-[50px] top-2 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-subtle mb-2">
                  {item.date}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-subtle mb-3">{item.place}</p>
                <p className="text-base text-muted max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
