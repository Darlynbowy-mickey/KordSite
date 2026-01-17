import { motion } from 'framer-motion';
import { Headphones, Package, Truck, ShoppingBag, type LucideIcon } from 'lucide-react';

// 1. Define the Service type
interface Service {
  icon: LucideIcon; // Correct type for lucide-react icons
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Headphones,
    title: 'Call-centers',
    description: 'Worldwide call centers with qualified experts that could answer all your questions',
  },
  {
    icon: Package,
    title: 'Package',
    description: 'Convenient and strong packing system allows to receive your order in the best condition',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Fast and well-time delivery worldwide',
  },
  {
    icon: ShoppingBag,
    title: 'Market',
    description: 'You can choose hundreds of different positions in our catalog and pick up the goods that you really need',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-20"
        >
          What we do
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            // 2. Destructure the icon as a component (capitalized)
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-8"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}