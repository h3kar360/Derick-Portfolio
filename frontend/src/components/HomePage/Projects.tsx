import Github from "../../assets/logos/GitHub.svg";

const Projects = () => {
    return (
        <section className="mt-30" id="main-body">
            <div id="projects" className="text-4xl mb-10">
                Projects
            </div>
            <section>
                <div className="border-t-2 px-10 py-8 flex items-center justify-between w-full">
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="bg-green-500 h-3 w-3 rounded-full relative group">
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200 whitespace-nowrap
                                    backdrop-blur-sm"
                            >
                                online (deployed live)
                            </div>
                        </div>
                        <div className="text-2xl">AI Learning Toolkit</div>
                    </div>
                    <a
                        href="https://ai-learning-toolkit.vercel.app"
                        target="_blank"
                        className="text-xl"
                    >
                        https://ai-learning-toolkit.vercel.app
                    </a>
                    <a
                        href="https://github.com/h3kar360/AI-Learning-ToolKit"
                        target="_blank"
                    >
                        <img src={Github} alt="Github" className="w-8 h-8" />
                    </a>
                </div>
                <div className="border-t-2 px-10 py-8 flex items-center justify-between w-full">
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="bg-yellow-500 h-3 w-3 rounded-full relative group">
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200 whitespace-nowrap
                                    backdrop-blur-sm"
                            >
                                on production
                            </div>
                        </div>
                        <div className="text-2xl">AwanFiles</div>
                    </div>
                    <a
                        href="https://github.com/IamMikee/AwanFiles"
                        target="_blank"
                    >
                        <img src={Github} alt="Github" className="w-8 h-8" />
                    </a>
                </div>
                <div className="border-t-2 px-10 py-8 flex items-center justify-between w-full">
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="bg-green-500 h-3 w-3 rounded-full relative group">
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200 whitespace-nowrap
                                    backdrop-blur-sm"
                            >
                                online
                            </div>
                        </div>
                        <div className="text-2xl">AWSM ToDo.</div>
                    </div>
                    <a
                        href="https://github.com/h3kar360/AWSM-ToDo."
                        target="_blank"
                    >
                        <img src={Github} alt="Github" className="w-8 h-8" />
                    </a>
                </div>
                <div className="border-t-2 px-10 py-8 flex items-center justify-between w-full">
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="bg-green-500 h-3 w-3 rounded-full relative group">
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200 whitespace-nowrap
                                    backdrop-blur-sm"
                            >
                                online
                            </div>
                        </div>
                        <div className="text-2xl">Java ChatRoom</div>
                    </div>
                    <a
                        href="https://github.com/h3kar360/Java-Chat-Room"
                        target="_blank"
                    >
                        <img src={Github} alt="Github" className="w-8 h-8" />
                    </a>
                </div>
                <div className="border-t-2 px-10 py-8 flex items-center justify-between w-full">
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="bg-green-500 h-3 w-3 rounded-full relative group">
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200 whitespace-nowrap
                                    backdrop-blur-sm"
                            >
                                online
                            </div>
                        </div>
                        <div className="text-2xl">
                            Fun Fact YouTube Shorts Generator
                        </div>
                    </div>
                    <a
                        href="https://github.com/h3kar360/Fun-Fact-Video-Youtube-Shorts-Generator"
                        target="_blank"
                    >
                        <img src={Github} alt="Github" className="w-8 h-8" />
                    </a>
                </div>
                <div className="border-t-2 border-b-2 px-10 py-8 flex items-center justify-between w-full">
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="bg-green-500 h-3 w-3 rounded-full relative group">
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 bg-black text-white p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200 whitespace-nowrap
                                    backdrop-blur-sm"
                            >
                                online
                            </div>
                        </div>
                        <div className="text-2xl">Gomoku</div>
                    </div>
                    <a
                        href="https://github.com/h3kar360/Gomoku"
                        target="_blank"
                    >
                        <img src={Github} alt="Github" className="w-8 h-8" />
                    </a>
                </div>
            </section>
        </section>
    );
};

export default Projects;
