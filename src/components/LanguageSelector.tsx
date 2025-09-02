"use client";

import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const pathSegments = pathname.split('/').filter(Boolean);
  const currentLocale = pathSegments[0] && ['en', 'es', 'pt'].includes(pathSegments[0]) ? pathSegments[0] : 'en';
  
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];
  

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const pathWithoutLocale = segments.length > 1 ? '/' + segments.slice(1).join('/') : '/';
  
    const newPath = `/${newLocale}${pathWithoutLocale}`; 
    
    router.push(newPath);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <motion.button 
            className="!outline-none flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm font-medium text-gray-900 hover:text-[rgb(97,109,237)] dark:text-gray-100 dark:hover:text-[rgb(97,109,237)] transition-colors duration-300 hover:bg-[rgba(97,109,237,0.1)] dark:hover:bg-[rgba(97,109,237,0.1)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t("languageSelector.selectLanguage")}
          >
            <span className="inline">{currentLanguage.flag}</span>
            <span className="inline text-xs">{currentLanguage.code.toUpperCase()}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-3 w-3" />
            </motion.div>
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-48 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-lg"
        >
          {languages.map((language, index) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              asChild
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className={`flex items-center cursor-pointer px-3 py-2 rounded-md transition-colors duration-200 ${
                  language.code === currentLocale
                    ? 'text-[rgb(97,109,237)] bg-[rgba(97,109,237,0.1)]'
                    : 'text-gray-900 dark:text-gray-100 hover:text-[rgb(97,109,237)] hover:bg-[rgba(97,109,237,0.1)] dark:hover:bg-[rgba(97,109,237,0.1)]'
                }`}
              >
                <span className="mr-3 text-lg">{language.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{language.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {language.code.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
