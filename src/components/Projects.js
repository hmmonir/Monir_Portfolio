import { motion } from 'framer-motion';
import { ExternalLink, } from 'lucide-react';
// import gocart from '../assets/images/GoCart.png';
// import gallery from '../assets/images/image_gallery.png';
// import todo from '../assets/images/todo_app.png';
// import weather from '../assets/images/weather.png';


// const projects = [
//   {
//     title: 'GoCart',
//     description:
//       'Built a modern e-commerce platform using React with dynamic listings, shopping cart, and seamless API integration.',
//     image: gocart,
//     tags: ['React', 'Tailwind'],
//     github: 'https://github.com/HussainShafayet/ecom',
//     demo: 'https://drive.google.com/file/d/1jOW66tm644Ccgdb7saQOlccDAQQSlNLn/view?usp=sharing',
//   },
//   {
//     title: 'Image Gallery',
//     description:
//       'Simplified image management – upload, delete, and sort effortlessly for a clean and organized UI.',
//     image: gallery,
//     tags: ['React', 'Django', 'SQLite'],
//     github: 'https://github.com/HussainShafayet/image-gallery/tree/master',
//     demo: 'https://hussainshafayet.github.io/image-gallery/',
//   },
//   {
//     title: 'Todo App',
//     description:
//       'A modern, responsive Todo app built with React, featuring drag-and-drop, theming, and real-time search.',
//     image: todo,
//     tags: ['React', 'Tailwind'],
//     github: 'https://github.com/HussainShafayet/todo',
//     demo: "https://todo-app-91.netlify.app/",
//   },
//    {
//     title: 'Weather App',
//     description:
//       'A React app displaying current weather and 5-day forecast using OpenWeather API, Axios, and Tailwind CSS. Shows temperature, humidity, wind, and weather icons with a clean, responsive design.',
//     image: weather,
//     tags: ['React', 'Tailwind'],
//     github: 'https://github.com/HussainShafayet/weatherapp',
//     demo: 'https://weatherdekhben.netlify.app/',
//   },
//   {
//     title: 'Zerocode',
//     description:
//       'Accounting app with real-time updates, API integration, and modular UI using Ember.js and WebSockets.',
//     image: '/project.avif', // Put this in your public folder
//     tags: ['Ember.js', 'Ember Data', 'WebSockets'],
//     github: 'https://github.com/user/Zerocode',
//     demo: '',
//   },
//   {
//     title: 'HR System',
//     description:
//       'HR web app built with Ember.js, focusing on real-time updates and high-performance modular components.',
//     image: '/project.avif',
//     tags: ['Ember.js', 'WebSockets'],
//     github: 'https://github.com/user/hr',
//     demo: '',
//   },
// ];

const ProjectShowcase = () => {
  return (
    <section id="publications" className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      Publications
    </h2>

    <div className="space-y-8">
      {[
        {
          title: "Word Completion and Sequence Prediction in Bangla Language Using Trie and a Hybrid Approach of Sequential LSTM and N-gram",
          conference: "2nd International Conference on Advanced Information and Communication Technology (ICAICT), 2020",
          authors: "Soumik Sarker, Md Ekramul Islam, Jilur Rahman Saurav, Md Mahadi Hasan Nahid",
          link: "#"
        },
        {
          title: "Bangla Handwritten Character Recognition Using Deep Convolutional Autoencoder Neural Network",
          conference: "2nd International Conference on Advanced Information and Communication Technology (ICAICT), 2020",
          authors: "Md Ali Azad, Hijam Sushil Singha, Md Mahadi Hasan Nahid",
          link: "#"
        },
        {
          title: "Bengali Question Answering System for Factoid Questions: A statistical approach",
          conference: "International Conference on Bangla Speech and Language Processing (ICBSLP), 27-28 September, 2019",
          authors: "Sourav Sarker, Syeda Tamanna Alam Monisha, Md Mahadi Hasan Nahid",
          link: "#"
        }
      ].map((pub, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="transition-all duration-300 bg-white/30 dark:bg-gray-900/50 backdrop-blur-md rounded-xl border border-transparent hover:border-blue-500 shadow-md p-6"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {pub.title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            <strong>Conference:</strong> {pub.conference}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            <strong>Authors:</strong> {pub.authors}
          </p>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium transition hover:scale-105"
          >
            <ExternalLink size={16} />
            View Paper
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProjectShowcase;
