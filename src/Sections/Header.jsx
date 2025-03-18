import MoonSun from "../components/Moon-Sun";
function Header() {
    return (
        <header className="sticky top-0 flex justify-center text-lg py-3 bg-[#F9FAFF] items-center dark:bg-[#1A202C] dark:transition-[background-color] duration-300 z-1" >
            <nav className="flex gap-[30vw]">
                <div className="text-2xl font-bold npm">Samuel Saquiray</div>

                <ul className="flex gap-16 ">
                    <li><a href="#Inicio" className=" text-base no-underline hover:underline ">Inicio</a></li>
                    <li><a href="#Proyectos" className=" text-base no-underline hover:underline">Proyectos</a></li>
                    <li><a href="#Sobre-mi" className=" text-base no-underline hover:underline">Sobre mí</a></li>
                    <li><a href="#Skills" className=" text-base no-underline hover:underline">Skills</a></li>
                </ul>
                
            </nav>
            <MoonSun/>
        </header>
    );
}

export default Header;
