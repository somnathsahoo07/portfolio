import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiDownload, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import Particles from './particles'
import ClickSpark from './ClickSpark'
import Magnet from './Magnet'

import selfImg from '../assets/Som_profile1.jpg'

const Hero = () => {
  return (
    <ClickSpark
      sparkColor="#7C3AED"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Particles 
            particleColors={["#ffffff", "#f8f8f8"]}
            particleCount={150}
            speed={0.3}
            particleBaseSize={150}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary-700/10"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-accent-400 font-semibold mb-2 tracking-wider"
              >
                HELLO, I'M
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4"
              >
                <span className="gradient-text">Somnath Sahoo</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-gray-300 mb-6"
              >
                MERN Full Stack Developer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 text-lg"
              >
                Passionate about creating seamless web experiences and innovative applications using modern technologies
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Magnet>
                  <a 
                    href="/documents/Resume.pdf" 
                    download="Somnath_Sahoo_Resume.pdf"
                    className="btn btn-primary flex items-center justify-center gap-2"
                  >
                    <FiDownload /> Resume
                  </a>
                </Magnet>
                <Magnet>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    className="btn btn-secondary flex items-center justify-center gap-2"
                  >
                    Hire Me <FiArrowRight />
                  </Link>
                </Magnet>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-primary-600/20 via-accent-600/20 to-secondary-600/20 flex items-center justify-center overflow-hidden">
                  <div className="w-[250px] h-[250px] rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center animate-float shadow-glow">
                    <div className="text-white text-6xl font-bold">
                      <img
                         className='w-full h-full rounded-full object-cover overflow-hidden'
                      src={selfImg} alt="img" />
                    </div>
                  </div>
                </div>
                
                {['MongoDB', 'Express', 'React', 'Node.js'].map((tech, index) => (
                  <div 
                    key={tech}
                    className="absolute bg-dark-200 rounded-lg shadow-md px-3 py-2 text-sm font-medium"
                    style={{
                      top: `${index * 25}%`,
                      right: index % 2 === 0 ? '10%' : 'auto',
                      left: index % 2 === 1 ? '10%' : 'auto',
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <FiChevronDown className="text-primary-500 text-3xl animate-bounce" />
        </motion.div>
      </section>
    </ClickSpark>
  )
}

export default Hero