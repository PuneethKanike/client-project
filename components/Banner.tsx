import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter

const Banner = () => {
  // Bouncing animation for the right image with continuous up and down motion
  const imageBounceAnimation = {
    y: [0, -20, 0], // Moves up 20px and back down
    transition: {
      duration: 2, // Duration of the animation
      ease: "easeInOut", // Smoother easing
      repeat: Infinity, // Keep repeating the bounce
      repeatType: "loop", // Loop the animation
    },
  };

  return (
    <section
      id="home"
      className=" max-w-contentContainer mx-auto py-10 mdl:py-28 flex flex-col lgl:flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-4 relative overflow-hidden"
      style={{ overflow: "visible" }} // Allow overflow
    >
      {/* Left Side (Text with bouncing animation) */}
      <motion.div
        className="flex flex-col gap-4 lgl:gap-8 flex-1 relative z-10"
      >
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl text-textDark lgl:text-5xl font-titleFont font-semibold"
        >
          Hi There,
        </motion.h1>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold"
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
            <Typewriter
              words={[
                "Interior Designing",
                "3D Visualizing",
                "Space Planning",
                "Design Managing",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.p>

        <a
          href="https://github.com/PuneethKanike"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
          >
            Check out my project!
          </motion.button>
        </a>
      </motion.div>

      {/* Right Side (Image with continuous bounce animation and overflow) */}
      <motion.div
        className="hidden lgl:flex bounce flex-1 relative "
        animate={imageBounceAnimation} // Apply animation
        style={{
          zIndex: 5,
          position: 'absolute',
          top: '0',
          right: '0',
          width: '60%', // Adjust width to overflow slightly
          height: '100%', // Allow height to overflow
          overflow: 'hidden', // Ensure overflow is visible
        }}
      >
        <div
           style={{
    backgroundImage: `url(../assets/images/bg3.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "right",
    backgroundSize: '150%', // Change to '150%' for a larger size or use 'cover'
    height: "100%",
    width: "100%",
  }}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
