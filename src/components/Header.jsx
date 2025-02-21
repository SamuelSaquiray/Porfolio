function Header() {
    return (
        <header className="flex justify-center text-white text-lg p-3">
            <nav>
                <ul className="flex gap-16">
                    <li><a href="/Inicio" className="text-white text-base no-underline hover:underline">Inicio</a></li>
                    <li><a href="/Proyectos" className="text-white text-base no-underline hover:underline">Proyectos</a></li>
                    <li><a href="/Sobre-mi" className="text-white text-base no-underline hover:underline">Sobre mí</a></li>
                    <li><a href="/Skills" className="text-white text-base no-underline hover:underline">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
