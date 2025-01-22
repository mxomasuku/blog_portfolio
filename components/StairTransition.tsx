"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // ✅ Forces re-render on route change
        initial={{ opacity: 1 }} 
        animate={{ opacity: 0 }} // ✅ Fades out after appearing
        transition={{ duration: 0.8, ease: "easeInOut" }} // ✅ Smooth fade-out
        className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;