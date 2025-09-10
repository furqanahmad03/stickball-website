"use client";

import { motion } from "framer-motion";
import { Quote, GraduationCap, Building2, ArrowRight, Building } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quoteKey: "testimonials.items.jenn.quote",
    author: "Dr. Jenn Chmiel",
    titleKey: "testimonials.items.jenn.title",
    rating: 5,
    icon: Building2,
    color: "green"
  },
  {
    id: 2,
    quoteKey: "testimonials.items.nathan.quote",
    author: "Nathan Saller",
    titleKey: "testimonials.items.nathan.title",
    rating: 5,
    icon: Building,
    color: "purple"
  },
  {
    id: 3,
    quoteKey: "testimonials.items.devin.quote",
    author: "Devin McCourty",
    titleKey: "testimonials.items.devin.title",
    rating: 5,
    icon: GraduationCap,
    color: "blue"
  },
  {
    id: 4,
    quoteKey: "testimonials.items.student.quote",
    author: "Student",
    titleKey: "testimonials.items.student.title",
    rating: 5,
    icon: Building2,
    color: "green"
  },
  {
    id: 5,
    quoteKey: "testimonials.items.dave.quote",
    author: "Dave Babineau",
    titleKey: "testimonials.items.dave.title",
    rating: 5,
    icon: Building,
    color: "purple"
  }
];

const colorVariants = {
  blue: {
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-200/50",
    icon: "from-blue-500 to-blue-600",
    text: "text-blue-700",
    accent: "text-blue-600"
  },
  green: {
    bg: "from-green-50 to-green-100/50",
    border: "border-green-200/50",
    icon: "from-green-500 to-green-600",
    text: "text-green-700",
    accent: "text-green-600"
  },
  purple: {
    bg: "from-purple-50 to-purple-100/50",
    border: "border-purple-200/50",
    icon: "from-purple-500 to-purple-600",
    text: "text-purple-700",
    accent: "text-purple-600"
  }
};

export default function Testimonials() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Set initial state

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  return (
    <section className="py-3 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-background dark:via-[#1c1c1c] dark:to-[#2c2c2c] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Testimonials Carousel */}
        <div className="py-8">
          <Carousel
            orientation="horizontal"
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-4xl mx-auto relative overflow-visible"
          >
            {/* Quote Counter */}
            <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              <span className="font-medium">{currentSlide + 1} of {testimonials.length}</span>
            </div>

            <CarouselContent className="-ml-1 py-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-1 basis-full px-4">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    className="group relative hover:scale-[1.02] transition-all duration-300 h-full m-4"
                  >
                    {/* Testimonial Card */}
                    <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 h-[500px] relative overflow-visible`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 bg-gradient-to-br rounded-3xl ${colorVariants[testimonial.color as keyof typeof colorVariants].bg} dark:from-gray-700/50 dark:to-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${colorVariants[testimonial.color as keyof typeof colorVariants].icon} shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 w-fit`}>
                          <Quote className="h-6 w-6 text-white" />
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-medium flex-1">
                          &quot;{t(testimonial.quoteKey)}&quot;
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-start gap-3 mt-auto">
                          {/* Icon Container */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${colorVariants[testimonial.color as keyof typeof colorVariants].icon} flex items-center justify-center shadow-lg`}>
                            <testimonial.icon className="h-6 w-6 text-white" />
                          </div>

                          {/* Author Details */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                              {testimonial.author}
                            </h4>
                            <p className={`text-sm ${colorVariants[testimonial.color as keyof typeof colorVariants].accent} font-semibold break-words`}>
                              {t(testimonial.titleKey)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Hover Border */}
                      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${testimonial.color}-200/50 dark:group-hover:border-${testimonial.color}-400/50 transition-all duration-300`} />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          {/* Bottom Indicators */}
          <div className="mt-6 text-center space-y-4">
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            {/* Text Indicator */}
            <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              <span className="font-medium">{t("testimonials.scrollHint")}</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
