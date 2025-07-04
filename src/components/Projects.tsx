
import {ArrowRight} from "lucide-react";

export const Projects = () => {
    return (
        <section id="projects" className="md:snap-start md:h-screen relative min-h-screen flex flex-col items-center justify-center bottom-45 px-4 py-10 z-10 md:pt-20">
            <div className="items-center">

                <div className="container mx-auto max-w-5xl space-y-6 text-center space-x-4 items-center md:items-baseline">
                    <h2 className="text-3xl md:text-6xl mb-12 text-center text-glow">
                        <span className="text-[30px]">✩°｡⋆ </span> Notable Projects <span className="text-[30px]">⋆｡°✩ </span>
                    </h2>
                    <p className="font-prata text-[12px] md:text-[18px]">
                        Here are some of my most recent projects. 
                    </p>
                    <button className="project-button cursor-pointer text-[12px] md:text-[16px]">
                        Personal Portfolio
                    </button>
                    <button className="project-button cursor-pointer text-[12px] md:text-[16px]">
                        HeartLens 3.0
                    </button>
                    <button className="project-button cursor-pointer text-[12px] md:text-[16px]">
                        NYC Taxi Data
                    </button>
                    <br></br><br></br>
                    <div className="flex justify-center items-center ">
                        <a href="https://github.com/saymahub" target="_blank" rel="noopener noreferrer" className="port-button w-fit flex items-center mx-auto gap-2 cursor-pointer">
                            More on GitHub! <ArrowRight size={18}/>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};