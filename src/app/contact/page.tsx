"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import EmailForm from "@/components/EmailForm";

export default function ContactPage() {
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri: 9AM-6PM EST"],
      color: "green",
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Learning Street", "Education District, ED 12345"],
      color: "purple",
      description: "Schedule an in-person meeting"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: ["Within 24 hours", "Emergency: Same day"],
      color: "orange",
      description: "We're here when you need us"
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
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring Stickball to your community? We&apos;d love to hear from you. 
            Fill out the form below and we&apos;ll get back to you within 24 hours.
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
                key={info.title}
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
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {info.description}
                        </p>
                        {info.details.map((detail, detailIndex) => (
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
                Ready to Get Started?
              </h3>
              <p className={`text-sm mb-4 ${
                theme === "dark" ? "text-emerald-200" : "text-emerald-700"
              }`}>
                Book a demo to see Stickball in action and learn how we can transform learning in your community.
              </p>
              <Button className={`w-full ${
                theme === "dark"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}>
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
