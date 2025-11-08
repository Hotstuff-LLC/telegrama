"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BioCardProps {
  index: number;
  name: string;
  text: string;
  image?: string;
}

export const Bio_card = ({ index, name, text, image }: BioCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 flex flex-col  w-[462px]">
      {/* Imagen */}
      {image && (
        <Image
          src={image}
          alt={name || "Bio image"}
          width={462}
          height={271}
          className="object-cover object-top w-[462px] h-[271px] rounded-lg mb-4"
        />
      )}

      {/* Clickable Name */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-start justify-between w-full text-left"
      >
        <h3
          className={`text-5xl font-semibold cursor-pointer mb-2 tracking-[-0.05em] transition-colors duration-300 ${
            isOpen ? "text-[#F0B225]" : "text-black"
          }`}
        >
          {name}
        </h3>

        
      </button>

      {/* Role (always visible) */}
      <p className="text-gray-600 text-xl font-semibold mb-2">
        Producer / Director
      </p>

      {/* Reveal Text */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-lg mt-2">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
