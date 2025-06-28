import {useEffect, useState} from "react";
import { cn } from "../lib/utils";



const navItems = [
    {name: "Home", href: "#home"},
    {name: "About Me", href: "#aboutme"},
    {name: "Education", href: "#education"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Extra", href: "#extra"},
]

export const NavBar = () => {
    const[isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-mid shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <div className="text-4xl font-bold text-primary flex item-center">
                    <span className="relative z-10">
                        <span className="text-glow"> SH </span>
                    </span>
                </div>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="font-prata text-2xl text-primary/80 hover:text-[color:var(--hovertext)] transition-colors duration-30"> 
                            {item.name} 
                        </a>
                    ))}
                </div>
                {/* mobile nav */}
            </div>
        </nav>
    );
};