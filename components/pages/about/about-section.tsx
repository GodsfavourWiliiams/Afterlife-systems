import { FEATURES } from '@/site-constants';
import { Icon } from '@/components/shared/site-icon';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-white">
              Engineering First. <br /> Product Driven.
            </h2>
            <div className="space-y-6 leading-relaxed text-slate-400">
              <p>
                Afterlife Systems is not a traditional agency or venture fund. We are an operating holding company
                focused on building and maintaining high-utility software products.
              </p>
              <p>
                Our approach combines the agility of independent product teams with the stability of shared
                infrastructure. We prioritize clean code, data privacy, and long-term sustainability over short-term
                growth hacks.
              </p>
              <p>
                By centralizing core operational functions-billing, compliance, and infrastructure-we enable our
                products to focus entirely on user value.
              </p>
            </div>

            <div className="mt-10 border-t border-white/5 pt-10">
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Icon name="ShieldCheck" size={16} />
                  <span>SOC2 Compliant Processes</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-700" />
                <div className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  <span>Global CDN</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-700" />
                <div className="flex items-center gap-2">
                  <Icon name="Lock" size={16} />
                  <span>E2E Encryption</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="flex gap-5 rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-colors hover:bg-slate-900"
              >
                <div className="mt-1 flex-shrink-0">
                  <Icon name={feature.iconName} className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
