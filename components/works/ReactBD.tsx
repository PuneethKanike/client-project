import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Developer - Intern
        <span className="text-textGreen tracking-wide">@Codelab Systems</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2024 - Aug 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to client projects by building React frontends and REST APIs with Node.js.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Acquired practical knowledge of production-level project architectures.
        </li>
        
      </ul>
    </motion.div>
  );
};

export default ReactBD;
