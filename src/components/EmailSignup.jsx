import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("idle");
    setErrorMessage("");

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <motion.section
      variants={fadeUpVariant}
      initial="hidden"
      animate="visible"
      className="max-w-sm mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-10 h-px bg-chai-brown/15" />
          <svg
            className="w-4 h-4 text-royal-gold/60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="w-10 h-px bg-chai-brown/15" />
        </div>
        <p className="font-sans text-sm text-chai-brown/60 font-light">
          Be the first to experience our collection
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center py-10 px-6 border border-royal-gold/20 rounded-sm bg-cream-light/50"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-12 h-12 mx-auto mb-5 rounded-full border border-royal-gold/40 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-royal-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <h3 className="font-serif text-xl text-chai-brown mb-2">
              Welcome to the Circle
            </h3>
            <p className="font-sans text-sm text-chai-brown-light font-light">
              We'll notify you when we launch.
            </p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address"
                className={`
                  w-full px-4 py-3.5
                  bg-warm-white
                  border rounded-sm
                  font-sans text-sm text-chai-brown
                  placeholder:text-chai-brown/35
                  focus:outline-none focus:border-royal-gold/50
                  transition-colors duration-300
                  ${
                    status === "error"
                      ? "border-spice/30"
                      : "border-chai-brown/15 hover:border-chai-brown/25"
                  }
                `}
                aria-label="Email address"
              />

              {/* Error Message */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs text-spice/70 pl-1"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.15 }}
              className="
                w-full px-6 py-3.5
                bg-chai-brown text-cream
                font-sans text-sm tracking-elegant uppercase
                rounded-sm
                cursor-pointer
                hover:bg-chai-brown-dark
                focus:outline-none focus:ring-2 focus:ring-royal-gold/30 focus:ring-offset-2 focus:ring-offset-cream
                transition-colors duration-300
              "
            >
              Join the Royal Circle
            </motion.button>

            {/* Privacy Note */}
            <p className="text-center text-[11px] text-chai-brown/40 font-light pt-1">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default EmailSignup;
