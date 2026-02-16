import Link from 'next/link';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Products from '@/components/Products';
import FAQ from '@/components/FAQ';
import { Icon } from '@/components/Icon';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Products />
      <FAQ />

      <div className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-indigo-300">
            <span>●</span> OPEN FOR PARTNERSHIPS
          </div>

          <h2 className="font-display mb-8 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Architecting the future of <br />
            <span className="bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
              digital infrastructure.
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Join us in building the next generation of resilient software products. We are constantly looking for
            visionary partners.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:bg-indigo-50 active:scale-95"
          >
            <span>Initiate Collaboration</span>
            <Icon name="ArrowRight" className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Link>
        </div>
      </div>
    </>
  );
}
