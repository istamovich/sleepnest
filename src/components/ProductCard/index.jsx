import React from "react";
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
  }
];

const ProductCard = () => {
  
  return (
    <div className="container mx-auto ">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => (
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
              className="absolute top-2 right-2 text-red-500 bg-white p-1 rounded-full shadow group-hover:scale-110 transition"
              aria-label={`Add ${product.name} to wishlist`}
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
            </button>
            <p className="mt-2 font-medium">{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
