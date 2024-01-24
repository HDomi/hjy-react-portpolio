import { motion } from "framer-motion";

const FadeInWrapper = ({ children, ...rest }: { children: any }) => {
  const pageEffect = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="motion-page"
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
