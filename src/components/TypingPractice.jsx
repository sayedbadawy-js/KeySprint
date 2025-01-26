import  { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Keyboard, 
  Timer, 
  AlertTriangle, 
  Award 
} from 'lucide-react';

const TypingPractice = () => {
  const [username, setUsername] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [mistakes, setMistakes] = useState(0);
  const inputRef = useRef(null);

  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts."
  ];

  useEffect(() => {
    if (isTyping) {
      const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
      setCurrentText(randomText);
      setStartTime(Date.now());
      inputRef.current?.focus();
    }
  }, [isTyping]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    // Advanced mistake calculation
    const errors = value.split('').reduce((acc, char, idx) => {
      return char !== currentText[idx] ? acc + 1 : acc;
    }, 0);
    setMistakes(errors);

    // Accuracy calculation
    const totalCharacters = currentText.length;
    const correctCharacters = value.split('').filter((char, idx) => char === currentText[idx]).length;
    setAccuracy(Math.round((correctCharacters / totalCharacters) * 100));

    // WPM Calculation
    if (value.length > 0) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60;
      const wordsTyped = value.split(' ').length;
      setWpm(Math.round(wordsTyped / timeElapsed));
    }

    // End typing session
    if (value === currentText) {
      setIsTyping(false);
    }
  };

  const onStartTyping = (name) => {
    setUsername(name);
    setIsTyping(true);
    setUserInput('');
    setWpm(0);
    setMistakes(0);
    setAccuracy(100);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {!username ? (
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <Keyboard className="mx-auto text-blue-500 mb-4" size={64} />
            <h1 className="text-2xl font-bold mb-4">Typing Speed Challenge</h1>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  onStartTyping(e.target.value.trim());
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isTyping ? (
              <div>
                <div className="flex justify-between mb-4">
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Rocket className="text-green-500" />
                    <span>{wpm} WPM</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <AlertTriangle className="text-red-500" />
                    <span>{mistakes} Mistakes</span>
                  </motion.div>
                </div>

                <motion.div 
                  className="mb-4 p-4 bg-gray-100 rounded-lg"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                >
                  <p>{currentText}</p>
                </motion.div>

                <textarea
                  ref={inputRef}
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Start typing here..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />

                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Accuracy: {accuracy}%
                </motion.div>
              </div>
            ) : (
              <motion.div 
                className="text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <Award className="mx-auto text-yellow-500 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-4">Great job, {username}!</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center justify-center space-x-2">
                    <Rocket className="text-green-500" />
                    <span>Speed: {wpm} WPM</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <AlertTriangle className="text-red-500" />
                    <span>Mistakes: {mistakes}</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <Timer className="text-blue-500" />
                    <span>Accuracy: {accuracy}%</span>
                  </p>
                </div>
                <motion.button 
                  onClick={() => setUsername('')}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TypingPractice;