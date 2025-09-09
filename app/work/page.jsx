'use client'

import { motion } from 'framer-motion'
import PageTransitionWrapper from "../../components/layout/PageTransitionWrapper"
import { useState, useEffect } from 'react'

export default function WorkPage() {
  const workItems = [
    { 
      title: 'Web Design', 
      img: '/images/web-design.jpg',
      label: 'We created responsive, visually stunning websites for global clients that drive engagement and conversions.'
    },
    { 
      title: 'AI Integration', 
      img: '/images/ai-integration.jpg',
      label: 'Integrated cutting-edge AI solutions into video platforms and apps for seamless user experiences.'
    },
    { 
      title: 'Brand Systems', 
      img: '/images/brand-systems.jpg',
      label: 'Developed complete brand systems, from visual identity to marketing assets, for consistent brand recognition.'
    },
  ]

  const [textIndex, setTextIndex] = useState(-1)
  const [typedText, setTypedText] = useState('')

  // Typewriter effect
  useEffect(() => {
    if (textIndex === -1) {
      setTypedText('')
      return
    }
    const currentLabel = workItems[textIndex].label
    let i = 0
    const interval = setInterval(() => {
      setTypedText((prev) => prev + currentLabel[i])
      i++
      if (i >= currentLabel.length) clearInterval(interval)
    }, 15)
    return () => clearInterval(interval)
  }, [textIndex])

  return (
    <PageTransitionWrapper>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 mt-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Proof? We Let Our Work Talk.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real projects. Real results. From startups to rebels who don’t settle.
        </motion.p>
      </section>

      {/* Work Images Grid */}
      <section className="mt-12 px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {workItems.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group"
            >
              <div className="h-64 bg-gradient-to-tr from-violet-500 via-pink-500 to-purple-600 rounded-2xl p-0.5">
                <motion.div
                  onHoverStart={() => setTextIndex(i)}
                  onHoverEnd={() => setTextIndex(-1)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-2xl overflow-hidden bg-black flex flex-col justify-end relative cursor-pointer"
                >
                  {/* Images */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  {/* Violet Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-violet-900 to-violet-800 opacity-0"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  />

                  {/* Bottom Text Label */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/60 backdrop-blur-sm px-4 py-1 rounded-md text-black text-sm font-medium max-w-[85%] text-center transition-all duration-500">
                    {textIndex === i ? typedText : item.title}
                  </div>

                  {/* View Case button */}
                  <motion.a
                    href="#"
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white px-4 py-1.5 rounded-md font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    View Case Study
                  </motion.a>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Detailed Projects */}
      <section className="mt-24 px-6 max-w-6xl mx-auto space-y-20">
        {workItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
            />
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-violet-600 mb-3">{item.title}</h3>
              <p className="text-gray-700 text-lg">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </PageTransitionWrapper>
  )
}
