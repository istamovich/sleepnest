import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { generateNewsItems } from '../News';

const NewsInfo = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const newsItems = generateNewsItems(t);
  const path = `/perfect${id ? '-' + id : ''}`;
  const newsItem = newsItems.find((item) => item.href === path);

  if (!newsItem) {
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        {t("news.notFound", "Yangilik topilmadi.")}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-1 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={newsItem.imgSrc}
            alt={newsItem.alt}
            className="w-[70%] h-full rounded-3xl"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{newsItem.title}</h1>
          <p className="text-base text-gray-700">{newsItem.text}</p>
          <p className="text-sm text-gray-500 pt-2">
            {t("news.date", "Chiqarilgan sana")}: {newsItem.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
