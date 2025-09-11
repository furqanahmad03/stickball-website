"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslations, useLocale } from "next-intl";
import LanguageSelector from "./LanguageSelector";

const navigationItems = [
  {
    nameKey: "navigation.home",
    href: "/",
    current: true
  },
  {
    nameKey: "navigation.about",
    href: "/about",
    current: false
  },
  //TODO: we have to un comment this once methodology is live
  // {
  //   nameKey: "navigation.methodology",
  //   href: "/methodology",
  //   current: false
  // },
  {
    nameKey: "navigation.contact",
    href: "/contact",
    current: false
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations();
  const locale = useLocale();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-gray-700/20'
          : 'bg-white/40 dark:bg-gray-900/60 backdrop-blur-lg shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mx-auto h-16 lg:h-20">
          {/* Logo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <div className="relative w-28 h-14 lg:w-36 lg:h-14">
                <Image
                  src="/stickball-logo.gif"
                  alt="Stickball Logo"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links - Right Side */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navigationItems.map((item) => {
              const isActive = item.href === "/" 
                ? currentPath === `/${locale}` || currentPath === `/${locale}/`
                : currentPath === `/${locale}${item.href}`;
              return (
                <Link
                  key={item.nameKey}
                  href={`/${locale}${item.href}`}
                  className={`relative text-sm px-4 py-2 font-bold transition-all duration-300 group ${isActive
                      ? 'text-[rgb(97,109,237)]'
                      : 'text-gray-900 hover:text-[rgb(97,109,237)] dark:text-gray-100 dark:hover:text-[rgb(97,109,237)]'
                    }`}
                >
                  {t(item.nameKey)}
                  {/* Sliding underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[rgb(97,109,237)] transition-all duration-300 ease-out ${isActive
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                    }`}></span>
                </Link>
              );
            })}

            {/* Language Selector */}
            <LanguageSelector />

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md text-gray-900 hover:text-[rgb(97,109,237)] dark:text-gray-100 dark:hover:text-[rgb(97,109,237)] transition-colors duration-300 hover:bg-[rgba(97,109,237,0.1)] dark:hover:bg-[rgba(97,109,237,0.1)]"
              aria-label={t("navbar.toggleDarkMode")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Selector for mobile */}
            <LanguageSelector />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-900 hover:text-[rgb(97,109,237)] dark:text-gray-100 dark:hover:text-[rgb(97,109,237)] transition-colors duration-300 hover:bg-[rgba(97,109,237,0.1)] dark:hover:bg-[rgba(97,109,237,0.1)]"
              aria-label={isOpen ? t("navbar.closeMenu") : t("navbar.toggleMenu")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => {
                const isActive = item.href === "/" 
                  ? currentPath === `/${locale}` || currentPath === `/${locale}/`
                  : currentPath === `/${locale}${item.href}`;
                return (
                  <Link
                    key={item.nameKey}
                    href={`/${locale}${item.href}`}
                    className={`relative block px-3 py-2 text-base font-bold rounded-md transition-colors duration-200 group ${isActive
                        ? 'text-[rgb(97,109,237)] bg-[rgba(97,109,237,0.1)] border-[rgb(97,109,237)]'
                        : 'text-gray-900 hover:text-[rgb(97,109,237)] hover:bg-[rgba(97,109,237,0.1)] dark:text-gray-100 dark:hover:bg-[rgba(97,109,237,0.1)]'
                      }`}
                  >
                    {t(item.nameKey)}
                    {/* Sliding underline for mobile */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[rgb(97,109,237)] transition-all duration-300 ease-out ${isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                );
              })}

              {/* Mobile Dark Mode Toggle */}
              {/* <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-base font-bold rounded-md text-gray-900 hover:text-[rgb(97,109,237)] hover:bg-[rgba(97,109,237,0.1)] dark:text-gray-100 dark:hover:bg-[rgba(97,109,237,0.1)] transition-colors duration-200"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-5 w-5" />
                      {t("navbar.lightMode")}
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" />
                      {t("navbar.darkMode")}
                    </>
                  )}
                </button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}