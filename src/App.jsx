import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const content = {
  es: {
    aboutTitle: "Sobre mí",
    aboutText: "¡Hola! Soy Rodrigo, un desarrollador frontend apasionado y autodidacta. Me especializo en crear experiencias web limpias, rápidas y responsivas. Estoy comprometido con el aprendizaje constante y la construcción de soluciones digitales atractivas.",
    skillsTitle: "Habilidades",
    skillsList: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git", "UX/UI", "Responsive Design"],
    servicesTitle: "Servicios",
    servicesList: [
      "Landing pages modernas y optimizadas",
      "Sitios personales y portfolios para marca personal",
      "Corrección y mejoras en HTML/CSS/JS",
      "Implementación de sitios con React y Tailwind"
    ],
    projectsTitle: "Proyectos destacados",
    projectsText: "Aquí algunos proyectos donde apliqué buenas prácticas, diseño responsivo y tecnologías modernas:",
    projectsList: [
      { name: "Landing Page para Startup", link: "https://github.com/chuycode/project1" },
      { name: "Portfolio interactivo con React", link: "https://github.com/chuycode/project2" },
      { name: "App de tareas con almacenamiento local", link: "https://github.com/chuycode/project3" }
    ],
    contactTitle: "Contacto",
    email: "brriannr@gmail.com",
    linkedin: "https://www.linkedin.com/in/rodrigo-brian-615304260/",
    fiverr: "https://www.fiverr.com/chuycode",
    downloadCV: "Descargar CV"
  },
  en: {
    aboutTitle: "About Me",
    aboutText: "Hi! I'm Rodrigo, a passionate and self-taught frontend developer. I specialize in building fast, clean, and responsive web experiences. I'm committed to constant learning and crafting beautiful digital solutions.",
    skillsTitle: "Skills",
    skillsList: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git", "UX/UI", "Responsive Design"],
    servicesTitle: "Services",
    servicesList: [
      "Modern and optimized landing pages",
      "Personal sites and portfolios for branding",
      "HTML/CSS/JS improvements and fixes",
      "Web apps built with React and Tailwind"
    ],
    projectsTitle: "Highlighted Projects",
    projectsText: "Some featured projects applying best practices, responsive design, and modern tech:",
    projectsList: [
      { name: "Landing Page for Startup", link: "https://github.com/chuycode/project1" },
      { name: "Interactive React Portfolio", link: "https://github.com/chuycode/project2" },
      { name: "ToDo App with local storage", link: "https://github.com/chuycode/project3" }
    ],
    contactTitle: "Contact",
    email: "brriannr@gmail.com",
    linkedin: "https://www.linkedin.com/in/rodrigo-brian-615304260/",
    fiverr: "https://www.fiverr.com/chuycode",
    downloadCV: "Download CV"
  }
};

function App() {
  const [lang, setLang] = useState('es');
  const c = content[lang];

  return (
    <div className="min-h-screen bg-orange-50 text-zinc-800 font-sans">
      <header className="sticky top-0 bg-orange-600 text-white shadow-md z-50 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Rodrigo Nuñez</h1>
        <nav>
          <button onClick={() => setLang('es')} className={`px-3 py-1 border rounded mx-1 ${lang === 'es' ? 'bg-white text-orange-600' : 'border-white'}`}>ES</button>
          <button onClick={() => setLang('en')} className={`px-3 py-1 border rounded mx-1 ${lang === 'en' ? 'bg-white text-orange-600' : 'border-white'}`}>EN</button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <AnimatePresence mode="wait">
          <motion.section
            key={lang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">{c.aboutTitle}</h2>
              <p className="text-lg leading-relaxed">{c.aboutText}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">{c.skillsTitle}</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {c.skillsList.map((item, i) => (
                  <li key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm text-center shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">{c.servicesTitle}</h2>
              <ul className="list-disc pl-6 space-y-1">
                {c.servicesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">{c.projectsTitle}</h2>
              <p className="mb-3">{c.projectsText}</p>
              <ul className="space-y-2">
                {c.projectsList.map((project, i) => (
                  <li key={i}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">{c.contactTitle}</h2>
              <p>Email: <a href={`mailto:${c.email}`} className="text-orange-700 underline">{c.email}</a></p>
              <p>LinkedIn: <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange-700 underline">{c.linkedin}</a></p>
              <p>Fiverr: <a href={c.fiverr} target="_blank" rel="noopener noreferrer" className="text-orange-700 underline">{c.fiverr}</a></p>
              <p><a href="/cv.pdf" download className="inline-block mt-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">{c.downloadCV}</a></p>
            </div>
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className="text-center text-sm text-orange-800 bg-orange-100 py-4 mt-10 shadow-inner">
        &copy; 2025 Rodrigo Nuñez. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
