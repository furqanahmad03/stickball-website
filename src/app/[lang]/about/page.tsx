"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Sparkles,
  Send,
  AlertCircle,
  Loader2,
  Mail,
  User,
  Building,
  MessageSquare
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  organization: string;
  email: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  error: string | null;
}

export default function AboutPage() {
  const t = useTranslations();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    message: ""
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    error: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formState.error) {
      setFormState(prev => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      setFormState(prev => ({ ...prev, isSubmitting: false }));

      // Show success toast
      toast.success(t('emailForm.success'));

      // Reset form data
      setFormData({
        name: "",
        organization: "",
        email: "",
        message: ""
      });

    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : t('emailForm.error'),
        isSubmitting: false
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white mt-10 to-blue-50/30 dark:from-[#2c2c2c] dark:via-[#1c1c1c] dark:to-background">
      {/* Hero Section */}
      <section className="pt-24 md:pb-14 pb-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-[#2c2c2c] dark:via-[#1c1c1c] dark:to-background relative overflow-hidden">
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
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center md:mb-24 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 md:p-12 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 max-w-6xl mx-auto hover:scale-[1.02] transition-all duration-300"
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

        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center md:mb-24 mb-12 min-h-fit"
          style={{
            backgroundImage: "url('/team-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t("about.ourTeam")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl shadow-2xl overflow-hidden min-h-[400px] bg-transparent"
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-transparent" />

            <div className="relative z-10 p-8 md:p-12 h-full">
              <div className="flex flex-col md:flex-row items-center justify-center md:gap-72 gap-20 h-full">
                {/* Sahal Laher - CEO */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 group-hover:shadow-3xl transition-all duration-300">
                      <Image
                        src="/sahal.png"
                        alt="Sahal Laher"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t("about.team.sahal.name")}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    {t("about.team.sahal.title")}
                  </p>
                </motion.div>

                {/* Devin McCourty - Advisor */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 group-hover:shadow-3xl transition-all duration-300">
                      <Image
                        src="/devin.png"
                        alt="Devin McCourty"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t("about.team.devin.name")}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    {t("about.team.devin.title")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
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
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t("contact.title")} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          {/* Contact Form with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Contact Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-2 lg:order-1 md:block hidden"
              >
                <Image
                  src="/contact-image.png"
                  alt="Contact Us"
                  width={400}
                  height={300}
                  className="w-full h-auto max-w-md mx-auto"
                />
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="order-1 lg:order-2"
              >
                <div className="p-8 md:p-12">
                  {/* Error Message */}
                  {formState.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3 text-red-700 dark:text-red-400"
                    >
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{formState.error}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Top Row - Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {t('emailForm.fields.name.label')}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t('emailForm.fields.name.placeholder')}
                          className="h-12 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {t('emailForm.fields.email.label')}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t('emailForm.fields.email.placeholder')}
                          className="h-12 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Middle Row - Organization */}
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {t('emailForm.fields.organization.label')}
                      </Label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder={t('emailForm.fields.organization.placeholder')}
                        className="h-12 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        {t('emailForm.fields.message.label')}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('emailForm.fields.message.placeholder')}
                        rows={4}
                        className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={formState.isSubmitting}
                          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          {formState.isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              {t('emailForm.submit.sending')}
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              {t('emailForm.submit.send')}
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </form>

                  {/* Footer Note */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('emailForm.footer')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
