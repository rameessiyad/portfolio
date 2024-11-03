import "./parallax.scss";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Parallax = ({ type }) => {
  return (
    <div className="parallax">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {type === "services" ? "Services" : "Projects"}
      </motion.h1>
    </div>
  );
};

export default Parallax;
