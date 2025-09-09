"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Hero() {
  const words = ["Grow Your Brand", "Boost Your Sales", "Shine Online"]
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const router = useRouter()

  // Typing effect
  useEffect(() => {
    if (index === words.length) return
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
      if (!reverse && subIndex === words[index].length) {
        setReverse(true)
      } else if (reverse && subIndex === 0) {
        setReverse(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }, reverse ? 75 : 150)
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  // Handle button click
  const handleClick = (e) => {
    e.preventDefault()
    setTransitioning(true) // start bubble animation immediately

    // Navigate after animation
    setTimeout(() => {
      router.push("/quote")
    },700)
  }

  return (
    <section className="min-h-[60vh] pt-32 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Typing text */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-4"
      >
        This Energy Is For YOU If You want to...
      </motion.h2>

      {/* Typing animation */}
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 h-20"
      >
        {`${words[index].substring(0, subIndex)}|`}
      </motion.h1>

      {/* Gradient line */}
      <div className="w-full max-w-xl h-1 my-2 rounded-full"
           style={{ background: 'linear-gradient(to right, transparent, #8b5cf6, black)' }}
      ></div>

      {/* Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6"
      >
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="flex items-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-full shadow-lg hover:bg-violet-700 cursor-pointer relative overflow-hidden"
        >
          Get Free Quotes Instantly
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="ml-3 w-7 h-7 bg-black rounded-full flex items-center justify-center"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7-7 7M21 12H3"
              ></path>
            </svg>
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Bubbly Page Transition */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-violet-500 to-black opacity-70"
                style={{
                  width: 20 + i * 30,
                  height: 20 + i * 30,
                  left: "50%",
                  top: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 8 + i, opacity: 0 }}
                transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
