import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter

const Banner = () => {
  // Bouncing animation for the left section
  const bounceAnimation = {
    animate: {
      y: [0, -10, 0], // Moves the element up 10px and then down
      transition: {
        duration: 1.5, // Animation duration
        repeat: Infinity, // Repeats indefinitely
        repeatType: "loop", // Repeats the animation in a loop
      },
    },
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-28 flex flex-col lgl:flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-4 relative"
      style={{ position: "relative" }} // Ensure parent container is relative
    >
      {/* Left Side (Text with bouncing animation) */}
      <motion.div
        className="flex flex-col gap-4 lgl:gap-8 flex-1 relative z-10"
        animate="animate"
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

      {/* Right Side (Image) */}
      <motion.div
        className="flex-1 relative"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ zIndex: 5, position: 'absolute', top: '0', right: '0', width: '50%', height: '100%' }}
      >
        <div
          style={{
            backgroundImage: `url(../assets/images/bg4.png)`, // Set the image as background
            backgroundPosition: "center", // Center the background image
            backgroundRepeat: "no-repeat", // No image repetition
            backgroundSize: 'cover',
            height: "100%", // Full height of the container
            width: "100%", // Full width of the container
          }}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
