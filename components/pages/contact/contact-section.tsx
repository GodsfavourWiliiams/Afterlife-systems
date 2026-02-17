'use client';

import { FormEvent, useMemo, useState } from 'react';
import { CONTACT_EMAIL, COMPANY_ADDRESS } from '@/site-constants';
import { Icon } from '@/components/shared/site-icon';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  company: string;
}

const ContactSection = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    company: ''
  });

  const isDisabled = useMemo(() => status === 'submitting', [status]);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('');
    const formData = new FormData(event.currentTarget);
    const payload: FormState = {
      firstName: String(formData.get('firstName') ?? form.firstName).trim(),
      lastName: String(formData.get('lastName') ?? form.lastName).trim(),
      email: String(formData.get('email') ?? form.email).trim(),
      message: String(formData.get('message') ?? form.message).trim(),
      company: String(formData.get('company') ?? form.company).trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setFeedback(data?.error ?? 'Unable to send your message right now.');
        return;
      }

      setStatus('success');
      setFeedback('Message sent successfully. We will get back to you soon.');
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        company: ''
      });
    } catch {
      setStatus('error');
      setFeedback('Network error. Please try again.');
    }
  };

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

            <form
              className="space-y-4 rounded-3xl border border-white/5 bg-slate-950/50 p-8 backdrop-blur-md"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="ml-1 text-sm font-medium text-slate-400">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                    placeholder="Jane"
                    required
                    minLength={2}
                    autoComplete="given-name"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="ml-1 text-sm font-medium text-slate-400">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                    placeholder="Doe"
                    required
                    minLength={2}
                    autoComplete="family-name"
                    disabled={isDisabled}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email-address" className="ml-1 text-sm font-medium text-slate-400">
                  Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  placeholder="jane@company.com"
                  required
                  autoComplete="email"
                  disabled={isDisabled}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="ml-1 text-sm font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="h-32 w-full resize-none rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  placeholder="How can we help?"
                  required
                  minLength={10}
                  maxLength={4000}
                  disabled={isDisabled}
                />
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className="w-full rounded-xl bg-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {feedback && (
                <p className={`text-sm ${status === 'error' ? 'text-rose-300' : 'text-emerald-300'}`}>{feedback}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
