import GithubIcon from '../svg/github.jsx';
import Linkedin from '../svg/linkedin.jsx';
function Inicio() {
return (
    <section id="Inicio" className="flex flex-row gap-[30px] justify-center items-center h-[700px] lg:max-w-4xl pb-[100px]">
    <div className="flex flex-col py-60 align-left w-[486px]">
    <div className="text-[#FDC435] font-bold">FULLSTACK DEVELOPER</div> 
    <div className="flex flex-col gap-[32px]">
        <h1 className="font-bold text-4xl text-balance">Hola,mi nombre es Samuel Saquiray</h1>
        <p className="text-xl text-balance">Estudiante de la carrera de Ciencias de la computación en la Universidad de Tecnologia e Ingenieria. Apasionado por el desarrollo Frontend y Backend.</p>
    </div>
    <div className='py-3 flex flex-row gap-3'>
    <a href="https://github.com/saquiray" 
    aria-label="Perfil de Github de Samuel Saquiray"
    target="_blank"
    alt="Perfil de Github de Samuel Saquiray">
    <GithubIcon className="fill-black dark:fill-white hover:scale-115 transition duration-300 ease-in-out hover:fill-[#FDC435]" alt="Perfil de Github de Samuel Saquiray"/>
    </a>
    <a 
    href="https://www.linkedin.com/in/samuel-saquiray-delgado-a74b65220/" 
    aria-label="Perfil de linkedin de Samuel Saquiray"
    target="_blank"
    alt="Perfil de Linkedin de Samuel Saquiray">
    <Linkedin className="fill-black dark:fill-white hover:scale-115 transition duration-300 ease-in-out hover:fill-[#FDC435]" alt="Perfil de Linkedin de Samuel Saquiray"/>
    </a>
    
    </div>
    </div>
    
    <img src="face.jpg" className="rounded-[50%] h-[250px] w-[250px]" alt="Samuel Saquiray"></img>
    </section>
);
}
export default Inicio;