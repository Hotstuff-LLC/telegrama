"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Service_card_client = ({ blok }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between border-b last:border-b-0 overflow-hidden min-h-[140px] transition-all duration-300"
    >
      {/* Left: Title */}
      <Link href="" className="w-full md:w-[842px]">
        <h3
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold mb-2 tracking-[-0.05em] transition-colors duration-300 ${
            hovered ? "text-[#F0B225]" : "text-black"
          } cursor-pointer`}
        >
          {blok.service_name}
        </h3>
      </Link>

      {/* Right: Description (animated on hover, always visible on mobile) */}
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: hovered ? 0 : 50,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-gray-600 text-lg sm:text-xl w-full md:w-[286px] md:text-right mt-2 md:mt-0"
      >
        {blok.service_description}
      </motion.p>
    </div>
  );
};
