'use client'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">pvelasco</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:underline">Sobre mí</a></li>
        <li><a href="#skills" className="hover:underline">Habilidades</a></li>
        <li><a href="#projects" className="hover:underline">Proyectos</a></li>
        <li><a href="#contact" className="hover:underline">Contacto</a></li>
      </ul>
    </nav>
  )
}
