"use client"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter } from "lucide-react"

const socials = [
  { name: "Instagram", icon: Instagram, link: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
]

export default function Socials() {
  return (
    <section className="w-full flex justify-center py-12 bg-gray-50">
      <div className="flex space-x-8">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.2, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center space-y-2"
          >
            <social.icon className="w-8 h-8 text-violet-600" />
            <span className="text-sm font-medium text-gray-700">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
