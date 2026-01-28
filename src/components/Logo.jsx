import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-8 sm:mb-10"
    >
      <div className="flex flex-col items-center">
        {/* Simple Top Ornament */}
        <div className="flex items-center gap-3 mb-8">
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "2rem" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-px bg-linear-to-r from-transparent to-royal-gold/50"
          />
          <svg
            className="w-2 h-2 text-royal-gold/50"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="2" />
          </svg>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "2rem" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-px bg-linear-to-l from-transparent to-royal-gold/50"
          />
        </div>

        {/* Logo Mark - Single Ring, Clean */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-22 h-22 sm:w-26 sm:h-26 rounded-full border border-royal-gold/40 flex items-center justify-center mb-5 bg-cream-light/30"
        >
          {/* Chai Cup Icon */}
          <svg
            viewBox="0 0 48 48"
            className="w-10 h-10 sm:w-12 sm:h-12 text-royal-gold"
            fill="currentColor"
          >
            {/* Steam */}
            <g opacity="0.5">
              <path
                d="M18 10c0-1.5 0.8-3 1.2-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M24 8c0-1.5 0.8-3 1.2-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M30 10c0-1.5 0.8-3 1.2-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </g>

            {/* Cup Body */}
            <path d="M10 16C10 14 12 12 15 12H33C36 12 38 14 38 16V20C38 21 37.5 22 36.5 22.5C38 23 40 24.5 40 27V30C40 34 37 37 33 37H31C31 40 29 42 26 42H22C19 42 17 40 17 37H15C11 37 8 34 8 30V27C8 24.5 10 23 11.5 22.5C10.5 22 10 21 10 20V16Z" />
          </svg>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-chai-brown tracking-wide">
            Chai Culture
          </h1>
        </motion.div>

        {/* Simple Bottom Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center gap-2 mt-6"
        >
          <span className="w-10 sm:w-14 h-px bg-linear-to-r from-transparent to-royal-gold/40" />
          <svg
            className="w-1 h-1 text-royal-gold/40"
            viewBox="0 0 4 4"
            fill="currentColor"
          >
            <circle cx="2" cy="2" r="2" />
          </svg>
          <span className="w-10 sm:w-14 h-px bg-linear-to-l from-transparent to-royal-gold/40" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logo;
