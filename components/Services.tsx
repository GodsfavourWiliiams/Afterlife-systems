import React from 'react';
import { SERVICES } from '../constants';
import { Icon } from './Icon';

const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Built for Scale & Reliability</h2>
          <p className="text-slate-400 text-lg">
            We don't just write code. We build comprehensive operational environments that allow digital products to thrive independently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/50 hover:border-indigo-500/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={service.iconName} className="text-indigo-400" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;