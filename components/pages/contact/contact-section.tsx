import { CONTACT_EMAIL, COMPANY_ADDRESS } from '@/site-constants';
import { Icon } from '@/components/shared/site-icon';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-indigo-900/20 to-slate-900/50 p-8 md:p-16">
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Start a Conversation</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                Interested in our portfolio or looking for technology partnership opportunities? Reach out to our
                corporate development team.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email Us</div>
                    <div className="font-medium text-white">{CONTACT_EMAIL}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Headquarters</div>
                    <div className="font-medium text-white">{COMPANY_ADDRESS}</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 rounded-3xl border border-white/5 bg-slate-950/50 p-8 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-slate-400">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-slate-400">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-sm font-medium text-slate-400">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-sm font-medium text-slate-400">Message</label>
                <textarea
                  className="h-32 w-full resize-none rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  placeholder="How can we help?"
                />
              </div>

              <button className="w-full rounded-xl bg-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
