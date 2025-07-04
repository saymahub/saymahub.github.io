import resume from '../assets/SaymaHaque_Resume.pdf';
import lava from '../assets/lava.gif'
import noatmos from '../assets/noatmos.gif'

export const Experience = () => {
    return (
        <section id="experience" className="md:snap-start md:h-screen relative min-h-screen flex flex-col items-center justify-center bottom-45 px-4 z-10 md:pt-20">
            <div className="relative container max-w-4xl mx-auto text-center z-10 ">
                <h2 className="text-3xl md:text-6xl text-glow mb-12">
                    <span className="text-[30px]">✩° </span> Professional Experience <span className="text-[30px]"> °✩</span>
                </h2>
                <p className="font-prata text-[12px] md:text-[18px]">
                    CIRCLE CARDIOVASCULAR IMAGING
                    <br></br>
                    Software QA Analyst Intern  
                    <br></br>
                    Calgary, AB 
                    <br></br>
                    May 2023 - August 2024 
                </p>
                <p className="font-prata text-[12px] md:text-[18px]">
                    <br></br>
                    IMPACT TOOLBOX
                    <br></br>
                    Student Intern
                    <br></br>
                    Remote
                    <br></br>
                    Sep 2022 - Nov 2022 & Jan 2023 - March 2023
                </p>
                <br></br><br></br>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="port-button cursor-pointer">
                    View Full Resume
                </a>
                <div className="z-50 hidden md:flex justify-center">
                    <img src={lava} alt="lava gif" className="animate-float pointer-events-none -translate-y-[350px] -translate-x-[500px] w-40 h-40"></img>
                    <img src={noatmos} alt="no atmosphere gif" className="animate-float-longer pointer-events-none -translate-y-[50px] translate-x-[500px] w-30 h-30"></img>
                </div>
            </div>
        </section>
    );
};