import {useEffect, useState} from "react";
import { cn } from "../lib/utils";

interface FooterProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const footItems = [
    {name: "Contact", href: "#contact"},
    {name: "Credits", href: "#credits"},
]

export const Footer = ({ isMenuOpen, setIsMenuOpen }: FooterProps) => {
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

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {footItems.map((item, key) => (
                        <a key={key} href={item.href} className="font-prata text-xl text-primary/80 hover:text-[color:var(--hovertext)] transition-colors duration-30"> 
                            {item.name} 
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-30 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                    <div className="flex flex-col space-y-8 -translate-y-20">
                        {footItems.map((item, key) => (
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