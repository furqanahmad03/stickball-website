"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FlaskConical,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const methodologySteps = [
  {
    phaseKey: "methodology.steps.learn.phase",
    retentionKey: "methodology.steps.learn.retention",
    descriptionKey: "methodology.steps.learn.description",
    featuresKey: "methodology.steps.learn.features",
    icon: BookOpen,
    color: "blue",
  },
  {
    phaseKey: "methodology.steps.practice.phase",
    retentionKey: "methodology.steps.practice.retention",
    descriptionKey: "methodology.steps.practice.description",
    featuresKey: "methodology.steps.practice.features",
    icon: FlaskConical,
    color: "green",
  },
  {
    phaseKey: "methodology.steps.apply.phase",
    retentionKey: "methodology.steps.apply.retention",
    descriptionKey: "methodology.steps.apply.description",
    featuresKey: "methodology.steps.apply.features",
    icon: Target,
    color: "purple",
  },
];

const colorVariants = {
  blue: {
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-200/50",
    icon: "from-blue-500 to-blue-600",
    text: "text-blue-700",
    accent: "text-blue-600",
    card: "bg-gradient-to-br from-white/80 to-blue-50/30",
    darkCard: "dark:from-blue-900/40 dark:via-blue-800/30 dark:to-blue-700/40",
  },
  green: {
    bg: "from-green-50 to-green-100/50",
    border: "border-green-200/50",
    icon: "from-green-500 to-green-600",
    text: "text-green-700",
    accent: "text-green-600",
    card: "bg-gradient-to-br from-white/80 to-green-50/30",
    darkCard:
      "dark:from-green-900/40 dark:via-green-800/30 dark:to-green-700/40",
  },
  purple: {
    bg: "from-purple-50 to-purple-100/50",
    border: "border-purple-200/50",
    icon: "from-purple-500 to-purple-600",
    text: "text-purple-700",
    accent: "text-purple-600",
    card: "bg-gradient-to-br from-white/80 to-purple-50/30",
    darkCard:
      "dark:from-purple-900/40 dark:via-purple-800/30 dark:to-purple-700/40",
  },
};

export default function OurMethodology() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();
  
  return (
    <>
      <section className="pt-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-background dark:via-[#1c1c1c] dark:to-[#2c2c2c] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-purple-100/10 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="inline-block mb-2"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
                {t("methodology.approach")}
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="inline-block"
              >
                {t("methodology.title")}&nbsp;
              </motion.div>
              <div className="inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {t("methodology.learn")}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-4"
                >
                  {t("methodology.practice")}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-4"
                >
                  {t("methodology.apply")}
                </motion.span>
              </div>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-5xl mx-auto space-y-8"
            >
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("methodology.description")}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/40 dark:from-[#2c2c2c] dark:via-[#1c1c1c] dark:to-background p-10 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700"
              >
                <div className="space-y-6">
                  {/* Passive Methods */}
                  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-red-50/50 to-red-100/30 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl border border-red-200/30 dark:border-red-700/30">
                    <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse hidden md:block"></div>
                    <div className="flex flex-1 justify-between items-center flex-col-reverse md:flex-row gap-6">
                      <div className="flex-1">
                        <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
                          {t("methodology.passiveMethods")}
                          <span className="text-red-600 dark:text-red-400 font-bold text-2xl ml-2">
                            5–10%
                          </span>
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-700 rounded-2xl flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                  </div>

                  {/* Active Methods */}
                  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-50/50 to-green-100/30 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl border border-green-200/30 dark:border-green-700/30">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-pulse hidden md:block"></div>
                    <div className="flex flex-1 justify-between items-center flex-col-reverse md:flex-row gap-6">
                      <div className="flex-1">
                        <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
                          {t("methodology.activeMethods")}
                          <span className="text-green-600 dark:text-green-400 font-bold text-2xl ml-2">
                            90%+
                          </span>
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 rounded-2xl flex items-center justify-center">
                        <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {t("methodology.conclusion")}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-[#2c2c2c] dark:via-[#1c1c1c] dark:to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-purple-100/10 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Methodology Steps */}
          <div className="space-y-20">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.phaseKey}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Connection Line */}
                {index < methodologySteps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.4,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-full w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2 z-0"
                  />
                )}

                <div
                  className={`${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col-reverse lg:flex-row items-center gap-16`}
                >
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                      ease: "easeOut",
                    }}
                    className="flex-1 space-y-8"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-6 mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-5 rounded-2xl bg-gradient-to-br ${
                            colorVariants[
                              step.color as keyof typeof colorVariants
                            ].icon
                          } shadow-lg`}
                        >
                          <step.icon className="h-10 w-10 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                            {t(step.phaseKey)}
                          </h3>
                          <p
                            className={`text-xl font-semibold ${
                              colorVariants[
                                step.color as keyof typeof colorVariants
                              ].accent
                            }`}
                          >
                            {t(step.retentionKey)}
                          </p>
                        </div>
                      </div>

                      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t(step.descriptionKey)}
                      </p>

                      <ul className="space-y-4">
                        {t.raw(step.featuresKey).map((feature: string, featureIndex: number) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + featureIndex * 0.05,
                              ease: "easeOut",
                            }}
                            className="flex items-start gap-4 group"
                          >
                            <div
                              className={`w-6 h-6 rounded-full mt-1 flex-shrink-0 bg-gradient-to-br ${
                                colorVariants[
                                  step.color as keyof typeof colorVariants
                                ].icon
                              } flex items-center justify-center`}
                            >
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Visual Side - Enhanced with SVG Images */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.4,
                      ease: "easeOut",
                    }}
                    className="flex-1 flex justify-center"
                  >
                    <div
                      className={`relative p-10 rounded-3xl ${
                        colorVariants[step.color as keyof typeof colorVariants]
                          .card
                      } ${
                        colorVariants[step.color as keyof typeof colorVariants]
                          .darkCard
                      } border border-white/50 dark:border-gray-700 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:via-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* SVG Image */}
                      <div className="text-center space-y-6 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          className="w-48 h-48 mx-auto relative"
                        >
                          {step.phaseKey === "methodology.steps.learn.phase" && (
                            <motion.img
                              src="/learn.svg"
                              alt="Learn"
                              className="w-full h-full object-contain"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.2,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true, margin: "-100px" }}
                            />
                          )}
                          {step.phaseKey === "methodology.steps.practice.phase" && (
                            <motion.img
                              src="/practice.svg"
                              alt="Practice"
                              className="w-full h-full object-contain"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.2,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true, margin: "-100px" }}
                            />
                          )}
                          {step.phaseKey === "methodology.steps.apply.phase" && (
                            <motion.img
                              src="/apply.svg"
                              alt="Apply"
                              className="w-full h-full object-contain"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.2,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true, margin: "-100px" }}
                            />
                          )}
                        </motion.div>

                        <div className="space-y-3">
                          {/* <h4 className="text-2xl font-bold text-gray-800">{step.phase}</h4> */}
                          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                            {t(step.retentionKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-center mt-24"
          >
            <motion.div className="bg-gradient-to-r from-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-12 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700 backdrop-blur-sm max-w-5xl mx-auto hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t("methodology.ctaTitle")}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {t("methodology.ctaDescription")}
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 flex items-center gap-3 mx-auto"
                onClick={() => router.push(`/${locale}/contact`)}
              >
                {t("methodology.ctaButton")}
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
