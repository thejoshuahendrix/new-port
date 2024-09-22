import { motion } from "framer-motion";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 750, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          This is the <span>Heart</span> of my passion.
        </motion.h1>
        <motion.p variants={itemVariants}>Please Enter Below</motion.p>
        <motion.button
          className="cta-button"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // CHANGE ROUTE TO HOME
            navigate("/home");
          }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
