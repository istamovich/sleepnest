import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    name: "Kvadratchalar",
    image: "https://www.sleepnest.uz/assets/productImg1-DUY0b_Wm.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
  {
    id: 2,
    name: "Ikat",
    image: "https://www.sleepnest.uz/assets/productImg2-DOPfHc9I.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
  {
    id: 3,
    name: "Davralar",
    image: "https://www.sleepnest.uz/assets/productImg3-BxeyfoJM.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
  {
    id: 4,
    name: "Geometriya ko'k",
    image: "https://www.sleepnest.uz/assets/productImg4-CcK4oVXm.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
  {
    id: 5,
    name: "Tropik barglar",
    image: "https://www.sleepnest.uz/assets/productImg5-CpnXLhLk.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
  {
    id: 6,
    name: "Bambi",
    image: "https://www.sleepnest.uz/assets/productImg6-nwrmBsNI.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
  {
    id: 7,
    name: "Vizantiya",
    image: "https://www.sleepnest.uz/assets/productImg7-CzuWUAcD.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
  {
    id: 8,
    name: "Lavanda atirgullari",
    image: "https://www.sleepnest.uz/assets/productImg10-CJbpkbvq.jpg",
    pillowcase: "50x70 sm",
    bedsheet: "260×280 sm",
    duvet: "160x220 sm",
  },
];

const ProductCard = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem("wishlist");
    if (storedLikes) {
      setLikedProducts(JSON.parse(storedLikes));
    }
  }, []);

  const toggleLike = (productId) => {
    const idStr = productId.toString();
    let updatedLikes;

    if (likedProducts.includes(idStr)) {
      updatedLikes = likedProducts.filter((id) => id !== idStr);
    } else {
      updatedLikes = [...likedProducts, idStr];
    }

    setLikedProducts(updatedLikes);
    localStorage.setItem("wishlist", JSON.stringify(updatedLikes));
  };

  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => {
          const isLiked = likedProducts.includes(product.id.toString());
          return (
            <li key={product.id} className="relative group">
              <Link to={`/product/${product.id}`} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg shadow-md transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <button
                onClick={() => toggleLike(product.id)}
                className={`absolute top-2 right-2 flex items-center justify-center
    ${isLiked ? "text-red-600" : "text-red-500"}
    bg-white p-1 rounded-full shadow group-hover:scale-110 transition`}
                aria-label={`Add ${product.name} to wishlist`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={isLiked ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M20.8 4.6c-1.5-1.6-4-1.6-5.5 0l-.8.8-.8-.8c-1.5-1.6-4-1.6-5.5 0s-1.5 4.2 0 5.8l6.3 6.4 6.3-6.4c1.5-1.6 1.5-4.2 0-5.8z" />
                </svg>
              </button>
              <p className="mt-2 font-medium">{product.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCard;
