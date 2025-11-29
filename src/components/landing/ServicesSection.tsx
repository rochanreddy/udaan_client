import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ServiceItemProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  index: number;
}

const ServiceItem = ({ title, description, features, image, imageAlt, reverse = false, index }: ServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 sm:gap-12 items-center`}
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
        className="flex-1 w-full"
      >
        <div className="rounded-3xl overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-contain"
          />
        </div>
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        className="flex-1 w-full"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary">
              {title}
            </h3>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="space-y-4 pt-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      title: 'Spoken English Training',
      description: 'Master the art of fluent English communication with our comprehensive spoken English program. Build confidence, improve pronunciation, and enhance your conversational skills through interactive sessions and real-world practice scenarios.',
      features: [
        'Interactive speaking sessions with native-like pronunciation',
        'Daily conversation practice and role-playing exercises',
        'Vocabulary building and idiomatic expressions',
        'Confidence building through public speaking activities',
        'Personalized feedback and progress tracking'
      ],
      image: '/images/download.svg',
      imageAlt: 'Spoken English Training',
      reverse: false,
    },
    {
      title: 'Competitive Exam Preparation',
      description: 'Excel in competitive exams with our specialized English preparation courses. We provide targeted training for SSC, Banking, CLAT, and other government exams with comprehensive study materials and strategic approaches.',
      features: [
        'Comprehensive coverage of all exam patterns and syllabi',
        'Previous year question papers and mock tests',
        'Time management and exam strategy workshops',
        'Regular performance analysis and improvement plans',
        'Expert guidance from experienced exam trainers'
      ],
      image: '/images/download -1.svg',
      imageAlt: 'Competitive Exam Preparation',
      reverse: true,
    },
    {
      title: 'Grammar & Vocabulary Mastery',
      description: 'Strengthen your English foundation with our intensive grammar and vocabulary programs. Learn complex grammar rules, expand your word bank, and apply them effectively in both written and spoken communication.',
      features: [
        'Systematic grammar rules and usage explanations',
        'Extensive vocabulary building with root words and etymology',
        'Practice exercises and quizzes for reinforcement',
        'Common errors and how to avoid them',
        'Application-based learning for real-world usage'
      ],
      image: '/images/download -2.svg',
      imageAlt: 'Grammar & Vocabulary Training',
      reverse: false,
    },
    {
      title: 'Professional English Development',
      description: 'Enhance your professional communication skills for career advancement. Our program focuses on business English, email writing, presentation skills, and workplace communication to help you excel in your career.',
      features: [
        'Business communication and email etiquette',
        'Presentation skills and public speaking',
        'Interview preparation and resume writing',
        'Professional networking and meeting skills',
        'Industry-specific vocabulary and terminology'
      ],
      image: '/images/download.svg',
      imageAlt: 'Professional English Development',
      reverse: true,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-24 pl-6 pr-2 sm:pl-6 sm:pr-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto sm:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 bg-accent/20 text-primary"
          >
            Our Services
          </motion.span>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Comprehensive English
            <br />
            <span className="text-primary">Learning Solutions</span>
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of specialized English training programs designed to meet your unique learning goals and career aspirations
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-32">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

