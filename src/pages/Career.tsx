import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, ChevronDown, ChevronUp, Briefcase, Users, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../lib/utils/index';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const perks = [
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Clear path for advancement with regular promotions and skill development programs.',
  },
  {
    icon: Users,
    title: 'Global Team',
    description: 'Work with talented colleagues from over 20 countries around the world.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and remote work options to suit your lifestyle.',
  },
  {
    icon: Zap,
    title: 'Competitive Benefits',
    description: 'Comprehensive health insurance, paid time off, and performance bonuses.',
  },
];

const openings = [
  {
    id: 1,
    title: 'Senior Sales Manager',
    department: 'Sales',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Lead our sales team to drive revenue growth across Southeast Asian markets.',
    requirements: [
      '5+ years of sales management experience',
      'Proven track record in e-commerce',
      'Excellent leadership and communication skills',
      'Fluency in English required',
    ],
  },
  {
    id: 2,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Mexico City',
    type: 'Full-time',
    description: 'Develop and execute marketing campaigns for Latin American markets.',
    requirements: [
      '3+ years of digital marketing experience',
      'Experience with social media and content marketing',
      'Strong analytical skills',
      'Fluency in Spanish and English',
    ],
  },
  {
    id: 3,
    title: 'Customer Service Team Lead',
    department: 'Customer Service',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage and mentor a team of customer service representatives.',
    requirements: [
      '3+ years of customer service experience',
      '1+ years in a supervisory role',
      'Excellent problem-solving abilities',
      'Ability to work in a fast-paced environment',
    ],
  },
  {
    id: 4,
    title: 'Logistics Coordinator',
    department: 'Operations',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Coordinate shipping and logistics operations for Indonesia region.',
    requirements: [
      '2+ years of logistics experience',
      'Knowledge of international shipping',
      'Strong organizational skills',
      'Proficiency in logistics software',
    ],
  },
];

export default function Career() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300">
              Build your career with a global leader in e-commerce. We're always looking for talented individuals to join our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks Section */}
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
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job – we offer a career filled with opportunities and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-50 flex items-center justify-center">
                  <perk.icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Our team"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/20 rounded-xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                A Global Family
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At KORD SOLUTIONS, we believe that our people are our greatest asset. With over 1,500 team members across 20+ countries, we've built a diverse and inclusive workplace where everyone can thrive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We celebrate different perspectives and backgrounds, knowing that diversity drives innovation and success. Whether you're in our Singapore headquarters or working remotely from another continent, you're part of our global family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Find your next opportunity with us
            </p>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        {expandedJob === job.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </CardHeader>
                  {expandedJob === job.id && (
                    <CardContent className="pt-0 border-t">
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                      <Link to={createPageUrl('Contact')}>
                        <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
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
              Don't See Your Perfect Role?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              We're always interested in hearing from talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-base font-medium rounded-sm group">
                Send Your Resume
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}