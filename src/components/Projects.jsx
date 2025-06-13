import { useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

import BarcodeImg from '../assets/Projects/barcode_app.png'
import ChatAppImg from '../assets/Projects/chatapp.png'
import JobSyncImg from '../assets/Projects/jobsync.png'
import ClickSpark from './ClickSpark'

const projects = [
  {
    title: 'QuickDine | Barcode App',
    description: 'QR-Based Ordering: Customers can scan a QR code to access the menu, place orders and track status (e.g, order received, preparing, served) Role-Based System: Owners can assign tasks to managers.',
    image: BarcodeImg,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind.css'],
    github: 'https://github.com/dasjayadev/BarcodeApp',
    live: '#',
  },
  {
    title: 'JobSync AI ',
    description: 'Developed a job tracking platform to manage applications and job postings. Users can add, update, and track job applications in a centralized dashboard Implemented secure authentication with JWT and role-based access.',
    image: JobSyncImg,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind.css', 'JWT'],
    github: 'https://github.com/prasad-bigdp/job-sync',
    live: '#',
  },
  {
    title: 'Chat App',
    description: 'Built a real-time chat app using MongoDB, Express, React, and Node.js. Implemented user auth with JWT and real-time messaging via Socket.io. Supported 1:1 and group chats with message history.',
    image: ChatAppImg,
    technologies: ['React', 'Tailwind.css', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Zustand'],
    github: 'https://github.com/somnathsahoo07/Chat-App',
    live: '#',
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <ClickSpark
      sparkColor="#5B21B6"
      sparkSize={15}
      sparkRadius={20}
      sparkCount={12}
      duration={500}
    >
      <section id="projects" className="bg-dark-300 py-20">
        <div className="section-container" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mt-4">
              Here are some of my recent projects that showcase my skills and experience.
              Each project reflects my passion for building impactful web applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-xl bg-dark-200 shadow-md hover:shadow-glow 
                         transition-all duration-300 group backdrop-blur-sm 
                         hover:bg-gradient-to-b hover:from-primary-600/10 hover:to-accent-600/10"
              >
                <div className="h-56 overflow-hidden relative group">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700"
                    whileHover={{ scale: 1 }}
                    initial={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent
                             flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.span 
                      className="text-white text-lg font-semibold px-4 py-2 rounded-full 
                               bg-primary-500/80 backdrop-blur-sm"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project
                    </motion.span>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-accent-400 
                               bg-clip-text text-transparent">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * techIndex }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-primary-900/40 text-primary-300 text-xs rounded-full
                                 border border-primary-500/20 hover:border-primary-500/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <motion.a 
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 
                               transition-colors duration-300 px-4 py-2 rounded-lg 
                               hover:bg-primary-500/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="text-lg" /> 
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a 
              href="https://github.com/somnathsahoo07" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-flex items-center gap-2 relative overflow-hidden
                       group hover:shadow-glow transition-all duration-300"
            >
              <span className="relative z-10">View All Projects</span>
              <FiExternalLink className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </ClickSpark>
  )
}

export default Projects