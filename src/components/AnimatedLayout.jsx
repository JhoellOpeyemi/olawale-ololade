import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, type: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

AnimatedLayout.propTypes = {
  children: PropTypes.element,
};

export default AnimatedLayout;
