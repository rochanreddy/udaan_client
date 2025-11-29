import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  info: string;
  delay: number;
}

const ContactItem = ({ icon: Icon, title, info, delay }: ContactItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-4 sm:p-8 rounded-xl sm:rounded-2xl text-center shadow-lg bg-secondary"
  >
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-accent">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">{title}</h3>
    <p className="text-sm sm:text-base text-foreground">{info}</p>
  </motion.div>
);

export const ContactSection = () => {
  const contacts = [
    { icon: Phone, title: 'Phone', info: '+91 98765 43210' },
    { icon: Mail, title: 'Email', info: 'info@udaanenglish.com' },
    { icon: MapPin, title: 'Location', info: 'Mumbai, Maharashtra' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto pl-4 sm:pl-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary">Get In Touch</h2>
          <p className="text-sm sm:text-xl text-muted-foreground">We're here to help you succeed</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {contacts.map((contact, i) => (
            <ContactItem key={i} {...contact} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
