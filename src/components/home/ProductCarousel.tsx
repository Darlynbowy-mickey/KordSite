import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Diacare from '../../assets//DiacareM.png';
import Restorex from '../../assets/Restorex.jpeg';
import MaxiFlex from '../../assets/maxiFlexM.png';
import Postaguard from '../../assets/Postagurad.jpeg';
import Incasol from '../../assets/IncasolM.png';



const products = [
  {
    id: 1,
    name: 'Diacare Advanced Support Formula',
    category: 'Dietary Supplement',
    description: 'A supplement designed to regulate blood sugar levels, amplify metabolism rate, and support pancreatic health. Contains 30 capsules.',
    price: 'GH₵550.00',
    color: 'bg-blue-600',
    image: Diacare,
  },
  {
    id: 2,
    name: 'Incasol+',
    category: 'Dietary Supplement',
    description: 'Advanced heart health support formulated to normalize blood pressure, improve heart function, and strengthen blood vessels. Contains 30 capsules.',
    price: 'GH₵490.00',
    color: 'bg-red-800',
    image: Incasol,
  },
  {
    id: 3,
    name: 'ProstaGuard',
    category: 'Dietary Supplement',
    description: 'Targeted support for prostatitis and potency. Helps reduce tension, support urinary flow, and maintain male health. Contains 30 capsules.',
    price: 'GH₵650.00',
    color: 'bg-black',
    image: Postaguard,
  },
{
    id: 4,
    name: 'Maxiflex Body Soothing Balm',
    category: 'Cosmetic Use',
    description: 'A 50 ML soothing balm for the body with a unique green and blue design, made in Europe.',
    price: 'GH₵500.00',
    color: 'bg-emerald-500',
    image: MaxiFlex,
  },
  {
    id: 5,
    name: 'Restorex Premium Balm',
    category: 'Health & Wellness',
    description: 'A targeted topical soothing balm designed to provide relief for muscle, waist, joint, arthritic, and sciatica pain.',
    price: 'GH₵490.00',
    color: 'bg-red-600',
    image: Restorex,
  }
];

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds feels more premium than 2, but change to 2000 if preferred
    return () => clearInterval(timer);
  }, []);

  const nextStep = () => setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  const prevStep = () => setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">Featured Collection</h2>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900">Innovation in every detail.</h3>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={prevStep} className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextStep} className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative min-h-125 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Product Image */}
              <div className="relative group">
                <div className={`absolute -inset-4 rounded-3xl opacity-10 blur-2xl transition-colors duration-500 ${products[index].color}`} />
                <img
                  src={products[index].image}
                  alt={products[index].name}
                  className="relative rounded-2xl object-cover aspect-square md:aspect-video lg:aspect-square w-full shadow-2xl"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <span className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600">
                  {products[index].category}
                </span>
                <h4 className="text-5xl font-semibold text-gray-900 leading-tight">
                  {products[index].name}
                </h4>
                <p className="text-xl text-gray-500 leading-relaxed">
                  {products[index].description}
                </p>
                
                {/* <div className="flex items-center gap-6 pt-4">
                  <span className="text-3xl font-light text-gray-900">{products[index].price}</span>
                  <button className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </button>
                  <button className="flex items-center gap-1 text-gray-900 font-medium hover:gap-2 transition-all">
                    Details <ArrowRight className="w-5 h-5" />
                  </button>
                </div> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === i ? 'w-12 bg-amber-500' : 'w-4 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}