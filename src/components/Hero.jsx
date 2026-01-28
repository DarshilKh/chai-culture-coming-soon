import { motion } from "framer-motion";
import Logo from "./Logo";

const fadeUpVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const Hero = () => {
  return (
    <section className="text-center mb-12 sm:mb-14">
      <Logo />

      {/* Tagline */}
      <motion.p
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        custom={0.25}
        className="font-serif text-xl sm:text-2xl text-royal-gold tracking-wide italic mb-8"
      >
        "Brew the Royal Tradition"
      </motion.p>

      {/* Brand Description */}
      <motion.p
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="font-sans text-base sm:text-lg text-chai-brown-light/90 font-light leading-relaxed max-w-md mx-auto mb-10 text-balance"
      >
        Premium instant chai crafted to honor the tea traditions of India's
        royal households. Heritage in every sip.
      </motion.p>

      {/* Launching Soon Badge - Static, Confident */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        custom={0.55}
        className="inline-block"
      >
        <span className="inline-block font-sans text-xs tracking-royal uppercase text-chai-brown/60 border border-chai-brown/15 px-5 py-2.5 rounded-sm">
          Launching Soon
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
