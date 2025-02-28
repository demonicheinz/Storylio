"use client"; // Ini adalah Client Component

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import * as Icons from "react-icons/fa6";
import type { NavItem } from "@/types/navItem";

export const FloatingNav = ({
  navItems,
  className,
  initiallyVisible = true,
  transparencyThreshold = 0.05,
}: {
  navItems: NavItem[];
  className?: string;
  initiallyVisible?: boolean;
  transparencyThreshold?: number;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(initiallyVisible);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);
      if (scrollYProgress.get() < transparencyThreshold) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex max-w-fit fixed z-[5000] top-6 inset-x-0 mx-auto px-3 py-2 rounded-xl border items-center justify-center",
          "shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.05),0px_0px_0px_1px_rgba(25,28,33,0.1)]",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex items-center space-x-1">
          {navItems.map((navItem, idx) => {
            const Icon = Icons[navItem.icon];
            const isActive = pathname === navItem.link;
            return (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center space-x-1 transition-all duration-200 rounded-lg",
                  "px-2 py-2 md:px-4 md:py-2",
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-neutral-300 hover:bg-white/10 hover:text-white",
                )}
              >
                <Icon
                  size={15}
                  className="md:mr-1.5"
                />
                <span className="hidden md:inline text-sm font-medium">{navItem.name}</span>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/70 mx-1"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};