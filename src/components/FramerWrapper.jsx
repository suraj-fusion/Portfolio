import { motion } from "framer-motion";

function FramerWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }} // Initial state (before appearing)
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
}

export default FramerWrapper;
