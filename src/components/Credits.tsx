import { useState } from "react";

export const Credits = () => {
    const [revealed, setRevealed] = useState(false);

    const revealSecret = () => {
        setRevealed(true);
        setTimeout(() => setRevealed(false), 3000);
    };

    return (
        <section id="credits" className="md:snap-start md:h-screen relative min-h-screen flex items-center justify-center bottom-45 z-10 pt-0 md:pt-10 translate-y-[20px]">
            <div className="relative container max-w-4xl mx-auto text-center z-10 ">
                <h2 className="text-3xl md:text-5xl text-glow mb-12">
                    This Site Wouldn't Be Possible Without <span className="text-[30px]"> ⋆⋆⋆</span>
                </h2>
                <p className="font-prata text-[18px] md:text-[24px] pb-7 space-y-5 md:px-30">
                    <a href="https://deep-fold.itch.io/pixel-planet-generator" target="_blank" rel="noopener noreferrer" className="underline inline-block hover:text-[color:var(--hovertext)] duration-100 hover:scale-110">
                        Pixel Planet Generator
                    </a>
                    <br></br>
                    <a href="https://www.flaticon.com/free-icons/cute" target="_blank" rel="noopener noreferrer" className="underline inline-block hover:text-[color:var(--hovertext)] duration-100 hover:scale-110">
                        Manx Kitty Tab Icon
                    </a>
                    <br></br>
                    <a href="https://youtu.be/ifOJ0R5UQOc?si=y6IAwQuvJGdJq57M" target="_blank" rel="noopener noreferrer" className="underline inline-block hover:text-[color:var(--hovertext)] duration-100 hover:scale-110">
                        PedroTech
                    </a>
                    <br></br>
                        My Degree &thinsp;
                        <button onClick={revealSecret}> 
                            <span className="text-[10px] md:text-[16px]">(✿◡‿◡)</span>
                        </button>
                    {revealed && (
                        <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-[30px] md:translate-y-[50px] mt-1 text-[14px] text-primary bg-[color:var(--primary)]/10 px-2 py-1 rounded">
                            Special Thanks to Pumpkin For QA!
                        </span>
                    )}
                    <br></br>
                    
                </p>
                
            </div>
        </section>
    );
};