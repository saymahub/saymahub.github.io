import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";


export const Home  = () => {

    return (
        <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* NavBar */}
            <NavBar />
            {/* Main Site Content */}

            {/* Footer */}
            <Footer />
        </div>
    );
};