"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ServiceProcessClientProps {
  children: React.ReactNode[];
}

export const ServiceProcessClient = ({ children }: ServiceProcessClientProps) => {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (Array.isArray(children)) {
      setCount(children.length);
    }

    // Detect mobile once on mount
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children]);

  return (
    <div className="p-4 container mx-auto flex flex-col md:items-end gap-6 relative">
      {Array.isArray(children) &&
        children.map((child, index) => {
          // ✅ Use different width range depending on screen size
          const max = isMobile ? 100 : 100;
          const min = isMobile ? 100 : 30;

          const widthPercent =
            count > 1 ? max - ((max - min) / (count - 1)) * index : max;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden flex justify-center md:justify-end w-full origin-right"
            >
              <motion.div
                className="transition-all duration-700 ease-out w-full md:w-auto"
                style={{
                  width: `${widthPercent}%`,
                }}
              >
                {child}
              </motion.div>
            </motion.div>
          );
        })}
    </div>
  );
};
