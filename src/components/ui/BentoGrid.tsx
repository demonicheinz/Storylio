"use client";

import { cn } from "@/lib/utils";
import { LazyMotion, domAnimation } from "framer-motion";

// Tambahkan definisi interface
export interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

// Update komponen untuk menggunakan interface
export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
          className,
        )}
      >
        {children}
      </div>
    </LazyMotion>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento transition-all duration-300 p-6 bg-[#04071D] hover:bg-[#0c0e23] border border-black/[0.2] dark:border-white/[0.2] justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition-all duration-300">
        {icon}
        <div className="font-sans font-bold text-white mb-3 mt-3 text-xl">{title}</div>
        <div className="font-sans font-normal text-[#E4ECFF] text-base">{description}</div>
      </div>
    </div>
  );
};
