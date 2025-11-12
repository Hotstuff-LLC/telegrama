"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HeroListClient({ items }: { items: any[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rowCenters, setRowCenters] = useState<number[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const children = Array.from(containerRef.current.children);
      const centers = children.map((child) => {
        const rect = (child as HTMLElement).getBoundingClientRect();
        return rect.top - containerTop + rect.height / 2;
      });
      setRowCenters(centers);
    }
  }, [items]);

  const handleClick = (index: number, url: string) => {
    if (activeIndex === index) {
      window.open(`/projects/${url}`, "_blank");
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* === Underlying image layer === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <AnimatePresence>
          {activeIndex !== null &&
            items[activeIndex]?.production_thumbnail?.filename && (
              <motion.div
                key={items[activeIndex]._uid}
                className={`absolute flex justify-center items-center ${
                  activeIndex % 2 === 0 ? "left-[25%]" : "right-0"
                }`}
                style={{
                  top: rowCenters[activeIndex]
                    ? `${rowCenters[activeIndex]}px`
                    : "50%",
                  transform: "translateY(calc(-50% - 20%))", // Center aligned, lifted 20%
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative w-[600px] h-[350px]">
                  <Image
                    src={items[activeIndex].production_thumbnail.filename}
                    alt={
                      items[activeIndex].production_title || "Production image"
                    }
                    fill
                    className="object-cover shadow-lg "
                  />
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* === Text Layer === */}
      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-8"
      >
        {items.map((item, i) => (
          <div
            key={item._uid}
            onClick={() => handleClick(i, item.hero_production_url)}
            className="relative pb-2 cursor-pointer"
          >
            {/* Divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300 z-[0]" />

            <h3
              className={`relative text-2xl md:text-3xl font-normal leading-tight mb-1 select-none z-[2] transition-colors duration-300 ${
                activeIndex === i ? "text-[#F0B225]" : "text-[#1D2020]"
              }`}
            >
              <span className="no-underline">{item.production_title}</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
