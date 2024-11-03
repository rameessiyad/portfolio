import { motion } from "framer-motion";

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
      closed: {
        transition: {
          staggerChildren: 0.05,
          staggerDirection: -1,
        },
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
