import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const CTASection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
    <div className="max-w-4xl mx-auto text-center pl-4 sm:pl-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
          Take Your English Skills to the Next Level
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90">
          Join thousands of successful students who transformed their careers with Udaan
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full text-lg shadow-xl"
        >
          Join Udaan Today
        </Button>
      </motion.div>
    </div>
  </section>
);
