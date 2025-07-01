import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { AboutMe } from "../components/AboutMe";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Extra } from "../components/Extra";

export const Home  = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* NavBar */}
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            {/* Main Site Content */}
            <main>
                <HeroSection />
                <AboutMe />
                <Education />
                <Experience />
                <Projects />
                <Extra />
            </main>

            {/* Footer */}
            <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </div>
    );
};