import { motion } from 'framer-motion';
import { UserCheck, UsersRound, ClipboardCheck, FileText, PlayCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative"
  >
    <div className="flex items-start gap-6 p-8 rounded-3xl bg-background border-2 border-transparent hover:border-primary transition-all duration-300">
      {/* Large Icon */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
          <Icon className="w-10 h-10 text-accent-foreground" />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-primary">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      
      {/* Number Badge */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-sm font-bold text-primary">{index + 1}</span>
      </div>
    </div>
  </motion.div>
);

export const FeaturesSection = () => {
  const features = [
    {
      icon: UserCheck,
      title: 'Expert Trainers',
      description: 'Learn from experienced professionals with proven track records in English training and competitive exam preparation.',
    },
    {
      icon: UsersRound,
      title: 'Small Batches',
      description: 'Personalized attention in intimate learning environments where every student gets the focus they deserve.',
    },
    {
      icon: ClipboardCheck,
      title: 'Exam-Focused',
      description: 'Targeted preparation for SSC, Banking, CLAT and more with comprehensive study materials and strategies.',
    },
    {
      icon: FileText,
      title: 'Mock Tests',
      description: 'Regular practice tests to track your progress and identify areas for improvement with detailed feedback.',
    },
    {
      icon: PlayCircle,
      title: 'Free Demo Class',
      description: 'Experience our teaching methodology before enrolling and see why thousands of students trust Udaan.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
            Why Choose Udaan?
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Your Success Journey
            <br />
            <span className="text-primary">Starts Here</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Udaan the preferred choice for English learning and competitive exam success
          </p>
        </motion.div>

        <div className="space-y-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
