import About from './About';
import Stats from './Stats';
import { Icon } from './Icon';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative overflow-hidden border-b border-white/5 py-24">
        <div className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display mb-8 text-4xl font-bold text-white md:text-6xl">
            Engineering as the
            <br />
            <span className="text-indigo-400">Core Driver</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-400">
            Afterlife Systems was founded on a simple premise: software should be resilient, scalable, and
            independent. We are not an agency that builds for clients; we are an operator that builds for the future.
          </p>
        </div>
      </div>

      <Stats />

      <div className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h3 className="font-display mb-4 text-2xl font-bold text-white">Our Mission</h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                To create a diversified portfolio of digital assets that generate value through utility and reliability.
                We believe in the power of code to solve fundamental problems in commerce, communication, and
                developer efficiency.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <Icon name="CheckCircle" className="text-emerald-400" size={20} />
                  <span>Sustainability over growth hacking</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Icon name="CheckCircle" className="text-emerald-400" size={20} />
                  <span>Data privacy as a default</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Icon name="CheckCircle" className="text-emerald-400" size={20} />
                  <span>Systems thinking approach</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/5 bg-slate-900 p-8">
              <h3 className="font-display mb-6 text-xl font-bold text-white">Built in Uyo, Deployed Globally</h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                We are proud to operate from Uyo, Akwa Ibom State. Our location gives us a unique perspective and
                allows us to tap into a growing hub of engineering talent while serving a global customer base.
              </p>
              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <Icon name="Globe" size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Operations Hub</div>
                  <div className="font-medium text-white">Akwa Ibom, Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
    </div>
  );
};

export default AboutPage;
