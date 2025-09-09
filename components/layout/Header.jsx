"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [blurAmount, setBlurAmount] = useState(4) 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50) 
      setBlurAmount(Math.min(12, 4 + scrollY / 20)) 
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className={`fixed top-6 inset-x-0 mx-auto z-50 
    w-[100%] max-w-7xl bg-white/30 shadow-lg 
    rounded-2xl transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}

      style={{ backdropFilter: `blur(${blurAmount}px)` }}
    >
      <div className="flex items-center justify-between px-6">        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <Link href="/" prefetch={false}>
            <img 
              src="/logo.png.webp" 
              alt="Evolkun logo" 
              className="w-48 h-auto cursor-pointer" 
            />
          </Link>
        </motion.div>

        {/* Nav Links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex space-x-10 text-gray-200 font-semibold text-xl"
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Quote", path: "/quote" },
            { name: "Contact", path: "/contact" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative cursor-pointer flex flex-col items-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <Link
                href={item.path}
                className="transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </Link>

              {/* Underline animation with violet gradient */}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 via-purple-600 to-violet-700 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right Side sig-in and sign-up Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-4"
        >
          {/* Sign in button */}
          <Link
            href="/signin"
            className="px-5 py-2 rounded-lg border-2 border-violet-600 bg-violet-600 text-white font-medium shadow hover:bg-violet-700 transition"
          >
            Sign in
          </Link>

          {/* Sign up button */}
          <Link
            href="/signup"
            className="px-5 py-2 rounded-lg border-2 border-black text-black font-medium bg-white hover:bg-gray-300 transition"
          >
            Sign up
          </Link>
        </motion.div>
      </div>
    </motion.header>
  )
}
