"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={pathname} // ✅ Ensures unique key per route change
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        <div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" />
        
        {/* Wrap children in a single div to avoid duplicate keys */}
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;