import { motion } from 'framer-motion';
import { Users, Target, Heart, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about what we do and strive for excellence in everything.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Collaboration and mutual support are at the core of our success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly seek new ways to improve and grow our business.',
  },
  {
    icon: Target,
    title: 'Focus',
    description: 'We stay focused on our goals and deliver results that matter.',
  },
];

const milestones = [
  { year: '2015', event: 'Company founded', description: '2WTRADE enters the market on June 17' },
  { year: '2016', event: 'Latin America expansion', description: 'Opened offices in 5 Latin American countries' },
  { year: '2018', event: 'Asia Pacific growth', description: 'Expanded to Southeast Asia markets' },
  { year: '2020', event: '1 million orders', description: 'Reached 1 million orders milestone' },
  { year: '2023', event: 'Global presence', description: 'Operating in 30+ countries worldwide' },
];

export default function About() {
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
              About Us
            </h1>
            <p className="text-xl text-gray-300">
              A pioneer company in the area of e-Commerce with a global mission to unite the world through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                2WTRADE is a pioneer company in the area of e-Commerce, which is why other companies take an example from us. We are implementing a global mission on creating modern technological infrastructure to manage direct sales and are developing on a global scale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Everything we do is aimed to unite the world, countries and peoples, which underscores our cosmopolitanism. In order to set up our international company we did a great amount of preparatory work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                On 17 June 2015 our team 2WTRADE entered the market. At this point, 2WTRADE has more than 1500 fellows in more than 20 countries across the world. We are already the largest and most successful е-Commerce company in Latin America, Africa and Southeast Asia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500/20 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1500+', label: 'Team Members' },
              { number: '30+', label: 'Countries' },
              { number: '1.5M+', label: 'Orders/Year' },
              { number: '100+', label: 'Partners' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-amber-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-16"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mb-6 rounded-lg bg-amber-50 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <span className="text-amber-500 font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">{milestone.event}</h3>
                  <p className="text-gray-600 mt-2">{milestone.description}</p>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-amber-500 rounded-full -translate-x-1/2 border-4 border-white shadow"></div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}