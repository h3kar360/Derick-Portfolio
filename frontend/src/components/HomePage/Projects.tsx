import Github from "../../assets/logos/GitHub.svg";

interface Project {
    name: string;
    link: string;
    github: string;
    status: boolean;
    status_desc: string;
}

const Projects = () => {
    const projects: Project[] = [
        {
            name: "AI Learning Toolkit",
            link: "https://ai-learning-toolkit.vercel.app",
            github: "https://github.com/h3kar360/AI-Learning-ToolKit",
            status: true,
            status_desc: "online (live)",
        },
        {
            name: "AwanFiles",
            link: "",
            github: "https://github.com/IamMikee/AwanFiles",
            status: false,
            status_desc: "on production",
        },
        {
            name: "Java Chatroom",
            link: "",
            github: "https://github.com/h3kar360/Java-Chat-Room",
            status: true,
            status_desc: "online",
        },
        {
            name: "Fun Fact YouTube Shorts Generator",
            link: "",
            github: "https://github.com/h3kar360/Fun-Fact-Video-Youtube-Shorts-Generator",
            status: true,
            status_desc: "online",
        },
        {
            name: "Gomoku",
            link: "",
            github: "https://github.com/h3kar360/Gomoku",
            status: true,
            status_desc: "online",
        },
    ];

    const statusStyle = (status: boolean): string => {
        return status
            ? "bg-green-500 h-3 w-3 rounded-full flex-shrink-0 -z-10"
            : "bg-red-500 h-3 w-3 rounded-full flex-shrink-0 -z-10";
    };

    return (
        <section className="mt-30" id="main-body">
            <div id="projects" className="text-4xl mb-10">
                Projects
            </div>

            {/* desktop */}
            <section className="hidden md:block">
                {projects.map((project: Project) => (
                    <div className="border-t-2 lg:px-10 lg:py-8 flex items-center justify-between w-full">
                        <div className="flex justify-evenly items-center lg:gap-10">
                            <div className="relative group">
                                <div
                                    className={statusStyle(project.status)}
                                ></div>
                                <div
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-all duration-200 whitespace-nowrap
                                        backdrop-blur-sm"
                                >
                                    {project.status_desc}
                                </div>
                            </div>
                            <div className="lg:text-2xl">{project.name}</div>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            className="lg:text-xl"
                        >
                            {project.link}
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            className="shrink-0"
                        >
                            <img
                                src={Github}
                                alt="Github"
                                className="lg:w-8 lg:h-8"
                            />
                        </a>
                    </div>
                ))}
            </section>

            {/* mobile */}
            <section className="block md:hidden">
                {projects.map((project: Project) => (
                    <div className="border-t-2 px-5 py-2 flex items-center justify-between w-full">
                        <div className="flex justify-evenly items-center gap-10">
                            <div className={statusStyle(project.status)}>
                                <div
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 whitespace-nowrap
                                            backdrop-blur-sm"
                                >
                                    {project.status_desc}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-60">
                                <div className="text-xl">{project.name}</div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="lg:text-xl"
                                >
                                    {project.link}
                                </a>
                            </div>
                        </div>
                        <a
                            href={project.github}
                            target="_blank"
                            className="shrink-0"
                        >
                            <img
                                src={Github}
                                alt="Github"
                                className="w-5 h-5"
                            />
                        </a>
                    </div>
                ))}
            </section>

            <div className="border-t-2"></div>
        </section>
    );
};

export default Projects;
