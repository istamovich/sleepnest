import React from 'react';
import { Link } from 'react-router-dom';
import QualityImg from '../../assets/quality.png';
import { useTranslation } from 'react-i18next';

const Quality = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[20px]">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-center justify-between rounded-[30px] bg-[#464351] text-white px-6 sm:px-10 py-12 gap-10 shadow-[0_0_30px_5px_rgba(255,0,0,0.3)]">

          <div className="flex flex-col items-start rounded-[30px] p-6 sm:p-10 text-center sm:text-left">
            <p className="text-[50px] sm:text-[70px] lg:text-[90px] font-black leading-none mb-3 sm:mb-5">
              100%
            </p>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] -mt-2">
              {t('materialQuality')}
            </p>
          </div>

          <div className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[1850px] lg:max-w-[1850px] -mt-5 sm:-mt-10 lg:-mt-16 -mb-5 lg:-ml-[120px] xl:-ml-[200px]">
            <img
              src={QualityImg}
              alt="High-quality product"
              className="w-full h-auto ml-6"
              loading="lazy"
            />
          </div>

          <div className="max-w-xl text-center lg:text-left lg:-ml-[60px] xl:-ml-[100px]">
            <p className="text-[20px] sm:text-[26px] lg:text-[30px] font-semibold mb-4">
              {t('ecoFriendly')}
            </p>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] mb-6">
              {t('companyDescription')}
            </p>
            <Link to="/collection">
              <button className="bg-white text-[#464351] font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition">
                {t('collectionBtn')}
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quality;
