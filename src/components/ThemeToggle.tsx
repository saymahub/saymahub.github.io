import {Sun,Moon} from "lucide-react";
import {useState} from "react";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("light");
            setIsDarkMode(true);
        }
    };

    return<button onClick={toggleTheme}>{isDarkMode ? (<Moon className="h-6 w-6 text-primary"/>) 
        : (<Sun className="h-6 w-6 text-primary"/>)}</button>;
}