import { motion } from "framer-motion";

const DecorativeElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top Left Ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-royal-gold/4"
          fill="currentColor"
        >
          <path d="M0 0 Q100 20 100 100 Q20 100 0 0" />
          <circle cx="50" cy="50" r="3" className="text-royal-gold/8" />
          <circle cx="30" cy="70" r="2" className="text-royal-gold/6" />
          <circle cx="70" cy="30" r="2" className="text-royal-gold/6" />
        </svg>
      </motion.div>

      {/* Bottom Right Ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 rotate-180"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-royal-gold/4"
          fill="currentColor"
        >
          <path d="M0 0 Q100 20 100 100 Q20 100 0 0" />
          <circle cx="50" cy="50" r="3" className="text-royal-gold/8" />
          <circle cx="30" cy="70" r="2" className="text-royal-gold/6" />
          <circle cx="70" cy="30" r="2" className="text-royal-gold/6" />
        </svg>
      </motion.div>

      {/* Floating Accent Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-1/4 right-1/4 w-1 h-1 rounded-full bg-royal-gold/30"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 rounded-full bg-royal-gold/20"
        style={{ animation: "float 8s ease-in-out infinite 1s" }}
      />
    </div>
  );
};

export default DecorativeElements;
