"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextRotatorProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function TextRotator({ 
  words, 
  interval = 2000, 
  className = "" 
}: TextRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const currentWord = words[currentIndex] || words[0];

  useEffect(() => {
    // Early return inside useEffect to avoid calling hooks conditionally
    if (!words || words.length === 0) {
      return;
    }
    let typingTimer: NodeJS.Timeout;
    let wordTimer: NodeJS.Timeout;

    const typeText = (word: string) => {
      setDisplayedText("");
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < word.length) {
          setDisplayedText(word.slice(0, charIndex + 1));
          charIndex++;
          typingTimer = setTimeout(typeChar, 100);
        } else {
          wordTimer = setTimeout(() => {
            eraseText(word);
          }, 3000);
        }
      };

      const eraseText = (word: string) => {
        let charIndex = word.length;
        const eraseChar = () => {
          if (charIndex > 0) {
            setDisplayedText(word.slice(0, charIndex - 1));
            charIndex--;
            typingTimer = setTimeout(eraseChar, 70);
          } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        };
        eraseChar();
      };

      typeChar();
    };

    typeText(currentWord);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(wordTimer);
    };
  }, [currentIndex, words, interval, currentWord]);

  
  if (!words || words.length === 0) {
    return <span className={className}>Community</span>;
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-300 dark:to-orange-300 bg-clip-text text-transparent">
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="inline-block w-0.5 h-12 bg-yellow-600 dark:bg-yellow-300 ml-2"
        />
      </span>
    </span>
  );
}
