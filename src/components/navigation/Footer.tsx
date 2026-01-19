import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils/index';
import { Mail, MapPin, Phone } from 'lucide-react';



 


export default function Footer() {
  const currentYear = new Date().getFullYear();
   const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
   <footer className="bg-slate-900 text-gray-400">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
    {/* GRID: Changed justify-items-center to handle child alignment */}
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">  
      
      {/* Column 1: Logo & Mission */}
      {/* Added flex flex-col items-center text-center for mobile, reset at md */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <Link to={createPageUrl('Home')} onClick={scrollToTop} className="flex items-center gap-3">
        <div className="flex items-center group cursor-pointer mb-6">
          <div className="flex flex-col gap-1 mr-3">
            <div className="h-1.5 w-8 bg-orange-500 rounded-full translate-x-1" />
            <div className="h-1.5 w-8 bg-red-600 rounded-full -translate-x-1" />
            <div className="h-1.5 w-8 bg-red-800 rounded-full translate-x-1" />
          </div>
          <div className="flex flex-col leading-none text-white">
            <span className="text-2xl font-bold tracking-tight">KORD</span>
            <span className="text-sm font-medium tracking-wider text-orange-600">
              Solutions
            </span>
          </div>
        </div>
        </Link>
        <p className="text-sm leading-relaxed max-w-xs">
          A pioneer company in the area of e-Commerce, implementing a global mission on creating modern technological infrastructure.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3">
          {['About', 'Services', 'Career', 'Contact'].map((page) => (
            <li key={page}>
              <Link
                to={createPageUrl(page)}
                className="text-sm hover:text-amber-500 transition-colors"
              >
                {page === 'Services' ? 'What we do' : page}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Services */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h4 className="text-white font-semibold mb-6">Our Services</h4>
        <ul className="space-y-3">
          {['Call-centers', 'Package', 'Delivery', 'Market'].map((service) => (
            <li key={service} className="text-sm">{service}</li>
          ))}
        </ul>
      </div>

      {/* Column 4: Contact */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
        <ul className="space-y-3">
          <li className="flex flex-col items-center md:flex-row md:items-start gap-3 text-sm">
            <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <span>Global Headquarters<br />Ghana</span>
          </li>
          <li className="flex flex-col items-center md:flex-row md:items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-amber-500" />
            <a href="mailto:info@kordsolenterprise.com" className="hover:text-amber-500 transition-colors">
              info@kordsolenterprise.com
            </a>
          </li>
          <li className="flex flex-col items-center md:flex-row md:items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-amber-500" />
            <span>+233 (249) 007-390</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p className="text-sm">
        © {currentYear} Kord Solutions Enterprise. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
  );
}