import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils/index';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/20 rounded-lg -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              KORD SOLUTIONS
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              KORD SOLUTIONS is at the forefront of e-Commerce, which is why other companies take an example from us. We are implementing a global mission on creating modern technological infrastructure to manage direct sales and are developing on a global scale. Our work transcends borders, bridging countries and cultures through a shared global vision.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              In order to set up our african company we did a great amount of preparatory work. On 11 March 2024 our team KORD SOLUTIONS entered the market. At this point, KORD SOLUTIONS has more than 500 fellows in more than 4 countries across Africa. We are already one of the largest and most successful е-Commerce company in Africa.
            </p>
            <Link to={createPageUrl('About')}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-base font-medium rounded-sm group">
                Read more
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}