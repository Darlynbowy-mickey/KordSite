import { motion } from 'framer-motion';
import { Handshake, Users, Award, type LucideIcon } from 'lucide-react'; // Import LucideIcon type

// 1. Define the interface
interface Principle {
  icon: LucideIcon;
  title: string;
  stat: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: Handshake,
    title: 'Honesty',
    stat: '100+',
    description: 'partners to whom we are fulfilling all obligations',
  },
  {
    icon: Users,
    title: 'Open-mindedness',
    stat: '500+',
    description: 'supporters, 4 offices in Africa',
  },
  {
    icon: Award,
    title: 'Professionalism',
    stat: '1.5M+',
    description: 'orders a year, shipping in 4 countries',
  },
];

export default function PrinciplesSection() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-center text-white mb-20"
        >
          Major principles
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            // 2. Capitalize the icon for JSX usage
            const IconComponent = principle.icon;
            
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center p-8 border border-slate-700 rounded-lg hover:border-amber-500/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{principle.title}</h3>
                <p className="text-4xl font-bold text-amber-500 mb-3">{principle.stat}</p>
                <p className="text-gray-400">{principle.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}