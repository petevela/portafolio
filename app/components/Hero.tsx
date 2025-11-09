export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-100 to-white text-sky-900 py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Pedro Velasco</h1>
        <img className="w-24 h-24 rounded-full mx-auto" src="https://github.com/petevela.png" alt="pedro velasco" />
        <p className="mt-4 text-gray-600">pvelasco</p>
        <p className="mt-4 text-lg md:text-2xl text-gray-700">Desarrollador Full‑Stack — Next.js & TypeScript — Laravel & PHP</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="bg-sky-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg">Ver Proyectos</a>
          <a href="#contact" className="border border-sky-600 text-sky-600 px-6 py-3 rounded-full font-medium hover:bg-sky-50">Contactarme</a>
        </div>
      </div>
    </section>
  )
}
