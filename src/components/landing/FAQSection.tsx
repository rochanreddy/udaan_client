import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer a wide range of courses including Spoken English (Beginner to Advanced), SSC English Crash Course, Banking English, CLAT preparation, and Professional English Development. Each course is designed to meet specific learning goals.',
    },
    {
      question: 'How long are the courses?',
      answer: 'Course duration varies: Spoken English courses are typically 3 months, competitive exam courses range from 2-3 months, and advanced programs can extend up to 6 months. We also offer flexible schedules for working professionals.',
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of 15-20 students to ensure personalized attention. This allows our trainers to focus on each student\'s individual needs and provide customized guidance.',
    },
    {
      question: 'Do you provide study materials?',
      answer: 'Yes, all enrolled students receive comprehensive study materials including textbooks, practice papers, previous year question papers, and access to our online learning portal with additional resources.',
    },
    {
      question: 'Can I attend a demo class before enrolling?',
      answer: 'Absolutely! We offer free demo classes where you can experience our teaching methodology, interact with trainers, and understand the course structure before making a commitment.',
    },
    {
      question: 'What is the fee structure?',
      answer: 'Our course fees range from ₹4,999 to ₹7,499 depending on the course. We also offer flexible payment options including monthly installments and early bird discounts. Contact us for detailed pricing information.',
    },
    {
      question: 'Do you provide online classes?',
      answer: 'Yes, we offer both offline and online classes. Our online classes are conducted through interactive platforms with the same quality of teaching and materials as our offline batches.',
    },
    {
      question: 'What is your success rate?',
      answer: 'We maintain a 95% success rate with thousands of students successfully clearing competitive exams and improving their English skills. Our proven methodology and expert trainers ensure consistent results.',
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto pl-4 sm:pl-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 bg-accent/20 text-primary"
          >
            Frequently Asked Questions
          </motion.span>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Got Questions?
            <br />
            <span className="text-primary">We Have Answers</span>
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground">
            Find answers to common questions about our courses and services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl sm:rounded-2xl px-4 sm:px-6 border-2 border-transparent hover:border-primary/20 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-lg font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

