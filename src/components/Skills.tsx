import {useState} from "react";
import { cn } from "../lib/utils";

const skills = [
    {id: 1, title: "HTML/CSS", category: "Front End",},
    {id: 2, title: "React", category: "Front End",},
    {id: 3, title: "TypeScript", category: "Front End",},
    {id: 4, title: "JavaScript", category: "Front End",},
    {id: 5, title: "Tailwind CSS", category: "Front End",},
    {id: 6, title: "Node.js", category: "Back End",},
    {id: 7, title: "SQL/SQLite", category: "Back End",},
    {id: 8, title: "Python", category: "Programming",},
    {id: 9, title: "Django", category: "Back End",},
    {id: 10, title: "PHP", category: "Back End",},
    {id: 11, title: "REST API", category: "Back End",},
    {id: 12, title: "Spark", category: "Programming",},
    {id: 13, title: "Java", category: "Programming",},
    {id: 14, title: "C/C++", category: "Programming",},
    {id: 15, title: "Squish", category: "Tools",},
    {id: 16, title: "Jira", category: "Tools",},
    {id: 17, title: "Git", category: "Tools",},
    {id: 18, title: "Docker", category: "Tools",},
];

const categories = ["All", "Front End", "Back End", "Programming", "Tools"];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="md:snap-start md:h-screen relative min-h-screen flex flex-col items-center bottom-45 px-4 py-10 z-10 pt-35 md:pt-35">
            <div className="items-center">
                <div className="container mx-auto max-w-5xl space-y-6 text-center space-x-4">
                    <h2 className="text-3xl md:text-6xl mb-5 md:mb-12 text-center text-glow">
                        <span className="text-[30px]">✩°｡⋆ </span> Relevant Skills <span className="text-[30px]">⋆｡°✩ </span>
                    </h2>
                    <p className="font-prata text-[12px] md:text-[18px]">
                        Over the years, I've developed a strong foundation in a variety of programming languages, frameworks, and tools that have helped me build efficient and impactful software.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 mb-10">
                        {categories.map((category, key) => (
                            <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 font-prata capitalize border border-transparent",
                                activeCategory === category
                                ? "bg-[color:var(--primary)]/10"
                                : "hover:border-[color:var(--primary)]"
                            )}
                            >
                            {category}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-prata text-center">
                        {filteredSkills.map((skill, key) => (
                            <div
                            key={key}
                            className="bg-[color:var(--primary)]/20 p-3 rounded-lg shadow-xs card-hover"
                            >
                            <div className="text-center">
                                <h3 className="font-semibold text-lg"> {skill.title}</h3>
                            </div>
                            </div>
                        ))}
                        
                    </div>                    
                </div>                       
            </div>
        </section>
    );
};