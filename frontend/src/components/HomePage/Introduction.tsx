import React from "react";
import derickPp from "../../assets/derick-pp.jpeg";

const Introduction = () => {
    return (
        <section
            className="w-full h-screen flex justify-evenly items-center"
            id="home"
        >
            <div>
                <p className="text-6xl">Hi, I'm Derick</p>
                <p className="text-2xl">
                    A Computer Science student @CUHK-SZ
                    <br />
                    Expected to graduate at 2029
                </p>
            </div>
            <img
                src={derickPp}
                alt="derick-profile-pic"
                className="rounded-full w-150 h-150 object-cover"
            />
        </section>
    );
};

export default Introduction;
