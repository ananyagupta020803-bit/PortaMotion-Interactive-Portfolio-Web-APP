export default function BrandDocs() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">Docs & Brand Systems</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-white/[0.02] p-6 h-52 flex items-center justify-center"
          >
            Brand Doc {i}
          </div>
        ))}
      </div>
    </section>
  )
}
