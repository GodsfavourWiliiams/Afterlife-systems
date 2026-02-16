import Link from 'next/link';
import { TAGLINE, SUB_TAGLINE } from '@/site-constants';
import { Icon } from '@/components/shared/site-icon';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-48">
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute left-[20%] top-[-20%] h-[800px] w-[800px] rounded-full bg-indigo-500/10 opacity-50 mix-blend-screen blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 opacity-30 mix-blend-screen blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-indigo-300 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="tracking-wide">Technology Ventures & Operations</span>
        </div>

        <h1 className="font-display mx-auto mb-8 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
          {TAGLINE}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-400 md:text-xl">
          {SUB_TAGLINE}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/products"
            className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-indigo-500/10 transition-all hover:scale-105 hover:bg-slate-100 active:scale-95"
          >
            Explore Portfolio
            <Icon name="ArrowRight" className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Who We Are
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
