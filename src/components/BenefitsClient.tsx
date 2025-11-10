"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BenefitsClientProps {
  children: ReactNode[];
}

export const BenefitsClient = ({ children }: BenefitsClientProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ y: 80 }} // starts below
          whileInView={{ y: 0 }} // moves up into place
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: index * 0.1, // slight stagger
          }}
          className="w-full max-w-[500px]"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
