'use client' 

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Services() {
  const services = [
    { 
      title: 'Blazing Fast Delivery', 
      img: '/services/study3.webp', 
      label: ' Get your projects live faster than ever with our optimized workflows.',
      logo: '/services/fast-forward.jpg'   
    },
    { 
      title: 'Pixel-Perfect Design', 
      img: '/services/study.webp',
      label: ' Every pixel counts. We craft beautiful, responsive layouts.',
      logo: '/services/pixel-retro.jpg'   
    },
    { 
      title: 'AI-Powered Strategy', 
      img: '/services/study1.webp',
      label: ' Leverage automation and intelligence to stay ahead of the curve.',
      logo: '/services/ai.jpg'   
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (hoveredIndex === null) return

    const fullText = services[hoveredIndex].label
    let currentIndex = 0
    setDisplayedText('')

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex])
      currentIndex++
      if (currentIndex === fullText.length) clearInterval(interval)
    }, 30) 

    return () => clearInterval(interval)
  }, [hoveredIndex])

  return (
    <section className="container mx-auto px-6 py-16 mb-32">
      {/* WHY EVOLKUN?? Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-6xl md:text-7xl font-bold mb-4 text-white font-sans">
          Why{' '}Choose
          <motion.a
            href="/"
            className="relative inline-block px-4 py-1 rounded-md cursor-pointer text-violet-600 font-extrabold font-sans"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12 }}
          >
            Evolkun?
            <motion.span
              className="absolute inset-0 rounded-md z-[-1] bg-violet-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </motion.a>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl font-sans mb-12">
          We craft premium digital experiences that scale businesses, integrate AI, and build brands that stand out.
        </p>
      </div>

      {/* Cards directly under Why Choose Evolkun? */}
      <div className="grid md:grid-cols-3 gap-8 -mt-4">
        {services.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 70, damping: 15 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <div className="relative w-full h-60 border-2 border-violet-600 rounded-t-2xl overflow-hidden">
              {/* Logo on top-left (circle) */}
              <div className="absolute top-3 left-3 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md flex items-center justify-center w-12 h-12">
                <Image 
                  src={proj.logo}
                  alt="Logo"
                  width={36}
                  height={36}
                  className="object-cover rounded-full"
                />
              </div>

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
              <div className="absolute bottom-3 left-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-md">
                {hoveredIndex === i ? (
                  <span className="text-black text-sm font-medium break-words">
                    {displayedText}
                  </span>
                ) : (
                  <span className="font-bold uppercase text-black text-sm">
                    {proj.title}
                  </span>
                )}
              </div>
            </div>

            {/* Text under the image with animated gradient background */}
            <div className="text-center text-white">
              <div
                className="w-full py-3 rounded-b-2xl 
                           bg-gradient-to-r from-violet-200 via-purple-300 to-violet-200 
                           animate-gradient-x shadow-md"
              >
                <h3 className="text-lg font-semibold tracking-wide drop-shadow-md text-black">
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
