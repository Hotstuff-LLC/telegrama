"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FaqCardProps {
  index: number;
  question: string;
  answer: string;
}

export const Faq_card = ({ index, question, answer }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 flex flex-col border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-start justify-between w-full text-left"
      >
        <h3
          className={`text-4xl font-semibold mb-2 pr-2 tracking-[-0.08em] transition-colors duration-300 ${
            isOpen ? "text-[#F0B225]" : "text-black"
          }`}
        >
          <span className="text-4xl font-semibold mr-2">{index + 1}.</span>
          {question}
        </h3>

        <Image
          src={"/imgs/arrow-down.png"}
          alt="toggle arrow"
          width={20}
          height={15}
            className={`mt-2 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

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
            <p className="text-gray-600 text-lg mt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
