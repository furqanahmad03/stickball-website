"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Globe, 
  Target, 
  Heart, 
  Zap, 
  Shield, 
  TrendingUp,
  MapPin,
  Lightbulb,
  Handshake,
  Star,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const keyFeatures = [
  {
    icon: GraduationCap,
    titleKey: "about.features.educationTechnology.title",
    descriptionKey: "about.features.educationTechnology.description",
    color: "blue"
  },
  {
    icon: Users,
    titleKey: "about.features.communityCentered.title",
    descriptionKey: "about.features.communityCentered.description",
    color: "green"
  },
  {
    icon: Globe,
    titleKey: "about.features.multiLanguage.title",
    descriptionKey: "about.features.multiLanguage.description",
    color: "purple"
  },
  {
    icon: Target,
    titleKey: "about.features.personalizedLearning.title",
    descriptionKey: "about.features.personalizedLearning.description",
    color: "orange"
  },
  {
    icon: Heart,
    titleKey: "about.features.inclusiveDesign.title",
    descriptionKey: "about.features.inclusiveDesign.description",
    color: "red"
  },
  {
    icon: Zap,
    titleKey: "about.features.fastImplementation.title",
    descriptionKey: "about.features.fastImplementation.description",
    color: "yellow"
  }
];

const impactStats = [
  {
    number: "10+",
    labelKey: "about.stats.statesServed",
    icon: MapPin,
    color: "blue"
  },
  {
    number: "1000+",
    labelKey: "about.stats.learnersImpacted",
    icon: Users,
    color: "green"
  },
  {
    number: "50+",
    labelKey: "about.stats.communityPartners",
    icon: Handshake,
    color: "purple"
  },
  {
    number: "95%",
    labelKey: "about.stats.satisfactionRate",
    icon: Star,
    color: "yellow"
  }
];

const colorVariants = {
  blue: {
    bg: "from-blue-500 to-blue-600",
    text: "text-blue-600",
    light: "bg-blue-50"
  },
  green: {
    bg: "from-green-500 to-green-600",
    text: "text-green-600",
    light: "bg-green-50"
  },
  purple: {
    bg: "from-purple-500 to-purple-600",
    text: "text-purple-600",
    light: "bg-purple-50"
  },
  orange: {
    bg: "from-orange-500 to-orange-600",
    text: "text-orange-600",
    light: "bg-orange-50"
  },
  red: {
    bg: "from-red-500 to-red-600",
    text: "text-red-600",
    light: "bg-red-50"
  },
  yellow: {
    bg: "from-yellow-500 to-yellow-600",
    text: "text-yellow-600",
    light: "bg-yellow-50"
  }
};



export default function AboutPage() {
  const t = useTranslations();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white mt-10 to-blue-50/30 dark:from-[#2c2c2c] dark:via-[#1c1c1c] dark:to-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-transparent dark:via-transparent dark:to-transparent relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white dark:bg-white rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white dark:bg-white rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase inline-flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                {t("about.ourStory")}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              {t("about.title")} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t("about.titleHighlight")}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed"
            >
              {t("about.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 max-w-6xl mx-auto hover:scale-[1.02] transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-8 shadow-lg"
            >
              <Lightbulb className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
            >
              {t("about.mission")}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mx-auto"
            >
              {t("about.missionDescription")}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase mb-4 inline-block">
              {t("about.whatMakesUsDifferent")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {t("about.coreStrengths")} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t("about.coreStrengthsHighlight")}</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
              >
                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${colorVariants[feature.color as keyof typeof colorVariants].bg} shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {t(feature.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase mb-4 inline-block">
              {t("about.ourReach")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {t("about.measurableImpact")} <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{t("about.measurableImpactHighlight")}</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl">
                  <CardContent className="p-10">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${colorVariants[stat.color as keyof typeof colorVariants].bg} shadow-lg mb-6 group-hover:scale-110 transition-all duration-300`}
                    >
                      <stat.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <div className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold text-lg">
                      {t(stat.labelKey)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 hover:scale-[1.02] transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase mb-4 inline-block">
                {t("about.ourMethodology")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t("about.strategicApproach")} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t("about.strategicApproachHighlight")}</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-6 group hover:scale-105 transition-all duration-300"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0 shadow-lg"
                  >
                    <Shield className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {t("about.methodology.communityDriven.title")}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {t("about.methodology.communityDriven.description")}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex items-start gap-6 group hover:scale-105 transition-all duration-300"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex-shrink-0 shadow-lg"
                  >
                    <Heart className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {t("about.methodology.inclusiveDesign.title")}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {t("about.methodology.inclusiveDesign.description")}
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-6 group hover:scale-105 transition-all duration-300"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex-shrink-0 shadow-lg"
                  >
                    <TrendingUp className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {t("about.methodology.bottomUpStrategy.title")}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {t("about.methodology.bottomUpStrategy.description")}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex items-start gap-6 group hover:scale-105 transition-all duration-300"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex-shrink-0 shadow-lg"
                  >
                    <Zap className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {t("about.methodology.lastingImpact.title")}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {t("about.methodology.lastingImpact.description")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
