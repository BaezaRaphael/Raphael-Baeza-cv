import { notFound } from 'next/navigation';
import { getDictionary, hasLocale, type Locale } from './dictionaries';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Journey from '@/components/sections/Journey';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Passions from '@/components/sections/Passions';
import Contact from '@/components/sections/Contact';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <main className="relative">
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Journey dict={dict.journey} />
      <Skills dict={dict.skills} />
      <Projects dict={dict.projects} />
      <Passions dict={dict.passions} />
      <Contact dict={dict.contact} footer={dict.footer} />
    </main>
  );
}
