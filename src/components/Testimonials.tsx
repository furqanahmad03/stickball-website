"use client";

import { motion } from "framer-motion";
import { Quote, GraduationCap, Building2, ArrowRight, Building } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const testimonials = [
  {
    id: 1,
    quoteKey: "testimonials.items.alfred.quote",
    author: "Alfred Daviso, Ph.D",
    titleKey: "testimonials.items.alfred.title",
    rating: 5,
    icon: GraduationCap,
    color: "blue"
  },
  {
    id: 2,
    quoteKey: "testimonials.items.jenn.quote",
    author: "Dr. Jenn Chmiel",
    titleKey: "testimonials.items.jenn.title",
    rating: 5,
    icon: Building2,
    color: "green"
  },
  {
    id: 3,
    quoteKey: "testimonials.items.nathan.quote",
    author: "Nathan Saller",
    titleKey: "testimonials.items.nathan.title",
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
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();
  
  return (
    <section className="md:py-24 py-10 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-background dark:via-[#1c1c1c] dark:to-[#2c2c2c] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`group relative hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ${
                index === 2 ? 'lg:col-start-1 lg:col-end-3 lg:mx-auto lg:max-w-2xl' : ''
              }`}
            >
              {/* Testimonial Card */}
              <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 h-full relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorVariants[testimonial.color as keyof typeof colorVariants].bg} dark:from-gray-700/50 dark:to-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colorVariants[testimonial.color as keyof typeof colorVariants].icon} shadow-lg mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Quote className="h-7 w-7 text-white" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-medium">
                    &quot;{t(testimonial.quoteKey)}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${colorVariants[testimonial.color as keyof typeof colorVariants].icon} flex items-center justify-center shadow-lg`}>
                      <testimonial.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Author Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-1">
                        {testimonial.author}
                      </h4>
                      <p className={`text-lg ${colorVariants[testimonial.color as keyof typeof colorVariants].accent} font-semibold break-words`}>
                        {t(testimonial.titleKey)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${testimonial.color}-200/50 dark:group-hover:border-${testimonial.color}-400/50 transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700 md:p-12 p-6 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700 backdrop-blur-sm max-w-5xl mx-auto hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("testimonials.ctaTitle")}
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("testimonials.ctaDescription")}
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-10 py-4 md:text-lg text-base rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              onClick={() => router.push(`/${locale}/contact`)}
            >
              {t("testimonials.ctaButton")}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
