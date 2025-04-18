import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="pt-[150px]" aria-labelledby="about-heading">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-[50px]">
                    <div className="flex-1">
                        <h1
                            id="about-heading"
                            className="text-[35px] font-semibold mb-6"
                        >
                            {t("about.title")}
                        </h1>
                        <article className="space-y-4">
                            {t("about.paragraphs", { returnObjects: true }).map((text, index) => (
                                <p key={index} className="text-[#696969] max-w-[500px]">
                                    {text}
                                </p>
                            ))}
                        </article>
                    </div>
                    <img
                        className="w-[800px] h-[600px] hidden lg:block rounded-[20px] shadow-[10px_10px_20px_rgba(0,0,0,0.3),0_-10px_20px_rgba(0,0,0,0.5)]"
                        src="https://www.sleepnest.uz/assets/aboutImg-BafZ-cOo.png"
                        alt={t("about.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
