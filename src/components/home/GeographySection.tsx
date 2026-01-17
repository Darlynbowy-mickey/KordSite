import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const regions = [
  {
    name: 'Americas',
    countries: ['Mexico', 'Argentina', 'Paraguay', 'Costa Rica', 'Ecuador', 'Honduras', 'Nicaragua', 'Panama', 'Colombia', 'Chile', 'Guatemala', 'El Salvador', 'Uruguay', 'Peru', 'Brazil', 'Bolivia', 'Dominican Republic'],
  },
  {
    name: 'Asia Pacific',
    countries: ['Indonesia', 'India', 'Taiwan', 'Thailand', 'Japan', 'Malaysia', 'Korea', 'Cambodia', 'Singapore', 'Hong Kong', 'Philippines', 'Sri-Lanka'],
  },
  {
    name: 'Middle East & Africa',
    countries: ['United Arab Emirates', 'Ghana', 'Kenya', 'Nigeria'],
  },
];

export default function GeographySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Geography</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our global presence spans across 30+ countries on 4 continents
          </p>
        </motion.div>

        {/* World Map Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="aspect-2/1 bg-linear-to-br from-slate-100 to-slate-50 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-32 h-32 text-amber-500/20" strokeWidth={0.5} />
            </div>
            {/* Animated dots representing locations */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="absolute w-3 h-3 bg-amber-500 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                >
                  <span className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-30"></span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-amber-500/30">
                {region.name}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {region.countries.map((country) => (
                  <li key={country} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}