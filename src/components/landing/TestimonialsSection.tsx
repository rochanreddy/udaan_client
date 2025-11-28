import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, role, text, rating }: TestimonialCardProps) => (
  <div className="p-8 rounded-2xl shadow-lg bg-secondary h-full">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current text-accent" />
      ))}
    </div>
    <p className="text-lg mb-6 italic text-foreground">"{text}"</p>
    <div>
      <p className="font-bold text-primary">{name}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'SSC CGL Qualifier',
      text: 'Udaan helped me improve my English score by 30 marks! The trainers are excellent and the study material is top-notch.',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      role: 'Bank PO',
      text: 'Best decision I made for my exam preparation. The mock tests and personalized attention made all the difference.',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      role: 'Working Professional',
      text: 'My spoken English has improved dramatically. I now confidently communicate in my workplace. Thank you Udaan!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'CLAT Aspirant',
      text: 'The comprehensive study material and regular mock tests helped me crack CLAT. The trainers are very supportive and knowledgeable.',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'Banking Exam Qualifier',
      text: 'Excellent teaching methodology! The grammar tricks and vocabulary building sessions were game-changers for my exam preparation.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      role: 'SSC CHSL Qualifier',
      text: 'Small batch sizes ensured personalized attention. The doubt clearing sessions were very helpful. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
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
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground">Success stories from our community</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              duration: 25,
              dragFree: true,
              containScroll: 'trimSnaps',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="h-full"
                  >
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
