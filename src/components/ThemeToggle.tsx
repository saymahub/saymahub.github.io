import {Sun,Moon} from "lucide-react";
import {useEffect, useState} from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(true);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "light"){
            setIsDarkMode(true);
            document.documentElement.classList.remove("dark");
        }
        else {
            setIsDarkMode(false);
            document.documentElement.classList.add("dark");
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(true);
        }
    };

    return(
        <>
        <button onClick={toggleTheme} className={cn("cursor-pointer fixed top-8 z-50 p-2 rounded-full transition-colours duration-300",
            "focus:outline-hidden right-15 max-sm:right-auto max-sm:left-5 max-sm:top-9"
        )}>
            {isDarkMode ? (<Moon className="h-10 w-10 text-primary"/>) 
            : (<Sun className="h-10 w-10 text-primary"/>)}
        </button>
        {/* <p className="text-sm mt-2 text-secondary">Dark mode is {isDarkMode ? "ON" : "OFF"}</p> */}
        </>
    );
};