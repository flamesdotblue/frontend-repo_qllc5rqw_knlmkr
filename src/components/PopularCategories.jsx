const popular = [
  {
    title: 'Jaffna Wedding Venues',
    img: 'https://images.unsplash.com/photo-1530021232320-687d8e1f4df4?q=80&w=1200&auto=format&fit=crop',
    count: '42 vendors',
  },
  {
    title: 'Traditional Catering',
    img: 'https://images.unsplash.com/photo-1617191518003-a8b82a6cfb8b?q=80&w=1200&auto=format&fit=crop',
    count: '29 vendors',
  },
  {
    title: 'Tamil Cultural Decor',
    img: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1200&auto=format&fit=crop',
    count: '18 vendors',
  },
  {
    title: 'Photographers',
    img: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=1200&auto=format&fit=crop',
    count: '64 vendors',
  },
];

export default function PopularCategories() {
  return (
    <section className="py-10 sm:py-12 bg-[#FAF9F0]" aria-labelledby="popular-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-5">
          <h2 id="popular-heading" className="text-2xl sm:text-3xl font-semibold text-[#2F2F2F] font-serif">Popular categories</h2>
          <a href="#vendors" className="text-[#2F2F2F] hover:bg-black/5 px-3 py-2 rounded-xl">See all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popular.map((item) => (
            <a
              key={item.title}
              href="#vendors"
              className="group rounded-2xl overflow-hidden bg-white border border-[#E5E5E5] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-4">
                <div className="text-[#2F2F2F] font-medium">{item.title}</div>
                <div className="text-sm text-[#6C6C6C]">{item.count}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
