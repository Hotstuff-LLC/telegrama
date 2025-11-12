"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Service_card } from "./Service_card";

export const Service_card_client = ({ blok }: any) => {
  const [isCentered, setIsCentered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      // Detect if card center is within 15% of viewport center
      const threshold = window.innerHeight * 0.15;
      const isNowCentered =
        Math.abs(cardCenter - viewportCenter) <= threshold;

      setIsCentered(isNowCentered);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="
        p-4 flex flex-col md:flex-row items-start md:items-center justify-between 
        border-b last:border-b-0 overflow-hidden 
        md:min-h-[140px] transition-all duration-300
      "
    >
      {/* Left: Title / link */}
      <Service_card blok={blok} />

      {/* Right: Description (appears only when centered) */}
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: isCentered ? 0 : 50,
          opacity: isCentered ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="
          text-gray-600 text-lg sm:text-xl 
          w-full md:w-[286px] text-left 
          mt-2 md:mt-0 leading-snug
        "
      >
        {blok.service_description}
      </motion.p>
    </div>
  );
};
