// import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Keyboard, Target, TrendingUp } from 'lucide-react';

const TypingSprintLanding = () => {
  return (
    <motion.div 
      className="min-h-screen py-10 px-5 bg-gradient-to-br from-indigo-900 to-purple-700 text-white w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 z-10"
        >
          <h1 className="text-5xl font-bold tracking-tight">
            TypingSprint
            <span className="block text-xl text-purple-300 mt-2">Boost Your Typing Speed</span>
          </h1>
          
          <div className="space-y-4">
            <motion.div 
              className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="text-yellow-400" size={40} />
              <div>
                <h3 className="font-semibold">Lightning Fast Challenges</h3>
                <p className="text-sm text-purple-200">Test your typing speed in real-time</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target className="text-green-400" size={40} />
              <div>
                <h3 className="font-semibold">Precision Tracking</h3>
                <p className="text-sm text-purple-200">Measure accuracy & speed instantly</p>
              </div>
            </motion.div>
          </div>

          <motion.button
            className="bg-purple-600  hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-bold flex items-center space-x-2"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <Keyboard />
            <span>Start Typing Sprint</span>
          </motion.button>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex justify-center items-center"
        >
          <motion.div 
            className="w-80 h-80 bg-purple-500/30 absolute rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="relative z-10 bg-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-lg"
            initial={{ rotate: -5 }}
            animate={{ 
              rotate: [0, 5, -5, 0],
              y: [0, 20, -20, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-center">
              <TrendingUp className="mx-auto text-green-400" size={60} />
              <h2 className="text-2xl font-bold mt-4">Track Your Progress</h2>
              <p className="text-purple-200 mt-2">Real-time speed and accuracy metrics</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TypingSprintLanding;