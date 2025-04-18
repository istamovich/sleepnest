import React from 'react';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';
import Quality from '../../components/Quality';
import Services from '../../components/Services';
import Quality2 from '../../assets/quality2.png';
import { Link } from 'react-router-dom';
import News from '../../components/News';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Hero />
            <Services />
            <Quality />

            {/* Qish kolleksiyasi */}
            <div className='py-24'>
                <div>
                    <h1 className="text-center text-[35px] font-bold">
                        {t('winterCollection')}
                    </h1>
                    <p className="text-center mx-auto mb-20 text-base">
                        {t('ecoFriendly')}
                    </p>
                </div>
                <ProductCard />
            </div>

            {/* Purple quality section */}
            <div>
                <section>
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col lg:flex-row items-center justify-between rounded-[30px] bg-[#7F54B3] text-white px-6 sm:px-10 py-12 gap-10 shadow-[0_0_30px_5px_rgba(255,0,0,0.3)]">
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
                                    src={Quality2}
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
            </div>

            {/* Kuz kolleksiyasi */}
            <div className='py-24'>
                <div>
                    <h1 className="text-center text-[35px] font-bold">
                        {t('autumnCollection')}
                    </h1>
                    <p className="text-center mx-auto mb-20 text-base">
                        {t('ecoFriendly')}
                    </p>
                </div>
                <ProductCard />
            </div>

            {/* Green quality section */}
            <div>
                <section>
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col lg:flex-row items-center justify-between rounded-[30px] bg-[#236F48] text-white px-6 sm:px-10 py-12 gap-10 shadow-[0_0_30px_5px_rgba(255,0,0,0.3)]">
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
                                    src="https://www.sleepnest.uz/assets/quality__img3-Dcb3hveR.png"
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
            </div>

            {/* Yozgi kolleksiya */}
            <div className='py-24'>
                <div>
                    <h1 className="text-center text-[35px] font-bold">
                        {t('summerCollection')}
                    </h1>
                    <p className="text-center mx-auto mb-20 text-base">
                        {t('ecoFriendly')}
                    </p>
                </div>
                <ProductCard />
            </div>

            <News />
        </div>
    );
};

export default Home;
