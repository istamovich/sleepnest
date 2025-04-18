import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Connection = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        message: "",
    });
    const token = '7625011671:AAGPzwTe7zd8BGnbhPLOOGJVcwQOaRlOYCI';
    const chat_id = 5445767761;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, phone, message } = formData;

        const text = `📩 Yangi xabar:\n\n📧 Email: ${email}\n📱 Telefon: ${phone}\n💬 Xabar: ${message}`;
        try {
            await axios.post(url, {
                chat_id,
                text,
                parse_mode: "HTML"
            });
            toast.success(t("connection.toastSuccess"));
            setFormData({ email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Telegram error:", error);
            toast.error(t("connection.toastError"));
        }

    };

    return (
        <section id="link" className="pt-[150px]" aria-labelledby="connection-heading">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-[60px]">
                    <form
                        className="w-full lg:w-[45%] space-y-5"
                        onSubmit={handleSubmit}
                        data-aos="fade-right"
                    >
                        <h3 id="connection-heading" className="text-[32px] text-[#242825] font-semibold">
                            {t("connection.title")}
                        </h3>
                        <input
                            type="email"
                            name="email"
                            placeholder={t("connection.emailPlaceholder")}
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#e4e4e4] p-5 rounded-full outline-none"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t("connection.phonePlaceholder")}
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-[#e4e4e4] p-5 rounded-full outline-none"
                        />
                        <textarea
                            name="message"
                            rows={6}
                            maxLength={200}
                            placeholder={t("connection.messagePlaceholder")}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-[#e4e4e4] p-5 rounded-3xl outline-none resize-none mb-[30px]"
                        ></textarea>
                        <button type="submit" className="bg-red-600 text-white px-10 py-4 rounded-full">
                            {t("connection.submitButton")}
                        </button>
                    </form>

                    <iframe
                        className="w-full lg:w-[700px] h-[700px] rounded-2xl"
                        src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&t=m&z=17&output=embed&iwloc=near"
                        title="Location Map"
                        aria-label="Location Map Coordinates 39.747452957301974, 64.45996439941372"
                    ></iframe>
                </div>

                <div className="mt-[100px]">
                    <ul className="flex flex-wrap justify-around items-center gap-10 list-none p-0">
                        <li className="flex items-center gap-5">
                            <svg className="text-red-600 text-[40px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path></svg><a href="mailto:sleepnest@gmail.com">sleepnest@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-5">
                            <svg className="text-red-600 text-[40px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"></path></svg> <div className="flex flex-col">
                                <a href="tel:998940337212">+998 94 033 72 12</a>
                                <a href="tel:998917777368">+998 91 777 73 68</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-5">
                            <svg className="text-red-600 text-[40px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg> <span>Buxoro, st. Alpomish 80</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Connection;
