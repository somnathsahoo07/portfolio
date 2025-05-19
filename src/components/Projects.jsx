import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
                className="overflow-hidden rounded-xl bg-dark-200 shadow-md hover:shadow-glow transition-all duration-300 group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-primary-900/40 text-primary-300 text-xs rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-1 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub /> Code
                    </a>
                    {/* <a 
                      href={project.live}
                      className="flex items-center gap-1 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink /> Live Demo
                    </a> */}
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
            <a 
              href="https://github.com/somnathsahoo07" 
              target='_blank'
              className="btn btn-primary inline-flex items-center gap-2"
            >
              View All Projects <FiExternalLink />
            </a>
          </motion.div>
        </div>
      </section>
    </ClickSpark>
  )
}

export default Projects