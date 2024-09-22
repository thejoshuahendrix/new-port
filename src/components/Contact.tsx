import { motion } from "framer-motion";
import "../styles/Contact.css";

const myInfo = {
  name: "Josh Hendrix",
  email: "thejoshuahendrix@gmail.com",
  github: "thejoshuahendrix",
  linkedin: "joshua-hendrix-a03066144",
};

const hrefText = `mailto:${myInfo.email}`;
const githubLink = `https://github.com/${myInfo.github}`;
const linkedinLink = `https://www.linkedin.com/in/${myInfo.linkedin}`;

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Name: {myInfo.name}</p>
        <p>
          Email: <a href={hrefText}>{myInfo.email}</a>
        </p>
        <p className="social-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          |
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            {" "}
            LinkedIn
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
