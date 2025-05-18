import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const educationData = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Orissa University of Agriculture and Technology',
    location: 'Bhubaneswar, Odisha, India',
    period: '2021 - 2023',
    description: 'Studied computer science fundamentals, data structures, algorithms, and software engineering. Participated in various hackathons and coding competitions.',
    achievements: [
      'Led the Web Development Club for 2 years',
      'Completed research project on Web Development'
    ]
  },
  {
    degree: 'Bachelor of Science (BSc) in Physics Hons.',
    institution: 'Utkal University',
    location: 'Bhubaneswar, Odisha, India',
    period: '2018-2021',
    description: 'In-depth study of physics, mathematics, and computer science. Developed strong analytical and problem-solving skills.',
    achievements: [
      'Graduated with first class honors',
      'Participated in inter-college coding competitions'
    ]
   
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Gandhi +2 Scinence College',
    location: 'Bhubaneswar, Odisha, India',
    period: '2016 - 2018',
    description: 'Focused on Mathematics, Physics, Chemistry and Computer Science. Participated in various technical and cultural events.',
    achievements: [
      'School topper in Computer Science',
      "Led the school programming club"
    ]
  }
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="education" className="bg-dark-200 py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4">
            My educational journey has equipped me with strong fundamentals and practical skills
            in computer science and web development.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-900 rounded-full"></div>
          
          {/* Education items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0' : 'md:mr-auto md:pr-8 md:pl-0'} md:w-1/2 z-10`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 top-8 w-5 h-5 rounded-full border-4 border-dark-200 bg-primary-600 shadow-glow"></div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <h4 className="text-lg text-primary-400 mb-4">{item.institution}</h4>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{item.description}</p>
                
                <div>
                  <h5 className="font-semibold mb-2 text-primary-300">Achievements</h5>
                  <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education