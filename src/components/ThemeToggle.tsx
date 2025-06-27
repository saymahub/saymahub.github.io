import {Sun,Moon} from "lucide-react";
import {useEffect, useState} from "react";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(true);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.remove("light");
        }
        else {
            setIsDarkMode(false);
            document.documentElement.classList.add("light");
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.add("light");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    };

    return(
        <>
        <button onClick={toggleTheme}>{isDarkMode ? (<Sun className="h-6 w-6 text-primary"/>) 
        : (<Moon className="h-6 w-6 text-primary"/>)}</button>
        {/* <p className="text-sm mt-2 text-secondary">Dark mode is {isDarkMode ? "ON" : "OFF"}</p> */}
        </>
    );
}