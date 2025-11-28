import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Target, Trophy } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
  index: number;
}

const ProcessStep = ({ icon: Icon, title, description, step, index }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        {/* Step Number */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg relative z-10">
            <Icon className="w-10 h-10 text-accent-foreground" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            {step}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-base text-muted-foreground max-w-xs">{description}</p>
      </div>

      {/* Connector Line (except for last item) */}
      {index < 3 && (
        <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent to-accent/30 -z-10">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent"></div>
        </div>
      )}
    </motion.div>
  );
};

export const ProcessSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Enroll',
      description: 'Sign up for your preferred course and join our learning community',
      step: 1,
    },
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Attend interactive classes with expert trainers and comprehensive materials',
      step: 2,
    },
    {
      icon: Target,
      title: 'Practice',
      description: 'Participate in mock tests, assignments, and regular practice sessions',
      step: 3,
    },
    {
      icon: Trophy,
      title: 'Succeed',
      description: 'Achieve your goals with our proven methodology and continuous support',
      step: 4,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 bg-accent/20 text-primary"
          >
            How It Works
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Your Learning
            <br />
            <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to transform your English skills and achieve your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 relative">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

