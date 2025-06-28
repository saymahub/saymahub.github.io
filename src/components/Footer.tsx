import {useEffect, useState} from "react";
import { cn } from "../lib/utils";

const footItems = [
    {name: "Contact Me", href: "#contactme"},
    {name: "Credits", href: "#credits"},
]

export const Footer = () => {
    const[isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-mid shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <div className="hidden md:flex space-x-8">
                    {footItems.map((item, key) => (
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