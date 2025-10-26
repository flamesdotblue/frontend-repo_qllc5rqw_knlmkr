import { Star } from 'lucide-react';

const vendors = [
  {
    name: 'Nallur Harmony Ensemble',
    img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop',
    category: 'Music & Bands',
    rating: 4.9,
    location: 'Jaffna',
  },
  {
    name: 'Palmyrah Leaf Decor',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1200&auto=format&fit=crop',
    category: 'Decor & Styling',
    rating: 4.8,
    location: 'Kopay',
  },
  {
    name: 'Yarl Heritage Catering',
    img: 'https://images.unsplash.com/photo-1604908554027-91202562a52d?q=80&w=1200&auto=format&fit=crop',
    category: 'Catering',
    rating: 4.7,
    location: 'Jaffna',
  },
  {
    name: 'Point Pedro Frames',
    img: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=1200&auto=format&fit=crop',
    category: 'Photography',
    rating: 4.8,
    location: 'Point Pedro',
  },
];

export default function FeaturedVendors() {
  return (
    <section id="vendors" className="py-10 sm:py-12 bg-white" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-5">
          <h2 id="featured-heading" className="text-2xl sm:text-3xl font-semibold text-[#2F2F2F] font-serif">Featured vendors</h2>
          <div className="text-sm text-[#6C6C6C]">Handpicked and verified</div>
        </div>

        <div className="overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max pr-4">
            {vendors.map((v) => (
              <a
                key={v.name}
                href="#vendor-detail"
                className="w-72 snap-start shrink-0 rounded-2xl overflow-hidden bg-white border border-[#E5E5E5] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[#2F2F2F] font-medium truncate">{v.name}</div>
                    <div className="flex items-center gap-1 text-[#2F2F2F]">
                      <Star className="w-4 h-4 fill-[#D1B280] text-[#D1B280]" />
                      <span className="text-sm">{v.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-[#6C6C6C]">{v.category} • {v.location}</div>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-2 rounded-xl border border-[#E5E5E5] text-[#2F2F2F] hover:bg-black/5">View</button>
                    <button className="px-3 py-2 rounded-xl text-[#2F2F2F] bg-gradient-to-b from-[#D9C39A] to-[#D1B280] hover:from-[#C9AD7F] hover:to-[#B1976C]">Request quote</button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[#E5E5E5] bg-[#FAF9F0] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-[#D1B280]" />
            <p className="text-[#2F2F2F]"><span className="font-medium">Trusted by couples</span> — verified reviews, secure messaging, and clear pricing.</p>
          </div>
          <a href="#about" className="px-4 py-2 rounded-xl border border-[#E5E5E5] text-[#2F2F2F] hover:bg-black/5">Learn more</a>
        </div>
      </div>
    </section>
  );
}
