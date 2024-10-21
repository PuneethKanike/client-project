import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        React Developer - Intern
        <span className="text-textGreen tracking-wide">@RDL Technologies</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2024 - may 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with senior developers to build React frontend components for client projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Proposed a design idea that was well-received by the senior developer and led to better user experience.
        </li>
       
      </ul>
    </motion.div>
  );
};

export default Google;
