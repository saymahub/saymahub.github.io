import {useState} from "react";
import {X} from "lucide-react";

export const MobilePopUp = () => {

    const [open, setOpen] = useState(true);

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(false);
    };

    if (!open) return null;

    return(
        <section className="fixed inset-0 z-50 flex items-center justify-center md:hidden ">
            <div className="relative bg-[color:var(--primarymobile)] text-[color:var(--background)] p-4 rounded-lg shadow-lg w-11/12 text-center">
                <p className="text-lg font-prata mb-2">
                📱 Heads up!
                <br />
                This site is best experienced on desktop.
                </p>
                <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-primary hover:text-hover transition-colors"
                >
                <X size={20} className="text-[color:var(--background)]"/>
                </button>
            </div>
        </section>
  );
};