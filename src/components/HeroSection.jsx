import { ArrowRight } from 'lucide-react';

const categories = [
  'Weddings',
  'Photography',
  'Catering',
  'Decor',
  'Music',
  'Venues',
  'Traditional',
  'Transport',
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(closest-side, rgba(209,178,128,0.25), transparent)' }} />
      </div>
      <div className="bg-gradient-to-b from-[#FAF9F0] to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#2F2F2F] font-serif">
            Celebrate beautifully in Jaffna
          </h1>
          <p className="mt-3 text-[#6C6C6C] max-w-xl">
            Discover trusted vendors for weddings, cultural events, and celebrations across Sri Lanka — curated with a Jaffna vibe.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#vendors"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[#2F2F2F] bg-gradient-to-b from-[#D9C39A] to-[#D1B280] hover:from-[#C9AD7F] hover:to-[#B1976C] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
            >
              Explore vendors
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#quotes"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-[#E5E5E5] text-[#2F2F2F] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
            >
              Request a quote
            </a>
          </div>

          <div className="mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Categories">
            <div className="flex gap-2.5 min-w-max">
              {categories.map((c) => (
                <button
                  key={c}
                  className="px-4 py-2 rounded-2xl bg-white text-[#2F2F2F] border border-[#E5E5E5] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
