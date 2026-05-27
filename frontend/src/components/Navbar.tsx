import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center text-2xl px-5 py-2 fixed inset-x-0">
            <a href="#home">Derick A Lievian</a>
            <div className="flex justify-items-center items-center gap-5">
                <a href="#skills">Skills</a>
                <a href="#projects">Project</a>
                <a href="#experience">Experience</a>
                <button className="bg-green-400 px-3 py-1.5 rounded-xl hover:bg-green-300">
                    Resume
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
