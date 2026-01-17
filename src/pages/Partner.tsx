import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Handshake, TrendingUp, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../lib/utils/index';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access to markets in 30+ countries across 4 continents',
  },
  {
    icon: TrendingUp,
    title: 'Proven Success',
    description: 'Join the largest e-commerce company in Latin America, Africa and Southeast Asia',
  },
  {
    icon: Shield,
    title: 'Full Support',
    description: 'Comprehensive support from logistics to marketing to customer service',
  },
  {
    icon: Handshake,
    title: 'Fair Partnership',
    description: 'Transparent terms and mutual growth opportunities',
  },
];

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description: 'Fill out the contact form with your business details and partnership interests.',
  },
  {
    number: '02',
    title: 'Consultation',
    description: 'Our team will review your application and schedule a consultation call.',
  },
  {
    number: '03',
    title: 'Agreement',
    description: 'We finalize partnership terms and sign the agreement.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Start selling your products through our global e-commerce network.',
  },
];

export default function Partner() {
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
              Become Our Partner
            </h1>
            <p className="text-xl text-gray-300">
              Join our global network and take your business to new heights with 2WTRADE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of becoming a 2WTRADE partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-50 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your partnership journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <span className="text-5xl font-bold text-amber-500/20">{step.number}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-amber-300 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Requirements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                What We Look For
              </h2>
              <p className="text-gray-600 mb-8">
                We're seeking partners who share our vision for global e-commerce excellence. Whether you're a manufacturer, distributor, or brand owner, we want to hear from you.
              </p>
              <ul className="space-y-4">
                {[
                  'Quality products with market demand',
                  'Commitment to customer satisfaction',
                  'Capacity to scale operations',
                  'Interest in international expansion',
                  'Alignment with our values and ethics',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
                alt="Partnership"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500/20 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to Start?
            </h2>
            <p className="text-lg text-amber-100 mb-10">
              Contact us today to discuss partnership opportunities and take the first step towards global success.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white hover:bg-gray-100 text-amber-600 px-10 py-6 text-base font-medium rounded-sm group">
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}