import { useState } from "react";
import Hamburger from "../assets/logos/hamburger-icon.svg";
import Cross from "../assets/logos/cross-icon.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="w-full flex justify-between items-center lg:text-2xl text-xl lg:px-5 px-2 lg:py-2 py-1 fixed inset-x-0 bg-white z-100 isolate">
            <a href="#">Derick A Lievian</a>

            {/* desktop */}
            <div className="hidden md:flex justify-items-center items-center lg:gap-5">
                <a href="#skills">Skills</a>
                <a href="#projects">Project</a>
                <a href="#experience">Experience</a>
                <a href="#contacts">Contacts</a>
                <a
                    href="/files/Resume-Derick.pdf"
                    target="_blank"
                    className="bg-green-400 lg:px-3 lg:py-1.5 rounded-xl hover:bg-green-300"
                >
                    Resume
                </a>
            </div>

            {/* mobile */}
            <div className="block md:hidden">
                <button onClick={() => setIsOpen(true)}>
                    <img
                        src={Hamburger}
                        alt="hamburger icon"
                        className="h-8 w-8"
                    />
                </button>

                <div
                    className={`
                    fixed inset-0 bg-white
                    transition-all duration-500 ease-in-out
                    ${isOpen ? "translate-y-0" : "-translate-y-full"}
                `}
                >
                    <div className="flex flex-col justify-center items-center gap-6 min-h-dvh">
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            Home
                        </a>
                        <a
                            href="#skills"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            Project
                        </a>
                        <a
                            href="#experience"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            Experience
                        </a>
                        <a
                            href="#contacts"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            Contacts
                        </a>
                        <a
                            href="/files/Resume-Derick.pdf"
                            target="_blank"
                            className="bg-green-400 px-6 py-2 rounded-xl hover:bg-green-300 text-xl transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </a>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 hover:opacity-70 transition-opacity"
                        >
                            <img src={Cross} alt="close" className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
