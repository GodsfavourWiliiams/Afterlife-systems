import { Icon } from '@/components/shared/site-icon';

const FaqSection = () => {
  const faqs = [
    {
      q: 'Are you an agency?',
      a: 'No. Afterlife Systems is a product company. We build, own, and operate our own software products. We occasionally partner with enterprises for strategic technology development.'
    },
    {
      q: 'Where are you located?',
      a: 'We are headquartered in Uyo, Akwa Ibom State, Nigeria, but our team and infrastructure are distributed globally.'
    },
    {
      q: 'How do you handle data privacy?',
      a: 'Privacy is a core tenant of our engineering philosophy. All our products are compliant with global data protection regulations and use end-to-end encryption where applicable.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-400">
              Common questions about our structure and operations.
            </p>
            <div className="mt-8 p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
               <div className="flex gap-4">
                 <Icon name="HelpCircle" className="text-indigo-400 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-medium mb-1">Have more questions?</h4>
                   <p className="text-sm text-slate-400">Contact our support team for detailed inquiries.</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-6">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-white/5 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
