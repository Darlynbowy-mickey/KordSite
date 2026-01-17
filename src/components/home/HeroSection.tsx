import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils/index';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video/Image with Overlay */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-delivery-person-handing-package-to-customer-5237/1080p.mp4" type="video/mp4" />
                </video>
                {/* Fallback image if video doesn't load */}
                <img
                    src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
                    alt="Delivery background"
                    className="w-full h-full object-cover absolute inset-0"
                    style={{ display: 'none' }}
                    // Fix: Cast e.currentTarget as HTMLImageElement
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'block';
                    }}
                />
                <div className="absolute inset-0 bg-slate-800/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20 md:pt-0">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 md:mb-8"
                >
                    We are a pioneer company in the area of{' '}
                    <span className="font-semibold">e-Commerce</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6 max-w-3xl mx-auto"
                >
                    Which is why other companies take an example from us. We are implementing a global mission on creating modern technological infrastructure to manage direct sales and are developing on a global scale.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto"
                >
                    Everything we do is aimed to unite the world, countries and peoples, which underscores our cosmopolitanism.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link to={createPageUrl('Contact')}>
                        <Button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-base font-medium rounded-sm">
                            Sell with us
                        </Button>
                    </Link>
                    <Link to={createPageUrl('About')}>
                        <Button
                            variant="outline"
                            className="border-white/50 text-white hover:bg-white/10 px-10 py-6 text-base font-medium rounded-sm bg-transparent"
                        >
                            Read more
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}