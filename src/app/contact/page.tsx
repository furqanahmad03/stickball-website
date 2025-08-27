"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, MapPin, Clock, CheckCircle, Users, Globe, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

export default function ContactPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would typically send the data to your backend
    // For now, we'll just show success state
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

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

  const features = [
    {
      icon: Users,
      title: "Community-Centered",
      description: "Built with and for communities"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Accessible to diverse populations"
    },
    {
      icon: Target,
      title: "Fast Deployment",
      description: "Days, not months to implement"
    },
    {
      icon: Heart,
      title: "Inclusive Design",
      description: "Serves all abilities and backgrounds"
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
            <div className={`inline-flex p-4 rounded-full mb-6 ${
              theme === "dark" 
                ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/30" 
                : "bg-emerald-100 text-emerald-600"
            }`}>
              <CheckCircle className="h-12 w-12" />
            </div>
            <h1 className="text-3xl font-bold text-card-foreground mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", organization: "", email: "", phone: "", message: "" });
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Send Another Message
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

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
            <Card className="shadow-xl border border-border bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-12 text-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Organization Field */}
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-card-foreground font-medium">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your company, school, or organization"
                      className="h-12 text-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="h-12 text-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="h-12 text-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground font-medium">
                      Message *
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your goals and how we can help..."
                      rows={5}
                      className="w-full px-4 py-3 text-lg border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Get in Touch
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
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
