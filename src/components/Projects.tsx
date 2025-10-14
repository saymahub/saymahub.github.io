import {ArrowRight, ExternalLink, Github} from "lucide-react";
import personalportfolio from '../assets/projects/personalsite.png';
import heartlens from '../assets/projects/heartlens3.png';
import nyctaxidata from '../assets/projects/nyctaxidata.png';

const projects = [
    {
        id: 1,
        title: "Personal Portfolio",
        description: "A stellar ;) portfolio designed to showcase my technical skills, hands-on experience, and personal interests.",
        image:personalportfolio,
        tags: ["React", "Typescript", "TailwindCSS"],
        demoURL:"https://saymahub.github.io/",
        githubURL:"https://github.com/saymahub/saymahub.github.io",
    },
    {
        id: 2,
        title: "HeartLens 3.0",
        description: "My engineering capstone project focused around diagnosing cardiovascular diseases using machine learning.",
        image:heartlens,
        tags: ["Docker", "Python", "Django"],
        demoURL:"https://drive.google.com/file/d/1FH1FFtpveaqKdk5kXANqLLh02DdQWLwb/view",
        githubURL:"https://github.com/saymahub/",
    },
    {
        id: 3,
        title: "NYC Taxi Data Analysis",
        description: "A simple project utilising machine learning to analyse trip duration, traffic congestion, and hotspots for taxis in NYC.",
        image:nyctaxidata,
        tags: ["Python", "Pandas", "SKLearn"],
        demoURL:"https://github.com/saymahub/NYC-Taxi-Data-ML-Project",
        githubURL:"https://github.com/saymahub/NYC-Taxi-Data-ML-Project",
    },
]
export const Projects = () => {
    return (
        <section id="projects" className="2xl:scale-[0.90] md:snap-start md:h-screen relative min-h-screen flex flex-col items-center px-4 z-10 md:pt-30">
            <div className="items-center">
                <div className="container mx-auto max-w-5xl space-y-6 text-center space-x-4">
                    <h2 className="text-3xl md:text-6xl mb-5 md:mb-6 text-center text-glow">
                        <span className="text-[30px]">✩°｡⋆ </span> Notable Projects <span className="text-[30px]">⋆｡°✩ </span>
                    </h2>
                    <p className="font-prata text-[12px] md:text-[18px]">
                        Here are some of my most recent projects, highlighting the skills I've developed, the problems I've solved, and the creative approaches I've taken along the way.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-prata">
                        {projects.map((project,key) => (
                            <div key={key} className="group bg-[color:var(--card)] rounded-lg overflow-hidden card-hover">
                                <div className="h-40 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                                </div> 
                                <div className="p-5">
                                    <div className="flex flex-wrap gap-2 mb-2 "> 
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs rounded-full border-1 border-opacity-25"> {tag} </span>
                                        ))}
                                    </div>
                                
                                    <h3 className="text-xl mb-3 mt-3">{project.title}</h3>
                                    <p className="text-sm mb-4 px-3">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demoURL} target="_blank" className="hover:text-[color:var(--hovertext)] duration-300">
                                                <ExternalLink />
                                            </a>
                                            <a href={project.githubURL} target="_blank" className="hover:text-[color:var(--hovertext)] duration-300">
                                                <Github />
                                            </a>
                                        </div>    
                                    </div>
                                </div>    
                            </div>
                        ))}
                    </div>
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