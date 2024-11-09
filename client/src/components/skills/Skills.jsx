import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const skillsData = [
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "Python", icon: "/python.png" },
  { name: "PHP", icon: "/php.png" },
  { name: "React.js", icon: "/reactjs.png" },
  { name: "Next.js", icon: "/nextjs.png" },
  { name: "Tailwind CSS", icon: "/tailwind-css.png" },
  { name: "Bootstrap", icon: "/bootstrap.png" },
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "Nest.js", icon: "/nestjs.png" },
  { name: "MongoDB", icon: "/mongodb.png" },
  { name: "MySQL", icon: "/mysql.png" },
  { name: "Prisma ORM", icon: "/prisma.png" },
  { name: "Docker", icon: "/docker.png" },
  { name: "Git", icon: "/git.png" },
  { name: "Github", icon: "/github.png" },
  { name: "Chatgpt", icon: "/chatgpt.png" },
];

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="skills-header" variants={variants}>
        <h1>My Skills</h1>
        <p>
          Technologies and tools I work with to build full-stack applications.
        </p>
      </motion.div>
      <motion.div className="skills-list" variants={variants}>
        {skillsData.map((skill) => (
          <motion.div
            className="skill-box"
            key={skill.name}
            whileHover={{ scale: 1.1, backgroundColor: "#222" }}
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="skill-icon"
            />
            <h2>{skill.name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
