import { Icon } from '@/components/shared/site-icon';

const ProcessSection = () => {
  const steps = [
    {
      title: 'Ideation & Market Fit',
      desc: 'We identify inefficiencies in high-value markets and validate digital solutions.',
      icon: 'Compass'
    },
    {
      title: 'Rapid Development',
      desc: 'Our core engineering team builds MVPs using modular, reusable architecture.',
      icon: 'Cpu'
    },
    {
      title: 'Scale & Optimize',
      desc: 'We deploy to our global edge network and optimize for performance and security.',
      icon: 'Globe'
    },
    {
      title: 'Operate & Grow',
      desc: 'Dedicated product managers take over daily operations while we handle infrastructure.',
      icon: 'BarChart'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How We Build</h2>
          <p className="text-slate-400 text-lg">
            Our venture studio model allows us to parallelize product development while maintaining high engineering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-slate-900 border border-white/5 p-8 rounded-3xl h-full hover:border-indigo-500/20 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                  <Icon name={step.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-slate-700 z-10">
                    <Icon name="ChevronRight" size={24} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
