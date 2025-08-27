"use client";

import { motion } from "framer-motion";
import { Download, Mail, ExternalLink, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTheme } from "@/contexts/ThemeContext";

const pressItems = [
  {
    id: 1,
    title: "Everett High School Partners with Stickball for Financial Literacy",
    source: "8 News Now",
    url: "https://8newsnow.com/business/press-releases/ein-presswire/706626087/everett-high-school-partners-with-stickball-for-financial-literacy",
    type: "article",
    image: "/api/placeholder/400/250",
    excerpt: "Partnership brings innovative financial education to local students"
  },
  {
    id: 2,
    title: "Stickball Financial Literacy Platform Demo",
    source: "YouTube",
    url: "https://youtu.be/FTRQ2rj1Jb0",
    type: "video",
    image: "/api/placeholder/400/250",
    excerpt: "See our platform in action with real-world examples"
  },
  {
    id: 3,
    title: "Bellwether Community Credit Union & Stickball Partnership",
    source: "BCCU Blog",
    url: "https://www.bccu.org/blog/bellwether-stickball",
    type: "article",
    image: "/api/placeholder/400/250",
    excerpt: "Strengthening communities through financial education"
  },
  {
    id: 4,
    title: "Sahal Laher: Top AI Influencer Transforming the Future",
    source: "CIO Look Media",
    url: "https://ciolookmedia.com/innovating-the-future-sahal-laher-earns-top-spot-in-ciolooks-top-05-key-influencers-transforming-ai-in-2025/",
    type: "article",
    image: "/api/placeholder/400/250",
    excerpt: "Recognized for innovation in AI-powered education technology"
  },
  {
    id: 5,
    title: "Brookline Bank & Stickball: Innovative Financial Literacy Platforms",
    source: "Brookline Bank",
    url: "https://www.brooklinebank.com/2025/02/06/brookline-bank-and-stickball-providing-innovative-financial-literacy-platforms-for-customers-and-underserved-communities/",
    type: "article",
    image: "/api/placeholder/400/250",
    excerpt: "Serving customers and underserved communities with cutting-edge solutions"
  }
];

export default function PressHighlights() {
  const { theme } = useTheme();
  
  const handleDownloadPressKit = () => {
    // Placeholder for press kit download
    alert("Press Kit download functionality to be implemented");
  };

  const handleMediaInquiries = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-[#2c2c2c] dark:via-[#1c1c1c] dark:to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              Media Coverage
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Stickball <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In the Press</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how media outlets and partners are covering our mission to transform 
            financial literacy and workforce development across communities.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div className="max-w-6xl mx-auto mb-20">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {pressItems.map((item) => (
                <CarouselItem key={item.id} className="basis-full">
                  <div>
                    {/* Main Card Container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 bg-white">
                      {/* Background Image */}
                      <div className="relative h-[600px] w-full">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                          style={{
                            backgroundImage: `url(${item.image})`
                          }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                          {/* Video Indicator */}
                          {item.type === 'video' && (
                            <div className="bg-red-600 p-3 rounded-full shadow-lg">
                              <Play className="h-5 w-5 text-white" />
                            </div>
                          )}
                          
                          {/* Source Badge */}
                          <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {item.source}
                          </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                          {/* Title */}
                          <h3 
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                          >
                            {item.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p 
                            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed drop-shadow-md"
                          >
                            {item.excerpt}
                          </p>
                          
                          {/* CTA Button */}
                          <div>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                              <span>Read Full Article</span>
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 hover:scale-105" />
            <CarouselNext className="right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 hover:scale-105" />
          </Carousel>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700 backdrop-blur-sm max-w-5xl mx-auto hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Get Press Resources & Media Information
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Download our press kit for media coverage or get in touch for interviews and inquiries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleDownloadPressKit}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              >
                <Download className="h-5 w-5" />
                Download Press Kit
              </button>
              
              <button
                onClick={handleMediaInquiries}
                className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Contact for Media Inquiries
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
