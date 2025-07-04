import star from '../assets/neutron.gif';

export const AboutMe = () => {
    return (
        <section id="aboutme" className="md:snap-start md:h-screen py-24 px-4 relative container mx-auto max-w-9xl space-y-6 text-left -translate-y-[100px] md:translate-y-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gpa-12 items-center">

                <div className="container hidden md:flex">
                    <img src={star} alt="star gif" className="animate-float pointer-events-none"></img>
                </div>

                <div className="container mx-auto max-w-5xl space-y-6 text-left">
                    <h2 className="text-3xl text-glow md:text-6xl mb-12 text-left">
                        About Me <span className="text-[30px]">⋆｡°✩ </span>
                    </h2>
                    <p className="font-prata text-[12px] md:text-[18px]">
                        Hey there! I'm Sayma, a software engineer who's finding their place in the industry. 
                        My work days consist of building websites, debugging someone else's chaos, or giving side projects a 
                        little too much attention. I'm happiest when I'm creating something useful (or at least cool).
                    </p>
                    <p className="font-prata text-[12px] md:text-[18px]">
                        Right now I'm focused on full-stack development, but I'm super 
                        interested in exploring data engineering and network security, and I've dabbled in everything in between.
                    </p>
                    <p className="font-prata text-[12px] md:text-[18px]">
                        When I'm not coding, you'll probably find me playing video games, working on a new painting/art piece, 
                        cooking up a new recipe, or trying to fix one last bug before bed
                        <span className="text-[8px] md:text-[10px]"> (send help)</span><span>.</span>
                    </p>
                </div>

                <div className="container md:hidden flex -translate-y-[20px]">
                    <img src={star} alt="star gif" className="animate-float pointer-events-none"></img>
                </div>
            </div>
        </section>
    );
};