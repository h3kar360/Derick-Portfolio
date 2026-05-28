import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Github from "../../assets/logos/github-light.svg";
import Linkedin from "../../assets/logos/linkedin-icon.svg";
import Instagram from "../../assets/logos/instagram-icon.svg";

const Contacts = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current!,
                {
                    publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
                },
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    alert("Successfully send email");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Email failed to send");
                },
            );
    };

    return (
        <section className="text-white bg-black w-full mt-30">
            <div id="main-body" className="py-20">
                <div id="contacts" className="text-4xl mb-10">
                    Contacts
                </div>
                <div className="flex justify-between">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col gap-8 text-xl w-[calc(50%)]"
                    >
                        <div>// Send an email to me</div>
                        <div>
                            <label>Subject: </label>
                            <input
                                type="text"
                                name="title"
                                className="bg-white text-black w-full rounded-xl p-2 mt-2"
                            />
                        </div>
                        <div>
                            <label>Name: </label>
                            <input
                                type="text"
                                name="from_name"
                                className="bg-white text-black w-full rounded-xl p-2 mt-2"
                            />
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea
                                name="message"
                                className="bg-white text-black w-full h-100 rounded-xl p-2 mt-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white border-2 rounded-2xl py-3 hover:bg-gray-400"
                        >
                            Send
                        </button>
                    </form>
                    <div className="border-l-2"></div>
                    <div>
                        <div className="flex gap-10 mb-10">
                            <a href="https://github.com/h3kar360">
                                <img
                                    src={Github}
                                    alt="Github"
                                    className="w-15 h-15"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/derick-lievian-1a2879369/">
                                <img
                                    src={Linkedin}
                                    alt="Linkedin"
                                    className="w-15 h-15"
                                />
                            </a>
                            <a href="https://www.instagram.com/de_rickroll/">
                                <img
                                    src={Instagram}
                                    alt="Instagram"
                                    className="w-15 h-15"
                                />
                            </a>
                        </div>
                        <a href="dericklievian@gmail.com" className="text-2xl">
                            dericklievian@gmail.com
                        </a>
                        <p className="mt-5 text-2xl">+86 190 6862 3721</p>
                        <p className="mt-5 text-2xl">+62 895 6375 12543</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
