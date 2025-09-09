"use client";
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508] text-white pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-violet-400">
          Sign Up
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-violet-500 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-violet-500 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-violet-500 outline-none"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors duration-300 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <a href="/signin" className="text-violet-400 hover:underline">
            Sign In
          </a>
        </p>
      </motion.div>
    </div>
  );
}
