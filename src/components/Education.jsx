import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const educationData = [
	{
		degree: 'Master of Computer Applications',
		institution: 'Orissa University of Agriculture and Technology',
		location: 'Bhubaneswar, Odisha, India',
		period: '2021 - 2023',
		description:
			'Studied computer science fundamentals, data structures, algorithms, and software engineering. Participated in various hackathons and coding competitions.',
		achievements: [
			'Led the Web Development Club for 2 years',
			'Completed research project on Web Development',
		],
	},
	{
		degree: 'Bachelor of Science (BSc) in Physics Hons.',
		institution: 'Utkal University',
		location: 'Bhubaneswar, Odisha, India',
		period: '2018-2021',
		description:
			'In-depth study of physics, mathematics, and computer science. Developed strong analytical and problem-solving skills.',
		achievements: [
			'Graduated with first class honors',
			'Participated in inter-college coding competitions',
		],
	},
	{
		degree: 'Higher Secondary Education',
		institution: 'Gandhi +2 Scinence College',
		location: 'Bhubaneswar, Odisha, India',
		period: '2016 - 2018',
		description:
			'Focused on Mathematics, Physics, Chemistry and Computer Science. Participated in various technical and cultural events.',
		achievements: [
			'School topper in Computer Science',
			'Led the school programming club',
		],
	},
]

const Education = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, amount: 0.2 })
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end end'],
	})

	const timelineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

	return (
		<section id="education" className="bg-dark-200 py-20">
			<div className="section-container" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">
						My <span className="gradient-text">Education</span>
					</h2>
					<p className="text-gray-400 max-w-3xl mx-auto mt-4">
						My educational journey has equipped me with strong fundamentals and
						practical skills in computer science and web development.
					</p>
				</motion.div>

				<div className="relative">
					<motion.div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-900/30 rounded-full">
						<motion.div
							className="w-full bg-primary-600 rounded-full"
							style={{ height: timelineProgress }}
						/>

						{educationData.map((_, index) => (
							<motion.div
								key={index}
								className="absolute left-1/2 transform -translate-x-1/2 z-20"
								style={{
									top: `${index * 33.33}%`,
									marginTop: '2rem',
								}}
							>
								<div className="w-3 h-3 rounded-full border-3 border-dark-200 bg-primary-600 shadow-sm relative">
									<motion.div
										className="absolute -inset-2 rounded-full bg-primary-500/40"
										animate={{
											scale: [1, 1.5],
											opacity: [0.5, 0],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: 'easeInOut',
											delay: index * 0.3,
										}}
									/>
								</div>
							</motion.div>
						))}
					</motion.div>

					{educationData.map((item, index) => (
						<motion.div
							key={index}
							initial={{
								opacity: 0,
								x: index % 2 === 0 ? 50 : -50,
							}}
							animate={
								isInView
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: index % 2 === 0 ? 50 : -50 }
							}
							transition={{ duration: 0.6, delay: 0.2 * index }}
							whileHover={{ scale: 1.02 }}
							className={`relative mb-12 ${
								index % 2 === 0
									? 'md:ml-auto md:pl-8 md:pr-0'
									: 'md:mr-auto md:pr-8 md:pl-0'
							} md:w-1/2 z-10`}
						>
							<motion.div
								className="card p-6 backdrop-blur-sm bg-dark-200/50
                          hover:bg-gradient-to-b hover:from-primary-600/10 hover:to-accent-600/10 
                          transition-all duration-300"
								whileHover={{
									boxShadow: '0 0 25px rgba(99, 102, 241, 0.2)',
								}}
							>
								<h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-primary-400 to-accent-400 
                             bg-clip-text text-transparent">
									{item.degree}
								</h3>
								<h4 className="text-lg text-primary-400 mb-4">
									{item.institution}
								</h4>

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

								<p className="text-gray-300 mb-4 leading-relaxed">
									{item.description}
								</p>

								<div>
									<h5 className="font-semibold mb-3 text-primary-300">
										Achievements
									</h5>
									<ul className="space-y-2">
										{item.achievements.map((achievement, idx) => (
											<motion.li
												key={idx}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.3 + 0.1 * idx }}
												className="flex items-center gap-2 p-2 rounded-lg text-gray-400 text-sm
                                 hover:bg-primary-600/10 transition-colors duration-300"
											>
												<span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
												{achievement}
											</motion.li>
										))}
									</ul>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Education