"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  highlightWords = [],
  highlightClass = "text-purple-500",
  className,
}: {
  words: string;
  highlightWords?: string[];
  highlightClass?: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [scope.current]);

  const renderWords = () => (
    <motion.div
      ref={scope}
      className="flex flex-wrap justify-center"
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${
            highlightWords.includes(word) ? highlightClass : "dark:text-white text-black"
          } opacity-0`}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
