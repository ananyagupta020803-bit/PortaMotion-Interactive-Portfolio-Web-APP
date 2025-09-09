'use client'

import { motion } from 'framer-motion'
import PageTransitionWrapper from "../../components/layout/PageTransitionWrapper"

export default function AboutPage() {
  const coreValues = [
    { title: "Innovation", desc: "We leverage cutting-edge technology to deliver creative solutions that make your brand stand out." },
    { title: "AI Integration", desc: "Smart AI solutions to simplify your workflow and enhance engagement across platforms." },
    { title: "User-Centric", desc: "Every project focuses on creating seamless, intuitive experiences for real users." },
  ]

  const team = [
    { name: "Yuvraj", role: "Founder & CEO", img: "/team/jane.webp" },
    { name: "Shubham", role: "Lead Designer", img: "/team/john.webp" },
    { name: "Sachin", role: "AI Specialist", img: "/team/emily.webp" },
  ]

  return (
    <PageTransitionWrapper>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-900 to-black text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-sans mb-5 mt-20"
        >
          About Evolkun
        </motion.h1>

        {/* Enhanced Content Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-2 max-w-3xl"
        >
          <p className="text-gray-300 text-lg md:text-xl">
            EVOLKUN | The Digital Studio
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            Web Dev | Social Media | Branding | Growth | Content Strategy
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            Making businesses visible, valuable, & viral
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-4xl mt-6 text-gray-400 text-lg md:text-xl"
        >
          Evolkun crafts premium digital experiences that help brands grow, integrate AI, and create captivating content across platforms. We combine innovation, strategy, and design to deliver solutions that truly shine.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-sans mb-6 text-violet-600"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl"
        >
          To empower brands with intelligent digital solutions that scale their presence, enhance engagement, and create meaningful connections with their audience.
        </motion.p>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-sans mb-12 text-violet-600"
        >
          Core Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <h3 className="text-xl md:text-2xl font-sans-bold mb-3 text-violet-500">{val.title}</h3>
              <p className="text-gray-300">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-sans mb-12 text-violet-600"
        >
          Meet the Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <img 
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-violet-500">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-sans mb-6 text-violet-600"
        >
          Let's Build Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl mb-6"
        >
          Partner with Evolkun to create cutting-edge, AI-integrated solutions that elevate your brand and captivate your audience.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block px-6 py-3 bg-violet-600 text-white font-semibold rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Contact US
        </motion.a>
      </section>
    </PageTransitionWrapper>
  )
}
