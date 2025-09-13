"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function HeroSection() {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      {/* Text Content - Centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-6xl mt-10 md:mt-16 mx-auto"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-foreground hover:scale-[1.02] transition-all duration-300 inline-block">
              {t("hero.headline1")}
            </span>
            <span className="text-blue-600 dark:text-blue-400 hover:scale-[1.02] transition-all duration-300 inline-block">
              {t("hero.headline2")}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed hover:scale-[1.02] transition-all duration-300"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTA Button */}
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              onClick={() => router.push(`/${locale}/contact`)}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-[rgb(77,89,217)] via-[rgb(67,79,207)] to-[rgb(77,89,217)] hover:from-[rgb(57,69,197)] hover:via-[rgb(67,79,207)] hover:to-[rgb(57,69,197)] text-white px-16 py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0"
            >
              <span className="relative z-10">{t("hero.ctaButton")}</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[rgb(77,89,217)]/20 blur-xl rounded-2xl group-hover:bg-[rgb(77,89,217)]/40 transition-all duration-500"></div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
