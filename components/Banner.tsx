import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl text-textDark lgl:text-5xl font-titleFont font-semibold flex flex-col"
      >
        Hi There,
      </motion.h1>
      
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        <span>
          {"I'm Mohammed"} <span className="text-textGreen">Safwan</span>.
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-2xl md:max-w-[650px] text-textDark font-medium"
      >
        I Am Into{" "}
        <span className="text-textGreen font-bold">
          {/* Implementing Typewriter effect here */}
          <Typewriter
            words={["Interior Designing", "3D Visualizing", "Space Planning", "Design Managing"]}
            loop={true} // Loop through words
            cursor
            cursorStyle="|" // Style of the cursor
            typeSpeed={70} // Typing speed
            deleteSpeed={50} // Deleting speed
            delaySpeed={1000} // Delay before changing to next word
          />
        </span>
      </motion.p>
      
      <a href="https://github.com/PuneethKanike" target="_blank" rel="noopener noreferrer">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
