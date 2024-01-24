import { motion } from "framer-motion";

const Wrapper = ({ children }: { children: any }) => {
  return (
    <motion.div
      className="motion-page"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
