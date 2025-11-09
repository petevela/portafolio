export default function ProjectCard({ title, description, tech, code, demo }: any) {
  return (
    <article className="bg-white rounded-2xl shadow p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-sky-600">{title}</h3>
      <p className="text-gray-700 mt-2 flex-grow">{description}</p>
      <p className="text-sm text-gray-500 mt-3">{tech.join(' • ')}</p>
      <div className="mt-4 flex gap-3">
        <a href={code} target="_blank" rel="noopener noreferrer" className="text-sky-600 font-medium hover:underline">Código</a>       
      </div>
    </article>
  )
}
