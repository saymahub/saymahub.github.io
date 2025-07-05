import galaxy from '../assets/galaxy.gif'
import {Linkedin, Mail} from "lucide-react";
import { useState } from "react";

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('saymadevelops@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // hide after 2 seconds
    };

    return (
        <section id="contact" className="md:snap-start md:h-screen relative min-h-screen flex items-center justify-center bottom-45 z-10 pt-50 md:pt-110 translate-y-[20px]">
            <div className="relative container max-w-4xl mx-auto text-center z-10 ">
                <h2 className="text-3xl md:text-6xl text-glow mb-12">
                    <span className="text-[30px]">✩° </span> Let's Get In Touch! <span className="text-[30px]"> °✩</span>
                </h2>
                <p className="font-prata text-[12px] md:text-[18px] pb-7 md:px-30">
                    Thanks for checking out my portfolio! <br></br> If you have any questions, or if you want to collaborate on a project, feel free to send me a message! 
                </p>
                <p className="font-prata text-[12px] md:text-[18px] pb-10" >
                    Click to copy email: 
                    <br></br>
                    <button 
                        onClick={handleCopy} 
                        className="cursor-pointer hover:text-[color:var(--hovertext)] duration-100 hover:scale-110">
                            saymadevelops@gmail.com
                    </button>
                    {copied && (
                        <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-[20px] md:translate-y-[30px] mt-1 text-[14px]] text-primary bg-[color:var(--primary)]/10 px-2 py-1 rounded">
                            Copied!
                        </span>
                    )}
                    <br></br><br></br>
                    <br></br>
                    <div className="flex justify-center items-center space-x-5">
                        <a href="mailto:saymadevelops@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--hovertext)] duration-100 hover:scale-110">
                            <Mail size={40}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/saymahaque/"} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--hovertext)] duration-100 hover:scale-110">
                            <Linkedin size={40}/>
                        </a>
                    </div>
                </p>
                <div className="z-50 hidden md:flex justify-center animate-float">
                    <img src={galaxy} alt="galaxy gif" className="md:-translate-y-[190px] rotate-30 pointer-events-none md:w-150 md:h-150"></img>
                </div>
                <div className="z-50 md:hidden flex justify-center animate-float">
                    <img src={galaxy} alt="galaxy gif" className="-translate-y-[100px] rotate-30 pointer-events-none w-90 h-90"></img>
                </div>
            </div>
        </section>
    );
};