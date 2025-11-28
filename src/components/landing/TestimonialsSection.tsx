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
  <div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg bg-secondary h-full flex flex-col">
    <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 flex-shrink-0">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current text-accent" />
      ))}
    </div>
    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 italic text-foreground leading-relaxed flex-grow">"{text}"</p>
    <div className="mt-auto pt-2 sm:pt-3 border-t border-border/30">
      <p className="font-bold text-primary text-sm sm:text-base mb-0.5 sm:mb-1">{name}</p>
      <p className="text-xs sm:text-sm text-muted-foreground">{role}</p>
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
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto pl-4 sm:pl-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5 md:mb-6 bg-accent/20 text-primary"
          >
            Testimonials
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-primary leading-tight px-2 sm:px-0">
            What Our Students Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2 sm:px-0">Success stories from our community</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative -mx-1 sm:-mx-2 md:mx-0"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              duration: 25,
              dragFree: true,
              containScroll: 'trimSnaps',
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-[85%] md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-10 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-10 lg:-right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
