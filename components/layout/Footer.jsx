"use client"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"

const socials = [
  { name: "Instagram", icon: Instagram, link: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
]

export default function Footer() {
  const router = useRouter()

  const handleNavigation = (path) => {
    // Smooth fade-out before navigation
    document.body.classList.add("transition-opacity", "duration-500", "opacity-0")
    setTimeout(() => {
      router.push(path)
      document.body.classList.remove("opacity-0")
    }, 400)
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white/30 backdrop-blur-md shadow-lg rounded-2xl 
                 text-center py-6 px-6 mx-4 max-w-[calc(100%-2rem)]" // reduced padding
    >
      {/* Violet Line */}
      <div className="h-[3px] w-full mb-5 rounded-full bg-gradient-to-r 
                      from-violet-400 via-violet-500 to-violet-600 
                      shadow-[0_0_10px_rgba(148,0,211,0.2)]" />

      {/* Social Icons */}
      <div className="flex justify-center space-x-10 mb-5">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center
                            bg-gradient-to-tr from-violet-300 via-violet-400 to-violet-500
                            shadow-[0_0_8px_rgba(148,0,211,0.2)]
                            transition-all duration-300 ease-in-out">
              <social.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-violet-400">
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-base md:text-lg text-white flex justify-center items-center gap-2"
      >
        Copyright © 2025; 
        <span>Designed by</span>
        <motion.button
          onClick={() => handleNavigation("/")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-violet-600 font-bold text-lg bg-white rounded-full px-3 py-1 cursor-pointer"
        >
          EVOLKUN
        </motion.button>
      </motion.p>
    </motion.footer>
  )
}
