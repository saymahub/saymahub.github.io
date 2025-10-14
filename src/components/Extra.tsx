import earth from '../assets/earth.gif';

export const Extra = () => {
    return(
        <section id="extra" className="md:snap-start md:h-screen sm:py-10 md:py-40 px-4 relative container mx-auto max-w-9xl space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">

                <div className="container hidden md:flex">
                    <img src={earth} alt="star gif" className="h-7/12 w-7/12 animate-float pointer-events-none translate-x-[150px] translate-y-[40px]"></img>
                </div>

                <div className="container mx-auto max-w-5xl space-y-6 text-center md:text-left">
                    <h2 className="text-3xl text-glow md:text-6xl mb-12">
                        Extracurriculars <span className="text-[30px]">⋆｡°✩ </span>
                    </h2>
                    <p className="font-prata text-[12px] md:text-[18px] ">
                        <span className="font-bold">Light Up the World | UCalgary </span>
                        <br></br>
                        Former Co-President + Former VP Finance
                        <br></br><br></br>
                        Traveled to rural Peru for two weeks to help install solar panels and 
                        wire an electrical grid for an elementary school in a remote mountain community, 
                        bringing sustainable energy access to the region.
                    </p>
                </div>
                <div className="container md:hidden flex -translate-y-[20px] items-center justify-center">
                    <img src={earth} alt="star gif" className="h-7/12 w-7/12 py-20 animate-float pointer-events-none"></img>
                </div>
            </div>
        </section>
    );
};