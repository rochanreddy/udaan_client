import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  duration: string;
  features: string[];
  price: string;
}

const CourseCard = ({ title, duration, features, price }: CourseCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-8 rounded-2xl shadow-xl bg-secondary"
  >
    <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
      <Clock className="w-4 h-4" />
      <span className="text-sm">{duration}</span>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
          <span className="text-foreground">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mb-4">
      <span className="text-sm text-muted-foreground">Starting from</span>
      <p className="text-2xl font-bold text-primary">{price}</p>
    </div>
    <Button className="w-full rounded-full">Explore Course</Button>
  </motion.div>
);

export const CoursesSection = () => {
  const courses = [
    {
      title: 'Spoken English (Beginner)',
      duration: '3 Months',
      features: [
        'Basic grammar foundation',
        'Pronunciation practice',
        'Daily conversation skills',
        'Confidence building',
      ],
      price: '₹4,999',
    },
    {
      title: 'SSC English Crash Course',
      duration: '2 Months',
      features: [
        'Grammar rules & tricks',
        'Vocabulary building',
        'Comprehension practice',
        'Previous year papers',
      ],
      price: '₹6,999',
    },
    {
      title: 'Banking English',
      duration: '2.5 Months',
      features: [
        'Reading comprehension',
        'Cloze tests',
        'Error detection',
        'Para jumbles',
      ],
      price: '₹7,499',
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Top Courses
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect course for your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
