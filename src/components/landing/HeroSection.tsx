import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 pl-12 pr-0 sm:pl-6 sm:pr-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center" style={{ backgroundColor: '#EBD8C6' }}>
      {/* Organic Yellow Shape Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main organic yellow shape - vertical left edge, smooth curved top */}
          <path
            d="M0,0 L0,900 L250,900 C400,880 550,850 700,800 C800,770 900,730 1000,680 C1100,630 1150,580 1200,520 L1200,0 C1050,100 900,200 750,300 C600,400 450,500 300,600 C200,650 100,700 0,750 L0,0 Z"
            fill="hsl(43, 87%, 69%)"
            className="opacity-95"
          />
        </svg>
      </div>

      <div className="max-w-7xl ml-12 mr-0 sm:mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] text-foreground tracking-tight"
            >
              <span className="block mb-2">Modern English</span>
              <span className="block text-teal-600">Training Service</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl mb-8 leading-[1.7] text-foreground/80 max-w-lg font-normal"
            >
              Udaan is an acclaimed multidisciplinary training center specializing in spoken English, competitive exam preparation, and language skills that redefine learning excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button
                size="lg"
                className="rounded-md px-8 py-6 text-base font-medium bg-teal-600 hover:bg-teal-700 text-white shadow-lg flex items-center gap-2"
                style={{ backgroundColor: '#0d9488' }}
              >
                Explore Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 lg:pl-8 flex items-center justify-center"
          >
            <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
              <img
                src="/images/hero-section-image.svg"
                alt="Global English Learning Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
