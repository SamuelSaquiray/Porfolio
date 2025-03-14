import moon from '/moon.svg';
import sun from '/Sun.svg';
import { useState } from 'react';

const toggleTheme = () => {
    document.body.classList.toggle('dark');
};

const MoonSun = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
        toggleTheme();
    };

    return (
        <button 
            onClick={handleClick} 
            className="flex flex-row ml-[40px] w-[40px] h-[40px] bg-[#FDC435] rounded-[50%] justify-center items-center cursor-pointer"
        >
            <img src={isDarkMode ? moon : sun} alt={isDarkMode ? "sun" : "moon"} className="w-[20px] h-[20px] z-1" />
        </button>
    );
};

export default MoonSun;