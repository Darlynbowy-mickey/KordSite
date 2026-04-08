import { motion } from 'framer-motion';
import { Headphones, Package, Truck, ShoppingBag, type LucideIcon, Warehouse } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Headphones,
    title: 'Call-centers',
    description: 'Specialized experts across Africa providing multilingual support and real-time assistance.',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    description: 'Reinforced, eco-friendly packing systems designed to withstand long-distance transit.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Strategic logistics network ensuring rapid, time-sensitive delivery to every corner of the continent.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Secure, temperature-controlled storage solutions with intelligent inventory tracking.',
  },
  {
    icon: ShoppingBag,
    title: 'Global Market',
    description: 'Access a curated catalog of hundreds of products with seamless procurement options.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-light text-gray-900">What we do</h3>
        </motion.div>

        {/* Modern Grid: 
            - 1 column on mobile 
            - 2 columns on tablet 
            - 3 columns on desktop (cleaner for 5 items than a cramped 4-column row)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="flex gap-6">
                  {/* Icon with a soft shadow/glow effect on hover */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-500 group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.4)] transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}