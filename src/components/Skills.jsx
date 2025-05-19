import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiNextdotjs, SiFirebase, SiTypescript } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const skills = [
  { name: 'ReactJS', icon: <FaReact size={40} className="text-blue-400" />, level: 90 },
  { name: 'JavaScript', icon: <IoLogoJavascript size={40} className="text-yellow-400" />, level: 95 },
  { name: 'NodeJS', icon: <FaNodeJs size={40} className="text-green-500" />, level: 85 },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-400" />, level: 80 },
  { name: 'ExpressJS', icon: <SiExpress size={40} className="text-gray-400" />, level: 85 },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" />, level: 98 },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" />, level: 92 },
  { name: 'TypeScript', icon: <SiTypescript  className="text-blue-400" style={{ fontSize: '40px' }}/>, level: 80 },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={40} className="text-cyan-400" />, level: 90 },
  { name: 'Redux', icon: <SiRedux size={40} className="text-purple-500" />, level: 85 },
  { name: 'NextJS', icon: <SiNextdotjs size={40} className="text-white" />, level: 75 },
  { name: 'AWS', icon: <FaAws size={40} className="text-yellow-500" />, level: 70 },
  { name: 'Firebase', icon: <SiFirebase size={40} className="text-orange-400" />, level: 80 },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-red-500" />, level: 85 },
  { name: 'Github', icon: <FaGithub size={40} className="text-gray-400" />, level: 85 },
]

const skillCategories = [
  { title: 'Frontend', skills: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript' ,'TailwindCSS', 'Redux', 'NextJS'] },
  { title: 'Backend', skills: ['NodeJS', 'ExpressJS', 'MongoDB'] },
  { title: 'Tools', skills: ['Git', 'AWS', 'Firebase', 'Github'] }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  return (
    <section id="skills" className="bg-dark-200 py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4">
            I have experience with various technologies in the web development ecosystem.
            Here are the key skills and technologies I work with:
          </p>
        </motion.div>
        
        {/* Skill Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Slider {...sliderSettings}>
            {skills.map((skill, index) => (
              <div key={skill.name} className="px-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card flex flex-col items-center p-6 h-[180px]"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                  <div className="w-full bg-dark-300 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 * categoryIndex }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skillName) => {
                  const skill = skills.find(s => s.name === skillName)
                  return (
                    <li key={skillName} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{skill?.icon}</span>
                        <span>{skillName}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill?.level}%</span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills