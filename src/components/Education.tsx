import blackhole from '../assets/blackhole.gif';

export const Education = () => {
    return (
        <section id="education" className="md:snap-start md:h-screen py-24 px-4 relative container mx-auto max-w-9xl space-y-6 text-left -translate-y-[100px] md:-translate-y-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gpa-12 items-center">
                <div className="container mx-auto max-w-5xl space-y-6 text-left md:translate-x-[120px]">
                    <h2 className="text-3xl text-glow md:text-6xl mb-12 text-left">
                        Education <span className="text-[30px]">⋆｡°✩ </span>
                    </h2>
                    <p className="font-prata text-[12px] md:text-[18px]">
                        Bachelor of Science in Software Engineering 
                        <br></br>
                        Minor in Biomedical Engineering
                        <br></br>
                        2020-2025 
                        <br></br>
                        &emsp; ⋆ &ensp; University of Calgary - Schulich School of Engineering
                        <br></br>
                        &emsp; ⋆ &ensp; GPA: 3.6
                    </p>
                </div>
                <div className="container hidden md:flex animate-float -translate-x-[20px]">
                    <img src={blackhole} alt="blackhole gif" className="rotate-30 pointer-events-none"></img>
                </div>
                <div className="container md:hidden flex -translate-y-[20px] animate-float">
                    <img src={blackhole} alt="blackhole gif" className="rotate-30 pointer-events-none"></img>
                </div>
            </div>
        </section>
    );
};