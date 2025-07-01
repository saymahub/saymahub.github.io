import {useEffect, useState} from "react";
import {X,Menu} from "lucide-react";
import { cn } from "../lib/utils";

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About Me", href: "#aboutme"},
    {name: "Education", href: "#education"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Extra", href: "#extra"},
]

export const NavBar = ({ isMenuOpen, setIsMenuOpen }: NavBarProps) => {
    const[isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("fixed top-0 w-full z-40 transition-all duration-300 bg-[color:var(--background)]", 
            isScrolled ? "py-3 bg-[color:var(--background)] backdrop-blur-mid" : "py-5"
        )}>
            <div className="container relative flex items-center py-4 justify-center">
                <div className="text-4xl font-bold text-primary flex item-center left-0 pl-0 md:absolute">
                    <span className="relative z-10">
                        <span className="text-glow"> SH </span>
                    </span>
                </div>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="font-prata text-xl text-primary/80 hover:text-[color:var(--hovertext)] transition-colors duration-30"> 
                            {item.name} 
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-primary z-50 absolute right-8" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}> 
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-30 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                    <div className="flex flex-col space-y-8 -translate-y-10">
                        {navItems.map((item, key) => (
                            <a 
                            key={key} 
                            href={item.href} 
                            className="font-prata text-2xl text-primary/80 hover:text-[color:var(--hovertext)] transition-colors duration-30"
                            onClick={() => setIsMenuOpen(false)}
                            > 
                                {item.name} 
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};