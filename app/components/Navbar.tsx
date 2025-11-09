'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl text-sky-600">Pedro Velasco</Link>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#about" className="hover:text-sky-600">Sobre mí</a>
          <a href="#projects" className="hover:text-sky-600">Proyectos</a>
          <a href="#contact" className="hover:text-sky-600">Contacto</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FaTimes/> : <FaBars/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 space-y-3">
            <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
            <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </header>
  )
}
