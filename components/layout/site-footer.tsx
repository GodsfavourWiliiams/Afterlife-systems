import Link from 'next/link';
import { COMPANY_NAME, YEAR, CONTACT_EMAIL, COMPANY_ADDRESS } from '@/site-constants';
import { Icon } from '@/components/shared/site-icon';

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 pr-8 md:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10">
                <Icon name="Cpu" className="text-indigo-400" size={16} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">{COMPANY_NAME}</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
              We design, build, and operate scalable software ecosystems. A diversified portfolio of independent
              technology products built for the modern internet.
            </p>
            <div className="space-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                <span>{COMPANY_ADDRESS}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-left text-sm text-slate-400 transition-colors hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-left text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-left text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-left text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-left text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-left text-sm text-slate-400 transition-colors hover:text-indigo-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs font-medium text-slate-600">
            © {YEAR} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-emerald-400">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
