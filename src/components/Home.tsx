import { motion } from "framer-motion";
import "../styles/Home.css";

const HomePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <div className="home-page">
      <motion.section
        className="about-section"
        custom={1}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        id="about"
      >
        <h2>About Me</h2>
        <p>
          {/* Replace with your own description */}
          Driven and innovative software engineer with over seven years of
          experience specializing in front-end development and complex
          problem-solving. Demonstrates a strong track record of leading
          cross-functional teams to deliver high-impact projects, including
          platform migrations, enterprise-level application development, and VR
          game creation. Recognized for technical expertise, dependability, and
          a compassionate leadership style, thrives in collaborative
          environments, leveraging creativity to drive growth and optimize
          solutions.
        </p>
      </motion.section>
      <motion.section
        className="skills-section"
        custom={2}
        id="skills"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <ul>
          {/* List your skills here */}
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>AWS</li>
          <li>D3.js</li>
          <li>Docker</li>
          <li>CSS &amp; Sass</li>
        </ul>
      </motion.section>
      <motion.section
        className="projects-section"
        custom={3}
        initial="hidden"
        whileInView="visible"
        id="projects"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="project-cards">
          {/* Add your projects here */}
          <div className="project-card">
            <h3>Binary vs. Linear Search</h3>
            <p>
              A web application that visually represents binary and linear
              search algorithms. Utilizes an object-oriented approach with a
              custom Node class, demonstrating the time complexity differences
              through dynamic visual updates.
            </p>
            <a
              href="https://github.com/thejoshuahendrix/BinaryvsLinear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project-button">View Project</button>
            </a>
          </div>
          <div className="project-card">
            <h3>Social Media App</h3>
            <p>
              A social media platform with full posts, comments, likes, video
              and photo hosting with S3, user authentication via JSON web
              tokens, and state management with Redux-Toolkit. Built with a
              TypeScript-based stack, MongoDB and Express.js.
            </p>
            <a
              href="https://github.com/thejoshuahendrix/MiniFacebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project-button">View Project</button>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
