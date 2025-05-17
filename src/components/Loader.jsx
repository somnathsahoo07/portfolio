import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-300">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <motion.div 
            className="inline-block rounded-full overflow-hidden bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 p-1"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear" 
            }}
          >
            <div className="w-16 h-16 rounded-full bg-dark-300 flex items-center justify-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl font-bold gradient-text"
              >
                SS
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-bold gradient-text"
        >
          Somnath Sahoo
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 mt-2"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </div>
  )
}

export default Loader