// app/work/[slug]/page.jsx
import { projects } from "@/lib/projects"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return <div className="p-10">Project not found</div>
  }

  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="inline-block px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition text-white font-semibold"
      >
        Visit Project
      </a>
    </section>
  )
}
