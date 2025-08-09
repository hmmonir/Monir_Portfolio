// src/components/Hero.jsx
import profileImg from '../assets/images/webmonir.jpeg';
import resumePDF from "../assets/resume/MMH_CV.pdf";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center pt-8 md:pt-12 px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8 md:gap-10 text-center md:text-left">
        
        {/* Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex-1 flex justify-center"
        >
          <img
            src={profileImg}
            alt="Md. Monir Hossain"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 max-w-xl"
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0.3}
            className="text-lg font-medium text-gray-600 dark:text-gray-400"
          >
            <em>Hi, I'm</em>
          </motion.h2>
          <motion.h1
            variants={fadeInUp}
            custom={0.4}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100"
          >
            Md. Monir Hossain
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={0.5}
            className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-6"
          >
            <em> Lecturer & Researcher</em>
          </motion.p>
          <motion.p
  variants={fadeInUp}
  custom={0.6}
  className="text-base leading-relaxed text-gray-700 dark:text-gray-300 text-justify"
>
  Ph.D. aspirant in Computer Science, blending 4+ years of teaching and research 
  with a passion for <strong>ML, Blockchain, NLP, and LLM</strong> innovation.
  <br /><br />
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    Let’s build something exceptional!
  </span>
</motion.p>


          <motion.a
            variants={fadeInUp}
            custom={0.8}
            href={resumePDF}
            download="MMH_CV.pdf"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-transform duration-200 hover:-translate-y-1 active:scale-95"
          >
            <em> Download My CV </em>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
