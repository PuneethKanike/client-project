import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 bg-bodyColor flex items-center justify-center z-50 transition-all ${
        loading ? "visible" : "invisible"
      }`}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1], // Pulsating scale effect
          borderRadius: ["20%", "50%", "20%"], // Morphing shape
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="p-5 rounded-full "
      >
        <motion.img
          src="/assets/images/logo.png"
          alt="Logo"
          className="w-20 h-20"
          animate={{
            filter: ["blur(0px)", "blur(5px)", "blur(0px)"], // Blurring effect
          }}
          transition={{
            duration: 1.0,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
