import React, { useEffect, useState } from 'react';
import { products } from '../../components/ProductCard'; 
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      const likedIds = JSON.parse(storedWishlist);
      const filteredProducts = products.filter(product =>
        likedIds.includes(product.id.toString())
      );
      setWishlistItems(filteredProducts);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">Sevimlilar</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500 text-center">Sizda hozircha hech qanday sevimli mahsulot yo‘q.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {wishlistItems.map((product) => (
            <li key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="mt-2 text-sm sm:text-base font-medium text-center">{product.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
