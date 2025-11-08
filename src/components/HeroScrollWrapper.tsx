// HeroScrollWrapperClient.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function HeroScrollWrapperClient({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
