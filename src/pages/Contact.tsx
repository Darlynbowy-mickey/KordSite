"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import emialjs from "@emailjs/browser";

const offices = [
  {
    city: 'Singapore',
    address: 'Global Headquarters',
    details: '1 Raffles Place, Tower 2',
  },
  {
    city: 'Mexico City',
    address: 'Latin America HQ',
    details: 'Paseo de la Reforma 250',
  },
  {
    city: 'Jakarta',
    address: 'Southeast Asia Office',
    details: 'Sudirman Central Business District',
  },
];

export default function Contact() {

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };



const SendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  emialjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formRef.current!,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  )
  .then(
    () => {
      // 1. Clear the actual form fields
      formRef.current?.reset();
      
      // 2. Clear the local React state
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });

      // 3. Stop loading and show the success component
      setIsSubmitting(false);
      setIsSubmitted(true);

      // 4. Scroll to the top of the form section so they see the success message
      window.scrollTo({ top: 400, behavior: 'smooth' });
    },
    (error) => {
      // Use your existing error handling
      console.error("EmailJS Error:", error);
      alert("Failed to send email. Please check your connection.");
      setIsSubmitting(false);
    }
  );
};

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Have questions or want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8">Send us a message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you within 24-48 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={SendEmail}  className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={handleSelectChange} value={formData.subject}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="career">Career Opportunity</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your inquiry..."
                      required
                      className="min-h-40 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-base font-medium rounded-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info omitted for brevity but preserved in your code */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8">Get in touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:info@kordsolutions.com"
                      className="text-gray-600 hover:text-amber-500 transition-colors"
                    >
                      info@kordsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+233 (249) 007-390</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{office.city}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                      <p className="text-sm text-gray-500">{office.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 bg-slate-800/10">
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8 bg-white/90 backdrop-blur rounded-xl shadow-lg">
              <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Headquarters</h3>
              <p className="text-gray-600">1 Raffles Place, Tower 2<br />Ghana</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}