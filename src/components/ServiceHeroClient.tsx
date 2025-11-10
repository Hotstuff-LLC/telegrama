"use client";

import { motion, Variants } from "framer-motion";

interface ServiceHeroClientProps {
  primaryText: string;
  secondaryText: string;
}

export const ServiceHeroClient = ({
  primaryText,
  secondaryText,
}: ServiceHeroClientProps) => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.p
        className="text-lg sm:text-2xl md:text-3xl md:w-[600px] md:pl-6 pt-6 pb-4 font-semibold"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {primaryText}
      </motion.p>

      <motion.p
        className="text-lg sm:text-2xl md:text-3xl md:w-[600px] md:pl-6 pb-12 md:pb-16"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {secondaryText}
      </motion.p>
    </div>
  );
};
