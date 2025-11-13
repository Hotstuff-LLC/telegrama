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
    <div
      className="
        p-4 md:p-6 flex flex-col 
        w-full md:w-[462px] 
        transition-all duration-300
      "
    >
      {/* Image */}
      {image && (
        <Image
          src={image}
          alt={name || 'Bio image'}
          width={462}
          height={271}
          className="
            object-cover object-top 
            w-full md:w-[462px] 
            h-[200px] md:h-[271px] 
            mb-4
          "
        />
      )}

      {/* Clickable Name */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-start justify-between w-full text-left"
      >
        <h3
          className={`
            text-3xl md:text-5xl font-semibold cursor-pointer 
            mb-2 tracking-[-0.05em] 
            transition-colors duration-300 
            ${isOpen ? 'text-[#F0B225]' : 'text-black'}
          `}
        >
          {name}
        </h3>
      </button>

      {/* ✅ Clickable Role + Arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center gap-2 mb-2 focus:outline-none"
      >
        <p
          className={`
            text-gray-600 text-lg md:text-xl font-semibold transition-colors cursor-pointer
            ${isOpen ? 'text-[#F0B225]' : ''}
          `}
        >
          Producer / Director
        </p>
        {/*<Image
          src="/imgs/arrow-down.png"
          alt="arrow down"
          width={14}
          height={14}
          className={`transition-transform cursor-pointer duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />*/}
      </button>

      {/* Reveal Text */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-base md:text-lg mt-2 leading-relaxed mb-4">
              {text}
            </p>

            {/* Social Logos */}
            <div className="flex flex-row gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F0B225] w-7 h-7 flex items-center justify-center rounded-md"
              >
                <Image
                  src="/imgs/instagram-logo.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F0B225] w-7 h-7 flex items-center justify-center rounded-md"
              >
                <Image
                  src="/imgs/linkedin-logo.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
