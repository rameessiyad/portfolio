import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)} style={{ zIndex: 2000 }} >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          d="M 2 2.5 H 24.5"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 H 24.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M 2 11.5 H 24.5"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          d="M 2 20.5 H 24.5"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 20.5 H 24.5" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
