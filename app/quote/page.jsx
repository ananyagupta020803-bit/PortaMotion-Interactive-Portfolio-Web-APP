'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'

export default function QuotesPage() {
  const steps = [
    { question: "Please select the service you want.", type: "options", options: ["Branding", "Web Development", "App Development", "SEO", "Marketing"] },
    { question: "What is your business name?", type: "text" },
    { question: "Describe your target audience.", type: "textarea" },
    { question: "What is your budget range?", type: "text" },
    { question: "Preferred color palette?", type: "text" },
    { question: "Do you need logo design?", type: "options", options: ["Yes", "No"] },
    { question: "Do you need social media management?", type: "options", options: ["Yes", "No"] },
    { question: "Website or App preference?", type: "options", options: ["Website", "App", "Both"] },
    { question: "Timeline for project completion?", type: "text" },
    { question: "Any additional notes or requirements?", type: "textarea" },
  ]

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
    }
  }

  const handleChange = (e) => setFormData({ ...formData, [currentStep]: e.target.value })
  const handleOptionSelect = (option) => setFormData({ ...formData, [currentStep]: option })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form Submitted!")
    console.log(formData)
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 120 : -120, 
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -120 : 120,
    }),
  }

  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-32 relative pt-[120px]">

        {/* Hero */}
        <div className="text-center max-w-3xl mb-10 relative z-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-violet-600 mb-3 mt-10 font-sans flex justify-center">
            {["G","E","T"].map((char, i) => (
              <motion.span
                key={`get-${i}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="mx-4"></span>
            {["A"].map((char, i) => (
              <motion.span
                key={`a-${i}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + i * 0.1 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="mx-4"></span>
            {["F","R","E","E"].map((char, i) => (
              <motion.span
                key={`free-${i}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 + i * 0.1 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="mx-4"></span>
            {["Q","U","O","T","E"].map((char, i) => (
              <motion.span
                key={`quote-${i}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 + i * 0.1 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-violet-300 font-sans mt-4">
            We offer personalized packages for you.
          </p>
        </div>

        {/* Steps Counter */}
        <div className="w-full max-w-3xl flex justify-between items-center mb-3 px-2 text-sm sm:text-base md:text-lg font-sans">
          <span className="text-gray-500 font-medium">Step {currentStep + 1} of {steps.length}</span>
          <span className="text-gray-500 font-medium">{Math.round(progress)}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-3xl h-2 rounded-full bg-gray-200 mb-8 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-2 rounded-full bg-gradient-to-r from-violet-300 via-pink-500 to-violet-700"
          />
        </div>

        {/* Quote Form */}
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          className="w-full max-w-3xl 
                     bg-gradient-to-br from-violet-50/70 via-white/60 to-violet-100/70 
                     backdrop-blur-xl 
                     border border-violet-200/50 
                     shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                     rounded-2xl p-8 sm:p-10 
                     flex flex-col gap-6 
                     transition-all duration-500"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: "easeInOut" }} // smoother & slower
              className="w-full flex flex-col gap-6"
            >
              {/* Step Question */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6 font-sans text-center">
                {steps[currentStep].question}
              </h2>

              {/* Text input */}
              {steps[currentStep].type === "text" && (
                <input
                  type="text"
                  value={formData[currentStep] || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-4 text-black text-base sm:text-lg bg-white"
                  placeholder="Type here..."
                />
              )}

              {/* Textarea */}
              {steps[currentStep].type === "textarea" && (
                <textarea
                  value={formData[currentStep] || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-4 text-black text-base sm:text-lg bg-white"
                  rows={4}
                  placeholder="Type here..."
                />
              )}

              {/* Options */}
              {steps[currentStep].type === "options" && (
                <div className="flex flex-wrap justify-center gap-7 mt-5">
                  {steps[currentStep].options.map((option, idx) => {
                    const isSelected = formData[currentStep] === option
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleOptionSelect(option)}
                        className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-base sm:text-lg border transition-all duration-300 ease-out transform
                          ${isSelected
                            ? 'bg-gradient-to-r from-violet-600 to-violet-800 text-white border-violet-700 scale-105'
                            : 'bg-gradient-to-r from-white to-gray-50 text-gray-800 border-gray-300 hover:from-violet-100 hover:to-violet-200 hover:text-violet-900 hover:border-violet-300 hover:scale-105 active:scale-95'
                          }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 gap-4">
                {currentStep > 0 && (
                  <motion.button
                    type="button"
                    onClick={handlePrev}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-base sm:text-lg border transition-all duration-300
                                bg-gradient-to-r from-white to-gray-50 text-gray-800 border-gray-300
                                hover:from-violet-100 hover:to-violet-200 hover:text-violet-900 hover:border-violet-300 hover:scale-105`}
                  >
                    Previous
                  </motion.button>
                )}

                {currentStep < steps.length - 1 ? (
                  <motion.button
                    type="button"
                    onClick={handleNext}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`ml-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-base sm:text-lg border transition-all duration-300
                                bg-gradient-to-r from-violet-600 to-violet-800 text-white border-violet-700
                                hover:from-violet-700 hover:to-violet-900 hover:scale-105`}
                  >
                    Next
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`ml-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-base sm:text-lg border transition-all duration-300
                                bg-gradient-to-r from-green-500 to-green-700 text-white border-green-700
                                hover:from-green-600 hover:to-green-800 hover:scale-105`}
                  >
                    Submit
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </form>
      </section>
    </div>
  )
}
