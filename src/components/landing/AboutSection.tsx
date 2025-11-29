import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  const values = [
    'Student-centric approach with personalized attention',
    'Innovative teaching methods and modern curriculum',
    'Proven track record of success in competitive exams',
    'Affordable pricing with flexible payment options',
    'Continuous support and mentorship throughout the journey',
    'Regular updates aligned with latest exam patterns',
  ];

  return (
    <section id="about" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto pl-4 sm:pl-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/images/download -3.svg"
                alt="About Udaan English Training Center"
                className="w-full h-[300px] sm:h-[500px] object-contain"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-accent rounded-xl sm:rounded-2xl opacity-20 -z-10"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 bg-accent/20 text-primary"
              >
                About Us
              </motion.span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
                Empowering Students
                <br />
                <span className="text-primary">Since 2008</span>
              </h2>
            </div>

            <p className="text-sm sm:text-lg leading-relaxed text-muted-foreground">
              Udaan English Training Center has been a trusted name in English education for over 15 years. 
              We specialize in transforming students' English skills through innovative teaching methodologies, 
              expert guidance, and personalized attention.
            </p>

            <p className="text-sm sm:text-lg leading-relaxed text-muted-foreground">
              Our mission is to make quality English education accessible to everyone, helping thousands of 
              students achieve their dreams in competitive exams and professional growth.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-foreground">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

