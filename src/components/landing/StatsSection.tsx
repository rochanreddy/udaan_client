import { motion, useInView } from 'framer-motion';
import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  icon: React.ElementType;
  number: string;
  label: string;
  index: number;
}

const CountUpNumber = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const StatItem = ({ icon: Icon, number, label, index }: StatItemProps) => {
  // Parse the number string to extract numeric value and suffix
  const parseNumber = (numStr: string) => {
    // Remove commas and extract number and suffix
    const match = numStr.match(/([\d,]+)(.*)/);
    if (!match) return { value: 0, suffix: numStr };
    
    const numericValue = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2] || '';
    
    return { value: numericValue, suffix };
  };

  const { value, suffix } = parseNumber(number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
          <Icon className="w-8 h-8 text-accent-foreground" />
        </div>
      </div>
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="text-5xl md:text-6xl font-bold mb-2 text-foreground"
      >
        <CountUpNumber value={value} suffix={suffix} duration={2} />
      </motion.h3>
      <p className="text-lg md:text-xl text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Students',
    },
    {
      icon: Award,
      number: '95%',
      label: 'Success Rate',
    },
    {
      icon: BookOpen,
      number: '50+',
      label: 'Expert Trainers',
    },
    {
      icon: TrendingUp,
      number: '15+',
      label: 'Years Experience',
    },
  ];

  return (
    <section className="contain-abs py-24 pl-6 pr-2 sm:pl-6 sm:pr-6 lg:px-8 bg-card">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl max-w-[50vw] max-h-[50vh]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl max-w-[50vw] max-h-[50vh]"></div>
      </div>

      <div className="max-w-7xl mx-auto sm:mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 bg-accent/20 text-primary"
          >
            Our Achievements
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Numbers That Speak
            <br />
            <span className="text-primary">For Our Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by thousands of students across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

