'use client'

export default function CtaBand() {
  return (
    <section className="bg-white/[0.05] py-12 flex justify-center items-center">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Ready to start your project?</h3>
        <p className="mt-2 text-gray-400">Let's build something amazing together.</p>
        <button className="mt-4 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200">
          Get in Touch
        </button>
      </div>
    </section>
  )
}
