"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import EmailForm from "@/components/EmailForm";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const { theme } = useTheme();
  const t = useTranslations();

  const contactInfo = [
    {
      icon: Phone,
      titleKey: "contact.contactInfo.callUs.title",
      detailsKey: "contact.contactInfo.callUs.details",
      color: "green",
      descriptionKey: "contact.contactInfo.callUs.description"
    },
    {
      icon: MapPin,
      titleKey: "contact.contactInfo.visitUs.title",
      detailsKey: "contact.contactInfo.visitUs.details",
      color: "purple",
      descriptionKey: "contact.contactInfo.visitUs.description"
    },
    {
      icon: Clock,
      titleKey: "contact.contactInfo.responseTime.title",
      detailsKey: "contact.contactInfo.responseTime.details",
      color: "orange",
      descriptionKey: "contact.contactInfo.responseTime.description"
    }
  ];

  const colorVariants = {
    green: theme === "dark" 
      ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/30" 
      : "bg-emerald-100 text-emerald-600",
    purple: theme === "dark" 
      ? "bg-purple-900/20 text-purple-400 border border-purple-800/30" 
      : "bg-purple-100 text-purple-600",
    orange: theme === "dark" 
      ? "bg-orange-900/20 text-orange-400 border border-orange-800/30" 
      : "bg-orange-100 text-orange-600"
  };



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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <EmailForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.1), 
                  ease: "easeOut" 
                }}
              >
                <Card className="shadow-lg border border-border bg-card hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${colorVariants[info.color as keyof typeof colorVariants]}`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">
                          {t(info.titleKey)}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {t(info.descriptionKey)}
                        </p>
                        {t.raw(info.detailsKey).map((detail: string, detailIndex: number) => (
                          <p key={detailIndex} className="text-foreground text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              className={`p-6 rounded-xl border text-center ${
                theme === "dark"
                  ? "bg-emerald-900/10 border-emerald-800/30 text-emerald-100"
                  : "bg-emerald-50 border-emerald-200 text-emerald-900"
              }`}
            >
              <h3 className={`font-semibold mb-3 ${
                theme === "dark" ? "text-emerald-100" : "text-emerald-900"
              }`}>
                {t("contact.cta.title")}
              </h3>
              <p className={`text-sm mb-4 ${
                theme === "dark" ? "text-emerald-200" : "text-emerald-700"
              }`}>
                {t("contact.cta.description")}
              </p>
              <Button className={`w-full ${
                theme === "dark"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}>
                {t("contact.cta.button")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
