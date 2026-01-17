import { motion } from 'framer-motion';
import { Headphones, Package, Truck, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../lib/utils/index';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Headphones,
    title: 'Call-centers',
    description: 'Worldwide call centers with qualified experts that could answer all your questions',
    features: [
      '24/7 customer support',
      'Multilingual agents',
      'Quick response times',
      'Professional training programs',
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  },
  {
    icon: Package,
    title: 'Package',
    description: 'Convenient and strong packing system allows to receive your order in the best condition',
    features: [
      'Premium packaging materials',
      'Eco-friendly options',
      'Custom branding available',
      'Damage protection guaranteed',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Fast and well-time delivery worldwide',
    features: [
      'Express shipping options',
      'Real-time tracking',
      'International coverage',
      'Reliable delivery partners',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    icon: ShoppingBag,
    title: 'Market',
    description: 'You can choose hundreds of different positions in our catalog and pick up the goods that you really need',
    features: [
      'Wide product selection',
      'Competitive pricing',
      'Quality assurance',
      'Regular new arrivals',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              What We Do
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive e-commerce solutions designed to help your business thrive in the global market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 mb-6 rounded-xl bg-amber-50 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-2xl"
                  />
                  <div className={`absolute -z-10 w-48 h-48 bg-amber-500/20 rounded-xl ${
                    index % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'
                  }`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Partner with us and leverage our global e-commerce infrastructure to reach customers worldwide.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-base font-medium rounded-sm group">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}