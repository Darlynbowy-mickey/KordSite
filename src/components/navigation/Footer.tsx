import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils/index';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold text-amber-500">W</span>
              <div className="ml-2 text-xs leading-tight text-white">
                <div className="font-semibold">KORD</div>
                <div>SOLUTIONS</div>
                <div>ENTERPRISE</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              A pioneer company in the area of e-Commerce, implementing a global mission on creating modern technological infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Call-centers', 'Package', 'Delivery', 'Market'].map((service) => (
                <li key={service} className="text-sm">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Global Headquarters<br />Ghana</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-amber-500" />
                <a href="mailto:info@kordsolenterprise.com" className="hover:text-amber-500 transition-colors">
                  info@kordsolenterprise.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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