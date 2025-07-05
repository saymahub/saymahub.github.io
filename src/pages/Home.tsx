import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Extra } from "../components/Extra";
import { MobilePopUp } from "../components/MobilePopUp";
import { Contact } from "../components/Contact";
import { Credits } from "../components/Credits";

export const Home  = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className = " min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* NavBar */}
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            {/* Main Site Content */}
            <main className = "md:snap-y md:snap-mandatory md:overflow-y-scroll scroll-smooth md:h-screen">
                <MobilePopUp />
                <HeroSection />
                <AboutMe />
                <Education />
                <Experience />
                <Projects />
                <Extra />
                <Contact />
                <Credits />
            </main>

            {/* Footer */}
            {/* <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> */}
        </div>
    );
};