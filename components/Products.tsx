import { PRODUCTS } from '../constants';
import { Icon } from './Icon';

interface ProductsProps {
  showHeader?: boolean;
}

const Products = ({ showHeader = true }: ProductsProps) => {
  return (
    <section id="products" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mb-16 flex flex-col items-end justify-between gap-6 border-b border-white/5 pb-8 md:flex-row">
            <div>
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-500">/ Portfolio</div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">Deployed Systems</h2>
              <p className="max-w-xl text-lg font-light text-slate-400">
                Independent, vertically-integrated products operating at scale.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-950 transition-colors group-hover:border-indigo-500/40">
                  <Icon name={product.iconName} className="text-white transition-colors group-hover:text-indigo-400" size={20} />
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    product.status === 'Live'
                      ? 'border-emerald-500/20 bg-emerald-950/30 text-emerald-400'
                      : 'border-amber-500/20 bg-amber-950/30 text-amber-400'
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full ${product.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`}
                  />
                  {product.status}
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="font-display mb-3 text-2xl font-bold text-white transition-colors group-hover:text-indigo-100">
                  {product.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">{product.description}</p>
              </div>

              <div className="relative z-10 mt-auto border-t border-white/5 pt-6">
                <div className="mb-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-white group-hover:text-slate-950"
                >
                  <span>Launch Product</span>
                  <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          ))}

          <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/50 p-6 text-center transition-colors hover:border-slate-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-slate-600 transition-colors group-hover:text-slate-400">
              <Icon name="Compass" size={20} />
            </div>
            <h3 className="font-display mb-2 text-xl font-bold text-slate-500">In Development</h3>
            <p className="px-4 text-sm text-slate-600">2 new ventures are currently in stealth mode.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
