import { Link } from 'react-scroll'
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-800">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Somnath Sahoo</h3>
            <p className="text-gray-400 max-w-md">
              Creating innovative web solutions with modern technologies
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/somnathsahoo07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/somnath-sahoo-814774238/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
              >
                <FiLinkedin />
              </a>
              {/* <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
              >
                <FiTwitter />
              </a> */}
            </div>
            
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group cursor-pointer"
            >
              <span>Back to Top</span>
              <FiArrowUp className="group-hover:translate-y-[-4px] transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Somnath Sahoo. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer