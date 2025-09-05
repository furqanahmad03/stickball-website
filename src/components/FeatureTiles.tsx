"use client";

import { motion } from "framer-motion";
import { BookOpen, Zap, Globe, PersonStanding, Smartphone } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: BookOpen,
    titleKey: "featureTiles.features.customizable.title",
    descriptionKey: "featureTiles.features.customizable.description",
    color: "blue"
  },
  {
    icon: Zap,
    titleKey: "featureTiles.features.fastDeploy.title",
    descriptionKey: "featureTiles.features.fastDeploy.description",
    color: "green"
  },
  {
    icon: Globe,
    titleKey: "featureTiles.features.anyLanguage.title",
    descriptionKey: "featureTiles.features.anyLanguage.description",
    color: "purple"
  },
  {
    icon: PersonStanding,
    titleKey: "featureTiles.features.accessible.title",
    descriptionKey: "featureTiles.features.accessible.description",
    color: "orange"
  },
  {
    icon: Smartphone,
    titleKey: "featureTiles.features.mobileFriendly.title",
    descriptionKey: "featureTiles.features.mobileFriendly.description",
    color: "indigo"
  }
];

const colorVariants = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
};

export default function FeatureTiles() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  return (
    <section className="md:py-20 py-10 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-purple-100/60 dark:from-[#2c2c2c] dark:via-[#1c1c1c] dark:to-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("featureTiles.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("featureTiles.subtitle")}
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              className="group relative hover:-translate-y-2 transition-transform duration-500 ease-out"
            >
              {/* Card */}
              <div className="bg-white dark:bg-[#1b1b1b] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                {/* Icon Container */}
                <div
                  className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${colorVariants[feature.color as keyof typeof colorVariants]}`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-600 transition-all duration-300"
                />
              </div>

              {/* Background Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {t("featureTiles.ctaText")}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => router.push(`/${locale}/contact`)}
          >
            {t("featureTiles.ctaButton")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
