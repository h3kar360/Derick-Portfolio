import Java from "../../assets/logos/Java.svg";
import JavaScript from "../../assets/logos/JavaScript.svg";
import TypeScript from "../../assets/logos/TypeScript.svg";
import Python from "../../assets/logos/Python.svg";
import HTML5 from "../../assets/logos/HTML5.svg";
import CSS from "../../assets/logos/CSS3.svg";
import Node from "../../assets/logos/Node.js.svg";
import Express from "../../assets/logos/Express.svg";
import ReactJS from "../../assets/logos/React.svg";
import Next from "../../assets/logos/Next.js.svg";
import Tailwind from "../../assets/logos/Tailwind CSS.svg";
import Mongodb from "../../assets/logos/MongoDB.svg";
import Supabase from "../../assets/logos/supabase.svg";
import Git from "../../assets/logos/Git.svg";
import GitHub from "../../assets/logos/GitHub.svg";

interface Skill {
    name: string;
    icon: string;
}

const Skills = () => {
    const skills: Skill[] = [
        { name: "Java", icon: Java },
        { name: "JavaScript", icon: JavaScript },
        { name: "TypeScript", icon: TypeScript },
        { name: "Python", icon: Python },
        { name: "HTML", icon: HTML5 },
        { name: "CSS", icon: CSS },
        { name: "NodeJS", icon: Node },
        { name: "Express", icon: Express },
        { name: "React", icon: ReactJS },
        { name: "Next", icon: Next },
        { name: "Tailwind CSS", icon: Tailwind },
        { name: "MongoDB", icon: Mongodb },
        { name: "Supabase", icon: Supabase },
        { name: "Git", icon: Git },
        { name: "GitHub", icon: GitHub },
    ];

    return (
        <section className="mt-30" id="main-body">
            <div id="skills" className="text-4xl mb-10">
                Skills
            </div>
            <section className="grid lg:grid-cols-15 grid-cols-5 gap-5">
                {skills.map((skill: Skill, index: number) => (
                    <div className="relative group w-15 h-15">
                        <div className="w-full h-full">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div
                            className="absolute bottom--10 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-all duration-200 whitespace-nowrap
                                        backdrop-blur-sm"
                        >
                            {skill.name}
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Skills;
