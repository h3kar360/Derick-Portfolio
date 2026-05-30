import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Github from "../../assets/logos/github-light.svg";
import Linkedin from "../../assets/logos/linkedin-icon.svg";
import Instagram from "../../assets/logos/instagram-icon.svg";

const Contacts = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

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
                    setIsSubmitting(false);
                    alert("Successfully send email");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setIsSubmitting(false);
                    alert("Email failed to send");
                },
            );
    };

    return (
        <section className="text-white bg-black w-full lg:mt-30">
            <div id="main-body" className="py-20">
                <div id="contacts" className="text-4xl mb-10">
                    Contacts
                </div>
                <section>
                    <div className="flex lg:flex-row flex-col-reverse justify-between">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="flex flex-col lg:gap-8 text-xl lg:w-[calc(50%)] w-full"
                        >
                            <div>// Send an email to me</div>
                            <div>
                                <label>Subject: </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="bg-white text-black w-full rounded-xl p-2 my-2"
                                />
                            </div>
                            <div>
                                <label>Name: </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    className="bg-white text-black w-full rounded-xl p-2 my-2"
                                />
                            </div>
                            <div>
                                <label>Message:</label>
                                <textarea
                                    name="message"
                                    className="bg-white text-black w-full lg:h-100 rounded-xl p-2 my-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white border-2 rounded-2xl py-3 hover:bg-gray-400"
                                disabled={isSubmitting}
                            >
                                Send
                            </button>
                        </form>
                        <div className="lg:border-l-2 border-t-2 my-5"></div>
                        <div>
                            <div className="flex lg:gap-10 lg:mb-10 gap-5 mb-5">
                                <a href="https://github.com/h3kar360">
                                    <img
                                        src={Github}
                                        alt="Github"
                                        className="lg:w-15 lg:h-15 w-10 h-10"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/derick-lievian-1a2879369/">
                                    <img
                                        src={Linkedin}
                                        alt="Linkedin"
                                        className="lg:w-15 lg:h-15 w-10 h-10"
                                    />
                                </a>
                                <a href="https://www.instagram.com/de_rickroll/">
                                    <img
                                        src={Instagram}
                                        alt="Instagram"
                                        className="lg:w-15 lg:h-15 w-10 h-10"
                                    />
                                </a>
                            </div>
                            <a
                                href="dericklievian@gmail.com"
                                className="text-2xl"
                            >
                                dericklievian@gmail.com
                            </a>
                            <p className="lg:mt-5 mt-3 text-2xl">
                                +86 190 6862 3721
                            </p>
                            <p className="lg:mt-5 mt-3 text-2xl">
                                +62 895 6375 12543
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Contacts;
