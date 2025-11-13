"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroScrollWrapperClient({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(true); // 🔒 initially lock vertical scroll

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollX = 0;
    const handleWheel = (e: WheelEvent) => {
      if (!isLocked) return; // allow normal scroll if unlocked

      // prevent vertical scroll
      e.preventDefault();

      // horizontal scroll
      scrollX += e.deltaY;
      scrollX = Math.max(0, Math.min(scrollX, container.scrollWidth - window.innerWidth));
      container.scrollTo({ left: scrollX, behavior: "smooth" });

      // if reached the end → unlock scroll
      if (scrollX >= container.scrollWidth - window.innerWidth - 10) {
        setIsLocked(false);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isLocked]);

  return (
    <motion.div
      ref={containerRef}
      className="
        flex w-screen h-screen 
        overflow-x-hidden 
        snap-x snap-mandatory
      "
    >
      {children}
    </motion.div>
  );
}

