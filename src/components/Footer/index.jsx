import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-[150px]" aria-labelledby="footer-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-6 gap-10 mb-12">
          <div className="w-full lg:w-[22%]">
            <a href="#" aria-label="Company logo">
              <img
                src="https://www.sleepnest.uz/assets/header__icon-BxcC8k5d.png"
                alt="Company Logo"
                width={180}
              />
            </a>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div className="w-full lg:w-[18%]">
            <h2 className="text-lg font-semibold mb-3">{t("footer.menu")}</h2>
            <nav>
              <ul className="flex flex-col gap-1 text-sm">
                <li><a href="/" className="hover:underline">{t("footer.links.home")}</a></li>
                <li><a href="/collection" className="hover:underline">{t("footer.links.collection")}</a></li>
                <li><a href="/about" className="hover:underline">{t("footer.links.about")}</a></li>
                <li><a href="/contact" className="hover:underline">{t("footer.links.contact")}</a></li>
              </ul>
            </nav>
          </div>

          <div className="w-full lg:w-[22%]">
            <h3 className="text-lg font-semibold mb-3">{t("footer.contacts.title")}</h3>
            <address className="not-italic text-sm text-gray-700 space-y-1">
              <p>{t("footer.contacts.address")}</p>
              <p>Email: sleepnest@gamil.com</p>
              <p>{t("footer.contacts.telegram")}: sleepnest</p>
              <a href="tel:+998940337212" className="hover:underline block">
                +998 94 033 72 12
              </a>
            </address>
          </div>

          <div className="w-full lg:w-[28%]">
            <h4 className="text-lg font-semibold mb-3">{t("footer.subscribe.title")}</h4>
            <form className="relative w-full">
              <input
                type="email"
                placeholder={t("footer.subscribe.placeholder")}
                required
                className="p-4 pr-32 border border-gray-700 rounded-[16px] w-full text-sm outline-none"
              />
              <button
                type="submit"
                className="absolute top-[5px] right-[10px] bg-red-600 text-white px-4 py-2 rounded-[20px] border-none"
              >
                {t("footer.subscribe.button")}
              </button>
            </form>
            <p className="text-xs text-gray-600 mt-3">
              {t("footer.subscribe.note")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-sm">
            © 2024 {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
