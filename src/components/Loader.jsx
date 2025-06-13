import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-300 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, -20, 20],
              x: [null, -20, 20],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="text-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-4"
        >
          <motion.div 
            className="inline-block rounded-full p-1 relative"
            style={{
              background: "linear-gradient(45deg, var(--primary-500), var(--accent-500), var(--secondary-500))",
              backgroundSize: "200% 200%"
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              rotate: 360
            }}
            transition={{
              backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-dark-300 flex items-center justify-center relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-2xl font-bold gradient-text relative z-10"
                animate={{ 
                  textShadow: ["0 0 10px rgba(99,102,241,0)", "0 0 20px rgba(99,102,241,0.5)", "0 0 10px rgba(99,102,241,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SS
              </motion.span>
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary-500/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="space-y-2">
          <motion.h3
            className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Somnath Sahoo
          </motion.h3>

          <motion.div 
            className="flex items-center justify-center gap-1 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>Loading</span>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                .
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Loader