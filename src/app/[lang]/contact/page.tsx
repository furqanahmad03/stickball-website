"use client";

import { motion } from "framer-motion";
import EmailForm from "@/components/EmailForm";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();



  return (
    <div className="min-h-screen mt-10 bg-background py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <EmailForm />
        </motion.div>
      </div>
    </div>
  );
}
