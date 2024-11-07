/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "MERN ecommerce",
    img: "/ecommerce-project.png",
    description:
      "A full-featured eCommerce web app built with the MERN stack, offering user authentication, product browsing, a shopping cart, and an admin panel for product management. The backend is powered by a RESTful API with Node.js, Express, and MongoDB, while JWT secures user sessions. The app is fully responsive and designed for a seamless shopping experience. ",
  },

  {
    id: 2,
    title: "Next js Blog",
    img: "/blogs-project.png",
    description:
      "A dynamic blog app built with Next.js for a sleek and responsive frontend and Node.js with MongoDB on the backend. Users can browse, read, and interact with posts, while the admin can manage content seamlessly. Designed with a polished, modern UI for an engaging reading experience.",
  },

  {
    id: 3,
    title: "Supermarket sales app",
    img: "sales-project.png",
    description:
      "A comprehensive sales management app for supermarkets, built with the MERN stack. The app features product and sales management, along with the ability to generate and print bills or invoices. Designed to streamline operations and improve efficiency in day-to-day supermarket sales.",
  },

  {
    id: 4,
    title: "Food delivery app",
    img: "food-delivery-project.png",
    description:
      "A full stack food delivery app allowing users to browse and filter foods by category, add items to their cart, and track order status. The app includes an admin panel for managing orders, food items, and inventory, providing a smooth experience for both customers and administrators.",
  },
];

// eslint-disable-next-line react/prop-types
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  // eslint-disable-next-line react/prop-types
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="img-container" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>View</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
