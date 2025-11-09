import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 'rubrica-api',
    title: 'Rubrica API',
    description: 'API para gestionar usuarios y productos, con autenticación y autorización para usuarios.',
    tech: ['PHP','Laravel','MySQL'],
    code: 'https://github.com/petevela/rubrica-api'   
  },
  {
    id: 'single-page',
    title: 'Single Page',
    description: 'Aplicación simple para consumir API de Spotify con Next.js y TypeScript.',
    tech: ['Next','TailwindCSS','TypeScript'],
    code: 'https://github.com/petevela/single-page'
  },
  {
    id: 'proyecto-bibliotech',
    title: 'Proyecto Bibliotech',
    description: 'Aplicación para gestionar libros y usuarios usando modelo MVC.',
    tech: ['HTML','PHP','MySQL','JavaScript'],
    code: 'https://github.com/petevela/proyecto-bibliotech'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-sky-600 mb-8">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  )
}
