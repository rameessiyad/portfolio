import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: -500,
      y: 10,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="text-container" variants={variants}>
        <p>
          I build scalable, full stack solutions that bring <br />
          your digital vision to life.
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <img src="/services.jpg" alt="img" />
          <h1>
            <b>Innovative </b>Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>Digital Growth.
          </h1>
        </div>
      </motion.div>
      <motion.div className="list-container" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightGray", color: "black" }}
        >
          <h2>Full Stack Development</h2>
          <p>
            Delivering complete web solutions, from frontend to backend, to
            create dynamic and high-performance web applications. I specialize
            in building custom, scalable applications tailored to your business
            needs.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightGray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            Designing responsive, user-friendly interfaces that enhance user
            experience. I use modern JavaScript frameworks and libraries, along
            with CSS frameworks, to create visually appealing and intuitive
            layouts across devices.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightGray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            Developing secure and efficient server-side logic to support
            seamless web applications. I implement robust APIs, handle data
            management, and integrate authentication solutions to ensure a solid
            backend foundation.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightGray", color: "black" }}
        >
          <h2>Performance Optimization</h2>
          <p>
            Enhancing application performance through code optimization, load
            testing, and debugging to deliver a fast, smooth, and secure user
            experience
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
