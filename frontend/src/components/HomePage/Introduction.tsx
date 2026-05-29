import derickPp from "../../assets/derick-pp.jpeg";

const Introduction = () => {
    return (
        <section>
            {/* desktop */}
            <section className="hidden w-full h-screen md:flex justify-evenly items-center">
                <div>
                    <p className="lg:text-6xl">Hi, I'm Derick</p>
                    <p className="lg:text-2xl">
                        A Computer Science student @CUHK-SZ
                        <br />
                        Expected to graduate at 2029
                    </p>
                </div>
                <img
                    src={derickPp}
                    alt="derick-profile-pic"
                    className="rounded-full lg:w-150 lg:h-150 object-cover"
                />
            </section>

            {/* mobile */}
            <section className="flex md:hidden w-full h-screen flex-col justify-center items-center gap-15">
                <img
                    src={derickPp}
                    alt="derick-profile-pic"
                    className="rounded-full w-100 h-100 object-cover"
                />
                <div>
                    <p className="text-4xl">Hi, I'm Derick</p>
                    <p className="text-xl">
                        A Computer Science student @CUHK-SZ
                        <br />
                        Expected to graduate at 2029
                    </p>
                </div>
            </section>
        </section>
    );
};

export default Introduction;
