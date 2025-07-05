export const Credits = () => {
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
                    My Degree <span className=" text-[10px] md:text-[16px]">(✿◡‿◡)</span>
                </p>
                
            </div>
        </section>
    );
};