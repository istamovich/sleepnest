import React from "react";
import { useTranslation } from "react-i18next";

// Statik malumotlar
const newsImages = [
  "https://www.sleepnest.uz/assets/newsImg1-CeksgPws.png",
  "https://www.sleepnest.uz/assets/newsImg2-C6gHUOM0.png",
  "https://www.sleepnest.uz/assets/newsImg3-Bi9JUafJ.png"
];
const newsLinks = ["/perfect", "/perfect-2", "/perfect-3"];
const newsDates = ["2024-05-10", "2024-05-10", "2024-05-10"];

// 🔥 SHU FUNKSIYANI EXPORT QILAMIZ
export const generateNewsItems = (t) => {
  const items = t("news.items", { returnObjects: true });
  return items.map((item, index) => ({
    href: newsLinks[index],
    imgSrc: newsImages[index],
    alt: `News ${index + 1}`,
    title: item.title,
    text: item.text,
    date: newsDates[index]
  }));
};

const News = () => {
  const { t } = useTranslation();
  const newsItems = generateNewsItems(t);

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("news.sectionTitle")}
          </h2>
          <p className="text-base text-gray-400 mt-2">
            {t("news.sectionSubtitle")}
          </p>
        </div>

        <ul className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
          {newsItems.map((item, index) => (
            <li key={index} className="overflow-hidden">
              <a href={item.href} aria-label={item.title}>
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </a>
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <time dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString("uz-UZ")}
                  </time>
                  <p>{t("news.adminBy")}</p>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
