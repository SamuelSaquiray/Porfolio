import Key from "../svg/keys.jsx";
import React_Icon from "../svg/React_Icon";
import HTML5 from "../svg/Html_Icon";
import CSS from "../svg/Css_Icon";
import TailwindCSS from "../svg/Tailwind_Icon";
import Cpp from "../svg/Cpp_Icon";
import Nodejs from "../svg/Node_Icon";
import JavaScript from "../svg/JavaScript";

const Project = [
{
  title: "Sistema de Búsqueda de Películas (C++)",
  description: "Desarrollé un sistema de búsqueda eficiente para una plataforma de streaming utilizando un Trie invertido.Implementé una función de búsqueda por subcadena con límites en la cantidad de resultados.Optimización del algoritmo para mejorar la velocidad de recuperación de datos.",
  image: "Ppg.png",
  link: "https://github.com/KarTaGo124/Programming-III-Project",
  tags: ["C++", "HTML", "JS"]
},
{
title: "Plataforma de Prediagnóstico de Arritmias Cardíacas (En Desarrollo)",
  description: "Creación de una aplicación web para el monitoreo de señales PPG en tiempo real.Integración con D3.js para la visualización de datos y análisis de patrones.Diseño de API para la recepción y procesamiento de datos biomédicos.",
  image: "MovieSearch.png",
  link: "https://github.com/saquiray",
  tags: ["REACT", "JS"]
}

]

function Proyectos() {
    return(
    <>
    <section id="Proyectos" data-section="proyectos" className="section undefined scroll-m-20 w-full mx-auto container md:max-w-2xl pb-30 lg:max-w-4xl">  
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 /80 dark: undefined underline decoration-[#FDC435] decoration-3 underline-offset-8">  
      <Key />
    Proyectos
     </h2> <div className="flex flex-col gap-y-16"> 
    
    {Project.map((project, index) => (
    <article key={index} className={`flex ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} space-x-0 space-y-8 group md:space-x-8 md:space-y-0 `}>
      <img src={project.image} alt={project.title} className="w-[511.875px] h-[235.5px] hover:scale-105 transition duration-300 rounded-[10px]"/>
      <div className="flex flex-col gap-y-2">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-400">{project.description}</p>
      <div className="flex gap-x-2">
      
      {project.tags.map((tag, tagIndex) => (
      <span key={tagIndex} className="flex items-center gap-x-1 px-2 py-1 bg-gray-200 rounded-full text-sm text-black">
      {tag === "C++" && <Cpp />}
      {tag === "HTML" && <HTML5 />}
      {tag === "CSS" && <CSS />}
      {tag === "TailwindCSS" && <TailwindCSS />}
      {tag === "Node.js" && <Nodejs />}
      {tag === "JS" && <JavaScript />}
      {tag === "REACT" && <React_Icon />}
        {tag}
      </span>
      
      ))}
      
      </div>
      <a href={project.link} className="text-blue-500 hover:underline">Ver más</a>
      </div>
    </article>
    ))}
    </div>  </section>
    </>
    );
}
export default Proyectos;
