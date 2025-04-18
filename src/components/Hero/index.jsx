import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="pt-[80px] sm:pt-[100px]">
            <div className="container mx-auto px-4">
                <div className="relative animate-bgAndTextPulse rounded-[40px] flex justify-end pr-4 sm:pr-[20px] pt-[60px] sm:pt-[70px] pb-[200px] sm:pb-[300px]">
                    <img
                        className="absolute -left-[50px] sm:-left-[150px] md:-left-[200px] top-[80px] sm:-top-[50px] w-[800px] sm:w-[1200px] md:w-[1500px] lg:w-[1800px]"
                        src="https://www.sleepnest.uz/assets/heroImg-npptRuJS.png"
                        alt="hero"
                        loading="lazy"
                    />

                    <div className="z-10 text-right px-2 sm:px-0">
                        <h1 className="text-[20px] sm:text-[25px] lg:text-[30px] leading-[20px] sm:leading-[25px] m-0">
                            {t("hero.eco")}
                        </h1>
                        <p className="text-[#a17f4a] text-[35px] sm:text-[55px] lg:text-[65px] my-[20px] sm:my-[30px] leading-[36px] sm:leading-[40px] lg:leading-[48px]">
                            {t("hero.clean_sleep")}
                        </p>
                        <p className="text-[#a17f4a] text-[45px] sm:text-[95px] leading-[50px] sm:leading-[80px] m-0">
                            {t("hero.products")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
