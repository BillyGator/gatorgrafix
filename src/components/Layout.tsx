import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
import gsap from 'gsap';
import EmailProtection from './EmailProtection';

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.page-content', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/vinyl-installation', label: 'Vinyl Installation' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gator-red text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:8504780486" className="flex items-center gap-1 hover:text-gator-yellow transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(850) 478-0486</span>
            </a>
            <span className="hidden md:inline text-gator-yellow">•</span>
            <span className="hidden md:inline">Family Owned Since 2005</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/GatorSigns/" target="_blank" rel="noopener noreferrer" className="hover:text-gator-yellow transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/GatorSigns/" target="_blank" rel="noopener noreferrer" className="hover:text-gator-yellow transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@gatorgrafix" target="_blank" rel="noopener noreferrer" className="hover:text-gator-yellow transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a href="https://x.com/GatorSigns" target="_blank" rel="noopener noreferrer" className="hover:text-gator-yellow transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <nav aria-label="Main Navigation" className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-md shadow-lg border-b-4 border-gator-green'
        : 'bg-gator-yellow border-b-4 border-black'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/Gator Grafix Logo New 2026.webp"
                alt="Gator Grafix logo - Family owned custom sign shop in Pensacola, Florida"
                className="h-16 w-auto hover:scale-105 transition-transform drop-shadow-lg"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2.5 font-display uppercase text-sm tracking-wide transition-all duration-300 rounded-xl ${location.pathname === link.path
                    ? 'bg-gator-red text-white shadow-[4px_4px_0_#000]'
                    : 'text-black hover:bg-gator-green hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="gator-btn text-sm py-2.5 px-5 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 border-3 border-black bg-white rounded-xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#45B653] transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden bg-gator-yellow border-t-4 border-black absolute w-full shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block w-full text-left font-display uppercase text-lg py-3 px-4 rounded-xl transition-colors ${location.pathname === link.path
                    ? 'bg-gator-red text-white'
                    : 'hover:bg-gator-green hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block gator-btn text-center mt-4"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="page-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-gator-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <img
                src="/Gator Grafix Logo New 2026.webp"
                alt="Gator Grafix official logo - High-quality vehicle wraps and signs in Pensacola"
                className="h-24 w-auto mb-4"
                loading="lazy"
              />
              <p className="text-gray-400 text-sm mb-4">
                Family-owned sign shop in Pensacola, Florida since 2005. Quality printing with a personal touch and the lowest prices guaranteed!
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/GatorSigns/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all shadow-lg" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/GatorSigns/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-all shadow-lg" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@gatorgrafix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-all shadow-lg" aria-label="TikTok">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a href="https://x.com/GatorSigns" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-all shadow-lg" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display uppercase text-gator-yellow text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/vinyl-installation" className="text-gray-400 hover:text-white transition-colors">Vinyl Installation</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display uppercase text-gator-yellow text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services/vehicle-wraps" className="text-gray-400 hover:text-white transition-colors">Vehicle Wraps</Link></li>
                <li><Link to="/services/signs-banners" className="text-gray-400 hover:text-white transition-colors">Signs & Banners</Link></li>
                <li><Link to="/services/t-shirts" className="text-gray-400 hover:text-white transition-colors">T-Shirt Printing</Link></li>
                <li><Link to="/services/business-cards" className="text-gray-400 hover:text-white transition-colors">Business Cards</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display uppercase text-gator-yellow text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gator-green flex-shrink-0 mt-0.5" />
                  <a href="tel:8504780486" className="text-gray-400 hover:text-white transition-colors">(850) 478-0486</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gator-green flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <EmailProtection
                    user="sales"
                    domain="signgator.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  />
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gator-green flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">8447 Pensacola Blvd<br />Pensacola, FL 32534</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Gator Grafix / SignGator.com. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gator-green font-display">Family Owned</span>
              <span className="text-gator-yellow">•</span>
              <span className="text-gator-red font-display">Pensacola Proud</span>
              <span className="text-gator-yellow">•</span>
              <span className="text-gator-green font-display">Since 2005</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
