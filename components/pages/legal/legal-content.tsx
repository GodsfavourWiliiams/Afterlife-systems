interface LegalProps {
  type: 'privacy' | 'terms';
}

const LegalContent = ({ type }: LegalProps) => {
  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  const lastUpdated = 'February 24, 2025';

  return (
    <div className="min-h-screen bg-slate-950 pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mb-12 border-b border-white/10 pb-8 text-slate-400">Last Updated: {lastUpdated}</p>

        {type === 'privacy' ? (
          <div className="space-y-8 text-slate-300">
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">1. Introduction</h3>
              <p>
                Afterlife Systems (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, and safeguard your information when you use our website
                and services.
              </p>
            </section>
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">2. Data Collection</h3>
              <p>
                We collect information that you provide directly to us, such as when you create an account, subscribe
                to our newsletter, or contact us for support. This may include contact details, payment information,
                and usage data.
              </p>
            </section>
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">3. Use of Information</h3>
              <p>
                We use the information we collect to operate, maintain, and improve our services, to process
                transactions, and to communicate with you. We do not sell your personal data to third parties.
              </p>
            </section>
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">4. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please note that no method of transmission over the Internet is 100% secure.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-8 text-slate-300">
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">1. Acceptance of Terms</h3>
              <p>
                By accessing and using the services provided by Afterlife Systems, you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Afterlife Systems' website for personal, non-commercial transitory viewing only.
              </p>
            </section>
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">3. Disclaimer</h3>
              <p>
                The materials on Afterlife Systems' website are provided on an 'as is' basis. Afterlife Systems makes
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability.
              </p>
            </section>
            <section>
              <h3 className="mb-4 text-xl font-semibold text-white">4. Limitations</h3>
              <p>
                In no event shall Afterlife Systems or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                use or inability to use the materials on our website.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalContent;
