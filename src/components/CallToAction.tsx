"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import TextRotator from "./TextRotator";

export default function CallToAction() {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="md:pt-20 pt-10 pb-14 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-background dark:via-[#1c1c1c] dark:to-[#2c2c2c] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
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
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            <div>{t("callToAction.title")}{" "}</div>
            <TextRotator 
              words={[
                t("callToAction.rotatorWords.community"),
                t("callToAction.rotatorWords.schoolDistrict"), 
                t("callToAction.rotatorWords.college"),
                t("callToAction.rotatorWords.company"),
                t("callToAction.rotatorWords.organisation")
              ]}
              interval={2000}
              className="inline-block"
            />
          </motion.h2>

          {/* Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed"
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
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 dark:from-yellow-400 dark:to-orange-400 dark:hover:from-yellow-300 dark:hover:to-orange-300 text-gray-900 md:px-16 px-8 py-6 md:text-2xl text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-4 group hover:scale-105"
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:mt-20 mt-10 md:pt-10 pt-6 border-t border-gray-200/50 dark:border-white/10"
        >
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50 dark:border-gray-700/50">
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              {t("callToAction.trustIndicator")}{" "}
              <span className="text-yellow-600 dark:text-yellow-300 font-bold">{t("callToAction.statesCount")}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
