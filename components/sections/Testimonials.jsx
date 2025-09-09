'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    { name: 'Alice', quote: 'Amazing work!' },
    { name: 'Bob', quote: 'Highly recommend Evolkun.' },
    { name: 'Charlie', quote: 'Professional and creative.' }
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">Testimonials</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="rounded-2xl overflow-hidden bg-white/[0.02] p-6 h-52 flex flex-col items-center justify-center text-center"
          >
            <p>"{t.quote}"</p>
            <span className="mt-2 font-semibold">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
