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
    <div className="p-4 container mx-auto flex flex-col items-end gap-2 relative">
      {Array.isArray(children) &&
        children.map((child, index) => {
          // Width decreases linearly from 100% to 20%
          const max = 100;
          const min = 30;
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
              className="overflow-hidden flex justify-end w-full origin-right"
            >
              <motion.div
                className="transition-all duration-700 ease-out md:w-auto w-full"
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
