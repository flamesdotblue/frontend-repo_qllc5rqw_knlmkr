import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularCategories from './components/PopularCategories';
import FeaturedVendors from './components/FeaturedVendors';
import { Home, Search, FileText, MessageSquare, User } from 'lucide-react';

function BottomTabBar() {
  const items = [
    { label: 'Home', icon: Home, href: '#' },
    { label: 'Search', icon: Search, href: '#vendors' },
    { label: 'Quotes', icon: FileText, href: '#quotes' },
    { label: 'Messages', icon: MessageSquare, href: '#messages' },
    { label: 'Profile', icon: User, href: '#profile' },
  ];

  return (
    <nav aria-label="App tabs" className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[94%] max-w-xl rounded-2xl border border-[#E5E5E5] bg-white/90 backdrop-blur shadow-sm">
      <ul className="grid grid-cols-5">
        {items.map(({ label, icon: Icon, href }) => (
          <li key={label} className="">
            <a
              href={href}
              className="group flex flex-col items-center justify-center gap-1 py-2 text-[#2F2F2F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280] rounded-2xl"
            >
              <span className="relative">
                <Icon className="w-5 h-5" />
                <span className="absolute -inset-2 rounded-full ring-2 ring-transparent group-focus-visible:ring-[#D1B280]" aria-hidden />
              </span>
              <span className="text-xs">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F0] text-[#2F2F2F]">
      <Navbar />
      <main>
        <HeroSection />
        <PopularCategories />
        <FeaturedVendors />

        {/* Placeholder sections for structure only */}
        <section id="quotes" className="py-10 bg-white border-t border-[#E5E5E5]">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2F2F2F] font-serif">Quotes</h2>
            <p className="mt-2 text-[#6C6C6C]">Track your requests and manage responses in one place.</p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-2xl border border-[#E5E5E5] bg-[#FAF9F0] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Vendor #{i}</div>
                    <span className="text-xs px-2 py-1 rounded-full border border-[#E5E5E5] text-[#2F2F2F] bg-white">requested</span>
                  </div>
                  <div className="text-sm text-[#6C6C6C]">Awaiting quote • Jaffna</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer id="about" className="bg-[#FAF9F0] border-t border-[#E5E5E5]">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-lg font-semibold">Festivaz</div>
                <p className="text-[#6C6C6C] mt-2">A refined marketplace for Sri Lankan celebrations — thoughtfully curated for Jaffna and beyond.</p>
              </div>
              <div>
                <div className="font-medium">Explore</div>
                <ul className="mt-2 space-y-1 text-[#2F2F2F]">
                  <li><a className="hover:bg-black/5 px-2 py-1 rounded-lg" href="#vendors">Vendors</a></li>
                  <li><a className="hover:bg-black/5 px-2 py-1 rounded-lg" href="#quotes">Quotes</a></li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Contact</div>
                <p className="text-[#6C6C6C] mt-2">Jaffna, Sri Lanka • hello@festivaz.lk</p>
              </div>
            </div>
            <div className="mt-8 text-sm text-[#6C6C6C]">© {new Date().getFullYear()} Festivaz</div>
          </div>
        </footer>
      </main>

      <BottomTabBar />
    </div>
  );
}
