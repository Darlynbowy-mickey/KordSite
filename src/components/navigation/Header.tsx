import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils/index';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About us', page: 'About' },
    { name: 'What we do', page: 'Services' },
    { name: 'Become our partner', page: 'Partner' },
    { name: 'Contact us', page: 'Contact' },
  ];

  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
   <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <Link to={createPageUrl('Home')} onClick={scrollToTop} className="flex items-center gap-3">
        <div className="flex items-center group cursor-pointer">
          {/* The 3-Bar Logo Icon */}
          <div className="flex flex-col gap-1 mr-3">
            {/* Top Bar - Shifted Right */}
            <div className="h-1.5 w-8 bg-orange-500 rounded-full translate-x-1" />
            
            {/* Middle Bar - Shifted Left */}
            <div className="h-1.5 w-8 bg-red-600 rounded-full -translate-x-1" />
            
            {/* Bottom Bar - Shifted Right */}
            <div className="h-1.5 w-8 bg-red-800 rounded-full translate-x-1" />
          </div>

          {/* The Text Part */}
          <div className={`flex flex-col leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            <span className="text-2xl font-bold tracking-tight">KORD</span>
            <span className="text-sm font-medium tracking-wider text-orange-600">
              Solutions
            </span>
          </div>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.page}
            to={createPageUrl(link.page)}
            className={`text-sm font-medium transition-colors hover:text-amber-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
      >
        <nav className="flex flex-col py-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={createPageUrl(link.page)}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-gray-700 hover:text-amber-500 hover:bg-gray-50 transition-colors text-center font-medium border-b border-gray-50 last:border-none"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
</header>
  );
}