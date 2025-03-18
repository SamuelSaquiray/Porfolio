function About() {
  return (
    <>
    <h2 id="Sobre-mi" className="text-3xl font-bold text-center mt-[100px] mb-10 underline decoration-[#FDC435] decoration-3 underline-offset-8">Sobre mí</h2>
    <article className="flex flex-row gap-[32px] justify-center items-center lg:max-w-4xl pb-[100px]">
        <div className="flex flex-col font-mono text-pretty order-2 gap-[20px]">
      <p className="col-start-1 col-end-2 row-start-1 row-end-2">Hola! Soy Samuel Saquiray, estudiante de Ingeniería en la Universidad UTEC de Lima, Perú y desarrollador web Full Stack. Me especializo en el desarrollo de aplicaciones web con Node.js, Firebase, React y Astro, creando soluciones escalables y optimizadas para el rendimiento.</p>

      <p className="col-start-1 col-end-2 row-start-2 row-end-3">Tengo experiencia en la construcción de APIs REST, integración de bases de datos en tiempo real y desarrollo de interfaces dinámicas con gráficos interactivos. Actualmente, estoy trabajando en una app web para el prediagnóstico de arritmias cardíacas, utilizando D3.js para visualizar datos en tiempo real.</p>

      <p className="col-start-1 col-end-2 row-start-3 row-end-4">Siempre busco mejorar mis habilidades y enfrentar nuevos desafíos en el mundo del desarrollo web.</p>
      </div>
        <img src="face.jpg" className="col-start-2 col-end-3 row-start-1 row-end-4 rounded-[50%] h-[250px] w-[250px]" alt="Samuel Saquiray"></img>
    </article>
    </>
  );
}
export default About;