import { Link } from 'react-scroll'
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-400 pt-12 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-800"
        >
          <div className="mb-6 md:mb-0">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-2"
            >
              Somnath Sahoo
            </motion.h3>
            <p className="text-gray-400 max-w-md hover:text-gray-300 transition-colors duration-300">
              Creating innovative web solutions with modern technologies
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {[
                { icon: <FiGithub />, url: "https://github.com/somnathsahoo07" },
                { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/somnath-sahoo-814774238/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-xl relative group"
                >
                  {social.icon}
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.url.includes('github') ? 'GitHub' : 'LinkedIn'}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
              >
                <span className='mt-6'>Back to Top</span>
                <FiArrowUp className="animate-bounce" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            &copy; {currentYear} Somnath Sahoo. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500"
          >
            {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item, index) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-primary-400 transition-colors duration-300 cursor-pointer relative group"
                >
                  {item}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  />
                </motion.span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer