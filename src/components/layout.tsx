import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { Phone, Mail, Menu, X } from "lucide-react";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      // The 'lg' breakpoint in Tailwind is 1024px
      if (window.innerWidth >= 1024) {
        // Set state to false if window is desktop-sized
        setMobileMenuOpen(false);
      }
    };
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // The empty dependency array means this runs once on mount

  const navigationItems = [
    { title: "Home", url: createPageUrl("Home") },
    { title: "Our Fleet", url: createPageUrl("Fleet") },
    { title: "Reserve", url: createPageUrl("Booking") },
  ];

  const isActive = (url: string) => location.pathname === url;

  return (
    <div className="min-h-screen bg-black">

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/98 backdrop-blur-xl shadow-2xl border-b border-gold/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-6">

            <Link to={createPageUrl("Home")} className="flex-shrink-0">
              <img 
                src="/img/BM_rec.png"
                alt="BM Luxury Ride"
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-12">
              <nav className="flex items-center gap-12">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 relative ${
                      isActive(item.url)
                        ? 'text-gold'
                        : 'text-gray-300 hover-gold'
                    }`}
                  >
                    {item.title}
                    {isActive(item.url) && (
                      <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></span>
                    )}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-8">
                <a 
                  href="tel:+14695551234" 
                  className="flex items-center gap-3 text-gray-300 hover-gold transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Call Us</div>
                    <div className="text-sm font-semibold">(469) 555-1234</div>
                  </div>
                </a>
                <Link
                  to={createPageUrl("Booking")}
                  className="px-8 py-3 bg-gold text-black font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300 luxury-shadow"
                >
                  Reserve Now
                </Link>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gold p-2 hover:bg-gold/10 rounded transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
        
        {/* --- Mobile Menu Section (Restored) --- */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gold/20 shadow-2xl">
            <nav className="px-6 py-8 space-y-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg tracking-widest uppercase font-medium transition-colors duration-300 ${
                    isActive(item.url) ? 'text-gold' : 'text-gray-300'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-6 border-t border-gold/20">
                <a
                  href="tel:+14695551234"
                  className="flex items-center gap-3 text-gold text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>(469) 555-1234</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* End of Complete Header */}

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68eda7691cecfeb7be87cfd2/f998ee283_BM_rec.png"
                alt="BM Luxury Ride"
                className="h-16 w-auto mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                DFW's Premier Luxury Transportation Service. Experience unparalleled elegance 
                and sophistication with every journey.
              </p>
              <div className="flex gap-6">
                <a 
                  href="tel:+14695551234" 
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:info@bmluxuryride.com" 
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Navigation</h3>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link 
                      to={item.url} 
                      className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Dallas-Fort Worth</li>
                <li>Texas</li>
                <li className="pt-2">
                  <a href="tel:+14695551234" className="hover:text-gold transition-colors duration-300">
                    (469) 555-1234
                  </a>
                </li>
                <li>
                  <a href="mailto:info@bmluxuryride.com" className="hover:text-gold transition-colors duration-300">
                    info@bmluxuryride.com
                  </a>
                </li>
                <li className="pt-2 text-gold font-medium">Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} BM Luxury Ride. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              DFW's Premier Transportation Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}