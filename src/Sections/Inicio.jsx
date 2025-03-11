import GithubIcon from '../svg/github.jsx';
import Linkedin from '../svg/linkedin.jsx';
function Inicio() {
return (
    <section className="flex flex-row gap-[30px] justify-center items-center h-[600px] pb-[100px]">
    <div className="flex flex-col py-60 align-left w-[486px]">
    <div className="text-[#FDC435] font-bold">FULLSTACK DEVELOPER</div> 
    <div className="flex flex-col gap-[32px]">
        <h1 className="font-bold text-4xl text-balance">Hola,mi nombre es Samuel Saquiray</h1>
        <p className="text-xl text-balance">Estudiante de la carrera de Ciencias de la computación en la Universidad de Tecnologia e Ingenieria. Apacionado por el desarrollo Frontend y Backend.</p>
    </div>
    <div className='py-3 flex flex-row gap-3'>
    <a  href="https://github.com/saquiray">
    <GithubIcon />
    </a>
    <a href="https://www.linkedin.com/in/samuel-saquiray-delgado-a74b65220/">
    <Linkedin/>
    </a>
    
    </div>
    </div>
    
    <img src="face.jpg" className="rounded-[50%] w-[250px]"></img>
    </section>
);
}
export default Inicio;