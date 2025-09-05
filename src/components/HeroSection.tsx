"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function HeroSection() {
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark Mode Gradient Shadow */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/70 to-black/60 pointer-events-none z-0"></div>
      )}

      {/* Dark Mode Border Glow */}
      {theme === "dark" && (
        <div className="absolute inset-0 border border-gray-600/50 rounded-none pointer-events-none z-0"></div>
      )}

      {/* Hero Image as Cover Photo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/stickball-hero-section.jpg"
          alt={t("hero.altText")}
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"></div>
      </div>

      {/* Text Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-3xl"
        >
          {/* Dark Mode Glow Effect */}
          {theme === "dark" && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-gray-800/50 to-black/40 blur-3xl rounded-full -z-10"></div>
          )}
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl"
          >
            <span className="text-white cursor-pointer hover:scale-[1.02] transition-transform duration-300 inline-block">
              {t("hero.headline1")}
            </span>
            <br />
            <span
              style={{ color: "rgb(97, 109, 237)" }}
              className="drop-shadow-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 inline-block"
            >
              {t("hero.headline2")}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl leading-relaxed drop-shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              onClick={() => router.push(`/${locale}/contact`)}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-[rgb(97,109,237)] via-[rgb(107,119,247)] to-[rgb(97,109,237)] hover:from-[rgb(87,99,227)] hover:via-[rgb(97,109,237)] hover:to-[rgb(87,99,227)] text-white px-8 py-6 text-xl font-bold rounded-sm shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0"
            >
              <span className="relative z-10">{t("hero.ctaButton")}</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[rgb(97,109,237)]/20 blur-xl rounded-2xl group-hover:bg-[rgb(97,109,237)]/40 transition-all duration-500"></div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
