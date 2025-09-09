"use client";
import { motion } from "framer-motion";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-violet-400">
          Sign In
        </h2>
        <form className="space-y-5">
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
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors duration-300 text-white font-semibold"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-5">
          Don’t have an account?{" "}
          <a href="/signup" className="text-violet-400 hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
