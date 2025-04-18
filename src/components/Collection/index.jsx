import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../ProductCard';
import { useTranslation } from 'react-i18next';

const Collection = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState(t('categories.all'));
    const [search, setSearch] = useState('');

    const categories = [
        t('categories.all'),
        t('categories.winter'),
        t('categories.autumn'),
        t('categories.summer'),
    ];

    return (
        <div className='container grid grid-cols-2 place-items-center py-32'>
            <div className="w-[500px] flex flex-col">
                {/* Search Input */}
                <div className="relative w-4/5">
                    <label htmlFor="searchInput" className="sr-only">
                        {t('search.label')}
                    </label>
                    <input
                        id="searchInput"
                        type="text"
                        placeholder={t('categories.filterBy')}
                        aria-label={t('search.aria')}
                        className="w-full p-5 rounded-full bg-gray-200 outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Search className="absolute right-[20px] top-[10px] bg-red-600 text-white p-3 rounded-full w-10 h-10" />
                </div>

                {/* Category List */}
                <div className="flex flex-col gap-2 mt-16">
                    <h2 className="text-xl font-semibold mb-5">{t('categories.collection')}</h2>
                    {categories.map((category) => (
                        <p
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`cursor-pointer ${activeCategory === category ? 'text-[#a17f4a] font-medium' : 'text-black'
                                }`}
                            aria-label={t('categories.filterBy', { category })}
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </div>
            <div>
                <ProductCard />
            </div>
        </div>
    );
};

export default Collection;
