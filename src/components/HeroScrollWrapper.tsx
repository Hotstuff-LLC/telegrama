"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroScrollWrapperClient({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollX = 0;

    const isMac = navigator.platform.toUpperCase().includes("MAC");
    const MOMENTUM_THRESHOLD = 40; // Mac scroll deltaY is often 50–120+

    const handleWheel = (e: WheelEvent) => {
      if (!isLocked) return;

      // Ignore huge momentum scrolls on Mac (fixes “stuck” bug)
      if (isMac && Math.abs(e.deltaY) > MOMENTUM_THRESHOLD) return;

      e.preventDefault();

      scrollX += e.deltaY;
      const maxScroll = container.scrollWidth - window.innerWidth;

      scrollX = Math.max(0, Math.min(scrollX, maxScroll));

      container.scrollLeft = scrollX;

      // unlock a bit earlier to prevent stuck state
      if (scrollX >= maxScroll - 2) {
        setIsLocked(false);

        // Allow next wheel event to pass through
        setTimeout(() => {
          container.style.overflowX = "hidden";
        }, 50);
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
      className="flex w-screen h-screen overflow-x-hidden snap-x snap-mandatory"
    >
      {children}
    </motion.div>
  );
}
