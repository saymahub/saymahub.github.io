import saturngif from '../assets/ringed.gif';

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bottom-45 px-4">
            <div className="relative container max-w-4xl mx-auto text-center z-10 ">
                <h1 className="text-7xl -translate-y-[40px] md:text-9xl opacity-0 animate-fade-in relative z-10">
                    Sayma Haque
                </h1>
                <div className="animate-float">
                    <img src={saturngif} alt="saturn gif" className="opacity-0 animate-fade-in absolute left-1/2 -translate-y-[60px] md:top-0 md:-translate-y-[190px]
                     -translate-x-1/2 rotate-30 w-3xl h-3xl z-20 pointer-events-none"></img>
                </div>
            </div>
        </section>
    );
}