"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Zap, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function CallToAction() {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="py-24 bg-gradient-to-br from-slate-700 via-blue-900 to-purple-900 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white dark:bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-24 left-24 text-blue-600/20 dark:text-white/10"
      >
        <Users className="h-16 w-16" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-24 right-24 text-purple-600/20 dark:text-white/10"
      >
        <Target className="h-16 w-16" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-1/4 text-indigo-600/20 dark:text-white/10"
      >
        <Zap className="h-14 w-14" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-300 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              {t("callToAction.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            {t("callToAction.title")}{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-300 dark:to-orange-300 bg-clip-text text-transparent">{t("callToAction.titleHighlight")}</span>
          </motion.h2>

          {/* Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-700 dark:text-blue-100 max-w-5xl mx-auto leading-relaxed"
          >
            {t("callToAction.description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pt-6"
          >
            <button
              onClick={() => router.push(`/${locale}/contact`)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 dark:from-yellow-400 dark:to-orange-400 dark:hover:from-yellow-300 dark:hover:to-orange-300 text-gray-900 px-16 py-6 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-4 group hover:scale-105"
            >
              {t("callToAction.ctaButton")}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <ArrowRight className="h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20"
        >
          {[
            {
              icon: Users,
              titleKey: "callToAction.benefits.communityImpact.title",
              descriptionKey: "callToAction.benefits.communityImpact.description"
            },
            {
              icon: Target,
              titleKey: "callToAction.benefits.measurableResults.title",
              descriptionKey: "callToAction.benefits.measurableResults.description"
            },
            {
              icon: Zap,
              titleKey: "callToAction.benefits.fastImplementation.title",
              descriptionKey: "callToAction.benefits.fastImplementation.description"
            }
          ].map((benefit) => (
            <motion.div
              key={benefit.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex p-6 bg-blue-100/50 dark:bg-white/10 backdrop-blur-sm rounded-3xl mb-6 group-hover:bg-blue-200/50 dark:group-hover:bg-white/20 transition-all duration-300">
                <benefit.icon className="h-10 w-10 text-yellow-600 dark:text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-gray-700 dark:text-blue-200 text-lg leading-relaxed">
                {t(benefit.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-20 pt-10 border-t border-gray-200/50 dark:border-white/10"
        >
          <div className="bg-blue-50/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 dark:text-blue-200 text-lg font-medium">
              {t("callToAction.trustIndicator")}{" "}
              <span className="text-yellow-600 dark:text-yellow-300 font-bold">{t("callToAction.statesCount")}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
