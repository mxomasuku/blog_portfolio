import { motion } from "framer-motion";

const stairAnimation = {
  initial: { y: "100%" },
  animate: { y: "0%" },
  exit: { y: "100%" },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <div className="absolute inset-0 flex flex-col z-50"> 
      {[...Array(6)].fill(null).map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6, 
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-1/6 w-full bg-red-500"
        />
      ))}
    </div>
  );
};

export default Stairs;