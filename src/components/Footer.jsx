import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
      className="py-10 sm:py-12 border-t border-chai-brown/8"
    >
      <div className="w-full max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Simple Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-12 h-px bg-royal-gold/20" />
          <svg
            className="w-1.5 h-1.5 text-royal-gold/30"
            viewBox="0 0 6 6"
            fill="currentColor"
          >
            <circle cx="3" cy="3" r="3" />
          </svg>
          <span className="w-12 h-px bg-royal-gold/20" />
        </div>

        {/* Social Icons */}
        <div className="mb-8">
          <SocialIcons />
        </div>

        {/* Copyright */}
        <p className="text-center font-sans text-[11px] text-chai-brown/35 tracking-wide">
          © {currentYear} Chai Culture. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
