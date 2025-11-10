"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ServiceProcessClientProps {
  children: React.ReactNode[];
}

export const ServiceProcessClient = ({ children }: ServiceProcessClientProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (Array.isArray(children)) {
      setCount(children.length);
    }
  }, [children]);

  return (
    <div className="p-16 container mx-auto flex flex-col items-end gap-4">
      {Array.isArray(children) &&
        children.map((child, index) => {
          const baseWidth = 80 - (index * (60 / Math.max(count - 1, 1)));
          const widthPercent = Math.min(baseWidth + 10, 100);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden flex justify-end w-full origin-right"
            >
              <motion.div
                className="transition-all duration-700 ease-out"
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
