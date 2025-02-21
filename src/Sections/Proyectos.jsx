const Project = [
{
  title: "Sistema de Búsqueda de Películas (C++)",
  description: "Desarrollé un sistema de búsqueda eficiente para una plataforma de streaming utilizando un Trie invertido.Implementé una función de búsqueda por subcadena con límites en la cantidad de resultados.Optimización del algoritmo para mejorar la velocidad de recuperación de datos.",
  image: "/MovieSearch.png",
  link: "https://github.com/KarTaGo124/Programming-III-Project",
  tags: ["C++", "HTML", "JS"],
},
{
title: "Plataforma de Prediagnóstico de Arritmias Cardíacas (En Desarrollo)",
  description: "Creación de una aplicación web para el monitoreo de señales PPG en tiempo real.Integración con D3.js para la visualización de datos y análisis de patrones.Diseño de API para la recepción y procesamiento de datos biomédicos.",
  image: "/Ppg.png",
  link: "https://github.com/saquiray",
  tags: ["REACT", "JS"],
}

]

function Proyectos() {
    return(
    <>
  <section id="proyectos" data-section="proyectos" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl pb-30">  <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white undefined">  <svg className="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
Proyectos
 </h2> <div className="flex flex-col gap-y-16"> 
  
  {Project.map((project, index) => (
    <article key={index} className="flex flex-row gap-x-6">
      <img src={project.image} alt={project.title} className="w-140 h-60" />
      <div className="flex flex-col gap-y-2">
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="text-base text-white/70">{project.description}</p>
      <a href={project.link} className="text-blue-500 hover:underline">Ver más</a>
      <div className="flex gap-x-2">
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="px-2 py-1 bg-gray-200 rounded-full text-sm text-black">{tag}</span>
        ))}
      </div>
      </div>
    </article>
  ))}
  </div>  </section>
</>
  );
}
export default Proyectos;