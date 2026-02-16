import ProductsGrid from './products-grid';

const ProductsPageContent = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative border-b border-white/5 pb-12 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
              Digital <span className="text-indigo-500">Assets</span>
            </h1>
            <p className="border-l-2 border-indigo-500 pl-6 text-xl font-light leading-relaxed text-slate-400 md:text-2xl">
              We don't build features. We build economies. <br className="hidden md:block" />
              Each product in our portfolio acts as an independent system, designed to solve a specific problem with
              maximum efficiency.
            </p>
          </div>
        </div>
      </div>

      <ProductsGrid showHeader={false} />
    </div>
  );
};

export default ProductsPageContent;
