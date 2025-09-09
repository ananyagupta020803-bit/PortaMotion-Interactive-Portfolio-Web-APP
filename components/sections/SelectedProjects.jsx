'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SelectedProjects() {
  const projects = [
    { 
      title: 'AI Avatars',
      img: '/services/project1.webp', 
      label: 'Create stunning videos at lightning speed using lifelike AI avatars that captivate your audience.' 
    },
    { 
      title: 'Voiceover Generator',
      img: '/services/pixel-perfect.webp',
      label: 'Instantly enrich your videos with ultra-realistic, natural-sounding voiceovers that engage and convert.' 
    },
    { 
      title: 'Smart Video Editing',
      img: '/services/project3.webp',
      label: 'Effortlessly edit, resize, and subtitle your content—professional-quality videos in a fraction of the time.' 
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (hoveredIndex === null) return

    const fullText = projects[hoveredIndex].label
    let currentIndex = 0
    setDisplayedText('')

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex])
      currentIndex++
      if (currentIndex === fullText.length) clearInterval(interval)
    }, 30)

    return () => clearInterval(interval)
  }, [hoveredIndex])

  const text = ["Proof?", "We", "Let", "Our", "Work", "Talk."]

  return (
    <section className="container mx-auto px-6 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-5xl md:text-6xl font-bold flex justify-center gap-3 font-sans"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {text.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className={word === "We" || word === "Let" || word === "Our" || word === "Work" || word === "Talk." 
                ? "text-violet-400"
                : "text-white"}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-400 mt-4 font-sans">
          Real projects. Real results. From startups to rebels who don’t settle.
        </p>
      </div>

      {/* Projects Cards */}
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 70, damping: 15 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group font-sans"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <div className="relative w-full h-60 border-2 border-violet-600 rounded-t-2xl overflow-hidden">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover rounded-t-2xl transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay while Hover */}
              <motion.div
                className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black via-violet-800 to-violet-900"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.7 }}
              />

              {/* Label Inside Image */}
              <div className="absolute bottom-3 left-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-md font-sans">
                {hoveredIndex === i ? (
                  <span className="text-black text-sm font-medium break-words font-sans">
                    {displayedText}
                  </span>
                ) : (
                  <span className="font-bold uppercase text-black text-sm font-sans">
                    {proj.title}
                  </span>
                )}
              </div>
            </div>

            {/* Text under the image with animated gradient background */}
            <div className="text-center text-white font-sans">
              <div
                className="w-full py-3 rounded-b-2xl 
                           bg-gradient-to-r from-violet-200 via-purple-300 to-violet-200 
                           animate-gradient-x shadow-md"
              >
                <h3 className="text-lg font-semibold tracking-wide drop-shadow-md text-black font-sans">
                  {proj.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
