'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import PageTransitionWrapper from "../../components/layout/PageTransitionWrapper"

export default function ContactPage() {
  const [status, setStatus] = useState('') // '', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault()
    const isSuccess = Math.random() > 0.2 // 80% chance success

    if (isSuccess) {
      setStatus('success')
    } else {
      setStatus('error')
    }

    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <PageTransitionWrapper>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-900 to-black text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-sans mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl text-gray-300 text-lg md:text-xl"
        >
          Have questions, ideas, or want to start a project with Evolkun? Reach out to us and let's create something extraordinary together.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-violet-600 text-center">
            Get in Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {['Name', 'Email', 'Message'].map((field, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 * (idx + 1) }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <label className="block mb-2 font-medium">{field}</label>
                {field === 'Message' ? (
                  <textarea
                    placeholder={`Your ${field}...`}
                    rows={5}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-violet-600 transition"
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    placeholder={`Your ${field}`}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-violet-600 transition"
                    required
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="w-full bg-violet-600 text-white font-semibold py-3 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300"
            >
              Send Message
            </motion.button>

            {/* Success/Failure Animation */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-green-400 font-medium text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-red-400 font-medium text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </section>

      {/* Alternative Contact & Social Media Section */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold mb-6 text-violet-600"
        >
          Other Ways to Reach Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl mb-6"
        >
          You can also connect with us via social media or send a DM for a strategy chat.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { name: 'Instagram', href: 'https://instagram.com/evolkun' },
            { name: 'Email', href: 'mailto:contact@evolkun.com' },
            { name: 'LinkedIn', href: 'https://linkedin.com/company/evolkun' }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="px-5 py-2 rounded-lg border border-gray-600 text-gray-200 font-medium hover:bg-violet-600 hover:text-white transition-all duration-300"
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>
      </section>
    </PageTransitionWrapper>
  )
}
