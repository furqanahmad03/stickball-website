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

const keyFeatures = [
  {
    icon: GraduationCap,
    title: "Education Technology",
    description: "Leading platform for financial literacy and workforce readiness",
    color: "blue"
  },
  {
    icon: Users,
    title: "Community-Centered",
    description: "Developed collaboratively with community members",
    color: "green"
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Accessible to diverse populations worldwide",
    color: "purple"
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Adaptive paths tailored to individual needs",
    color: "orange"
  },
  {
    icon: Heart,
    title: "Inclusive Design",
    description: "Serves individuals of all abilities and backgrounds",
    color: "red"
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Quick deployment with lasting community impact",
    color: "yellow"
  }
];

const impactStats = [
  {
    number: "10+",
    label: "States Served",
    icon: MapPin,
    color: "blue"
  },
  {
    number: "1000+",
    label: "Learners Impacted",
    icon: Users,
    color: "green"
  },
  {
    number: "50+",
    label: "Community Partners",
    icon: Handshake,
    color: "purple"
  },
  {
    number: "95%",
    label: "Satisfaction Rate",
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
                Our Story
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stickball</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed"
            >
              Empowering communities through innovative education technology that actually sticks.
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
              Our Mission
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mx-auto"
            >
              Stickball is a leading education technology platform dedicated to promoting financial literacy 
              and workforce readiness, with a growing footprint across 10 states. With interactive lessons 
              and personalized guidance, Stickball empowers students and professionals to make informed 
              financial decisions through community-centered solutions.
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
              What Makes Us Different
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strengths</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {feature.description}
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
              Our Reach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Measurable <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Impact</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
                      {stat.label}
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
                Our Methodology
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Strategic <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Approach</span>
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
                      Community-Driven Development
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      The platform blends interactive simulations with personalized learning paths to build 
                      essential life and workplace skills, with everything developed collaboratively with 
                      community members and continuously adapted based on their feedback.
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
                      Inclusive Design
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      Stickball&apos;s inclusive design serves individuals of all abilities and backgrounds, 
                      with multi-language accessibility ensuring the program serves diverse populations.
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
                      Bottom-Up Strategy
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      The company&apos;s bottom-up approach ensures that educational tools remain in communities 
                      for life, creating lasting impact through sustained local partnerships.
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
                      Lasting Impact
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      By focusing on community needs and building sustainable partnerships, we create 
                      educational solutions that grow and evolve with the communities they serve.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700 backdrop-blur-sm max-w-5xl mx-auto hover:scale-[1.02] transition-all duration-300"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Ready to Learn More?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Discover how Stickball can transform learning in your community.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://www.stickball.biz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              >
                Visit Website
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
