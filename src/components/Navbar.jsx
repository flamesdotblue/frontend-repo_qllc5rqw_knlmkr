import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Vendors', href: '#vendors' },
  { label: 'Quotes', href: '#quotes' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280] rounded-xl">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#EADFC6] to-[#D1B280]" aria-hidden />
          <span className="text-[#2F2F2F] text-lg font-semibold tracking-wide">Festivaz</span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#2F2F2F] hover:bg-black/5 px-3 py-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#login"
            className="px-4 py-2 rounded-xl border border-[#E5E5E5] text-[#2F2F2F] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
          >
            Login
          </a>
          <a
            href="#register"
            className="px-4 py-2 rounded-xl text-[#2F2F2F] bg-gradient-to-b from-[#D9C39A] to-[#D1B280] hover:from-[#C9AD7F] hover:to-[#B1976C] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
          >
            Create account
          </a>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-xl text-[#2F2F2F] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#2F2F2F] font-medium">Menu</span>
              <button
                aria-label="Close menu"
                className="p-2 rounded-xl text-[#2F2F2F] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#2F2F2F] px-3 py-3 rounded-2xl hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <a href="#login" className="flex-1 text-center px-4 py-3 rounded-2xl border border-[#E5E5E5] text-[#2F2F2F] hover:bg-black/5">Login</a>
                <a href="#register" className="flex-1 text-center px-4 py-3 rounded-2xl text-[#2F2F2F] bg-gradient-to-b from-[#D9C39A] to-[#D1B280] hover:from-[#C9AD7F] hover:to-[#B1976C] shadow-sm">Create</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
