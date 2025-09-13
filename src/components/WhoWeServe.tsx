"use client";

import { motion } from "framer-motion";
import { DollarSign, Briefcase, Heart, Users, Brain, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const audienceTiles = [
  {
    icon: DollarSign,
    titleKey: "whoWeServe.audiences.financialLiteracy.title",
    descriptionKey: "whoWeServe.audiences.financialLiteracy.description",
    color: "blue",
    bgGradient: "from-blue-50 to-blue-100/50",
    iconBg: "from-blue-500 to-blue-600"
  },
  {
    icon: Briefcase,
    titleKey: "whoWeServe.audiences.workforceReadiness.title",
    descriptionKey: "whoWeServe.audiences.workforceReadiness.description",
    color: "green",
    bgGradient: "from-green-50 to-green-100/50",
    iconBg: "from-green-500 to-green-600"
  },
  {
    icon: Heart,
    titleKey: "whoWeServe.audiences.healthcare101.title",
    descriptionKey: "whoWeServe.audiences.healthcare101.description",
    color: "red",
    bgGradient: "from-red-50 to-red-100/50",
    iconBg: "from-red-500 to-red-600"
  },
  {
    icon: Users,
    titleKey: "whoWeServe.audiences.communityWellness.title",
    descriptionKey: "whoWeServe.audiences.communityWellness.description",
    color: "purple",
    bgGradient: "from-purple-50 to-purple-100/50",
    iconBg: "from-purple-500 to-purple-600"
  },
  {
    icon: Brain,
    titleKey: "whoWeServe.audiences.aiLiteracy.title",
    descriptionKey: "whoWeServe.audiences.aiLiteracy.description",
    color: "indigo",
    bgGradient: "from-indigo-50 to-indigo-100/50",
    iconBg: "from-indigo-500 to-indigo-600"
  }
];

export default function WhoWeServe() {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="md:py-24 py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-background dark:via-[#1c1c1c] dark:to-[#2c2c2c] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="text-center md:mb-20 mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              {t("whoWeServe.audience")}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {t("whoWeServe.title")} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t("whoWeServe.titleHighlight")}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {t("whoWeServe.subtitle")}
          </p>
        </motion.div>

        {/* Audience Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {audienceTiles.map((tile, index) => (
            <motion.div
              key={tile.titleKey}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              className="group relative hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Card */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 dark:border-gray-700/50 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tile.bgGradient} dark:from-gray-700/50 dark:to-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${tile.iconBg} shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <tile.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {t(tile.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 text-lg">
                    {t(tile.descriptionKey)}
                  </p>
                </div>

                {/* Hover Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${tile.color}-200/50 dark:group-hover:border-${tile.color}-400/50 transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700 md:p-12 p-6 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700 backdrop-blur-sm max-w-5xl mx-auto hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("whoWeServe.ctaTitle")}
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("whoWeServe.ctaDescription")}
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/${locale}/contact`)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-10 py-4 text-xs sm:text-sm md:text-lg rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 inline-flex items-center gap-3"
            >
              {t("whoWeServe.ctaButton")}
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
