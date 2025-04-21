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
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-4">Sevimlilar</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Sizda hozircha hech qanday sevimli mahsulot yo‘q.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {wishlistItems.map((product) => (
            <li key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg shadow-md transition duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="mt-2 font-medium">{product.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
