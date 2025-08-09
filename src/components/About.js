import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, BookOpen } from 'lucide-react';

const timelineData = [
  {
    year: 'Jan 2021 – Present',
    title: 'Faculty Member',
    company: 'Dept. of CSE, Sylhet Engineering College affiliated with SUST, Bangladesh',
    description:
      'Core Courses- Data Structures & Algorithm, Introduction to Computer Language, Cyber Security & Ethics',
    icon: <Briefcase size={22} />,
    type: 'work',
  },
  {
  year: 'Sept 2021 – Present',
  title: 'Faculty Member',
  company: 'Dept. of CST, IBIT, Sylhet, Bangladesh',
  website: 'https://www.ibitsylhet.edu.bd', // added website field
  description:
    'Core Courses – OOP, Data Structures & Algorithm, DBMS, Computer Network, Discrete Mathematics.',
  icon: <Briefcase size={22} />,
  type: 'work',
},

  {
    year: 'Jun 2022 – Present',
    title: 'M.Sc (Engg.) in Computer Science & Engineering',
    company: 'Shahjalal University of Science and Technology (SUST), Bangladesh.',
    description:
      'Completed Course:  Natural Language Processing(NLP) & Software Quality Assuarance.',
    icon: <BookOpen size={22} />,
    type: 'Education',
  },
  {
    year: '2015 – 2020',
    title: 'B.Sc (Engg.) in Computer Science & Engineering',
    company: 'Shahjalal University of Science and Technology (SUST), Bangladesh',
    description:
      'Graduated with a strong foundation in research, data structures, algorithms, and Machine Learning.',
    icon: <BookOpen size={22} />,
    type: 'education',
  },
];

const About = () => {
  const { scrollYProgress } = useScroll({
    target: typeof window !== 'undefined' ? document.getElementById('timeline') : null,
    offset: ['start end', 'end start'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16"
      >
        <div className="flex-1 max-w-xl space-y-6">
          <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
  I’m <strong>Md. Monir Hossain</strong> — a curious mind at the intersection of 
  <strong> Machine Learning</strong>, <strong> Blockchain</strong>, 
  <strong> NLP</strong>, and <strong> LLMs</strong>. 
  With over four years in academia as an <strong>educator</strong>, 
  <strong> researcher</strong>, and <strong>programmer</strong>, I’m on a mission to craft 
  intelligent systems that make language truly understood.
  I am passionate about exploring innovative approaches to enhance language 
  understanding and retrieval systems.
  When I’m not diving into code or research, you’ll find me traveling the world 
  or getting lost in a good book — because creativity doesn’t stop at the classroom 
  or the lab.
</p>

          {/* <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Beyond teaching & research, I enjoy <em>travelng and reading </em> — bringing creativity to every aspect of my life.
          </p> */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
  I earned my Bachelor’s in <strong>Computer Science and Engineering </strong> 
  from <strong>Shahjalal University of Science and Technology (SUST), Bangladesh</strong>, 
  laying the foundation for my journey toward a <strong>Ph.D.</strong> in 
  <strong> Computer Science</strong>.
</p>

          <p className="text-lg font-semibold text-blue-700 dark:text-blue-400 text-justify">
  RESEARCH&nbsp;INTERESTS: 
   <span className="font-normal text-gray-800 dark:text-gray-200">
   &ensp;Machine Learning (ML), Blockchain Technology (BT), Natural Language Processing (NLP), 
    Large Language Models (LLM).
  </span>
</p>

        </div>

        <div className="flex-1 max-w-xl relative" id="timeline">
          <h3 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 text-center mb-8">Experience & Education</h3>
          <div className="relative pl-16 border-l-4 border-blue-600 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg p-6">
            <motion.div
              className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-600 to-transparent origin-top rounded"
              style={{ height: '100%', scaleY }}
            />
            {timelineData.map(({ year, title, company, description, icon, type }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className={`relative mb-10 p-5 rounded-xl bg-white/15 dark:bg-white/5 shadow-lg transition-all cursor-default group ${
                  type === 'education' ? 'border-l-4 border-green-500' : 'border-l-4 border-blue-500'
                }`}
              >
                <div
                  className={`absolute -left-14 top-1/2 -translate-y-1/2 p-2 rounded-full border-4 shadow-md flex items-center justify-center z-10 ${
                    type === 'education'
                      ? 'text-green-600 border-green-500 bg-green-100/10 shadow-green-300'
                      : 'text-blue-600 border-blue-500 bg-blue-100/10 shadow-blue-300'
                  }`}
                >
                  {icon}
                </div>
                <div>
                  <span className="block text-sm text-gray-600 dark:text-gray-400 mb-1">{year}</span>
                  <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">{title}</h4>
                  <h5 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">{company}</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
