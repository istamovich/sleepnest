import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-[0_0_15px_rgba(94,89,89,0.165)] pt-[10px] pb-[10px] transition-all">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center relative">
          <Link to="/" aria-label="Homepage">
            <img
              src="https://www.sleepnest.uz/assets/header__icon-BxcC8k5d.png"
              alt="Company Logo"
              width={180}
              className="header__icon"
            />
          </Link>

          <nav className="hidden ml-[210px] md:flex items-center gap-3 transition-all duration-300">
            <ul className="flex items-center gap-8">
              {[
                { to: "/", label: t("home") },
                { to: "/collection", label: t("collection") },
                { to: "/about", label: t("navbar.about") },
                { to: "/contact", label: t("contact") },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `cursor-pointer px-2 py-[5px] text-[20px] text-black/60 hover:text-[#a17f4a] ${
                        isActive ? "text-[#a17f4a] font-medium" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative text-red-500"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
              </svg>
              <sup className="absolute -top-2 -right-3 text-sm bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
                0
              </sup>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <select
              id="language-select"
              onChange={handleLanguageChange}
              className="text-white font-semibold text-lg bg-[#a17f4a] border-2 border-[#a17f4a] rounded-[10px] px-2 py-1 cursor-pointer"
              value={i18n.language}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="eng">ENG</option>
            </select>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col gap-[4px] justify-center items-center w-8 h-8"
              aria-label="Toggle navigation"
            >
              <span className="block w-6 h-[2px] bg-black"></span>
              <span className="block w-6 h-[2px] bg-black"></span>
              <span className="block w-6 h-[2px] bg-black"></span>
            </button>
          </div>

          <div
            className={`absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-start px-6 py-4 gap-4">
              {[
                { to: "/", label: t("home") },
                { to: "/collection", label: t("collection") },
                { to: "/about", label: t("navbar.about") },
                { to: "/contact", label: t("contact") },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-2 py-1 text-[18px] font-light text-black/60 hover:text-[#a17f4a] ${
                        isActive ? "text-[#a17f4a] font-medium" : ""
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              <li>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-2 text-red-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("wishlist")}
                  <span className="relative">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                    </svg>
                    <sup className="absolute -top-2 -right-3 text-sm bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
                      0
                    </sup>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
