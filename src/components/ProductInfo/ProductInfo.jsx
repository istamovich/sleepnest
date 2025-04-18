import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../ProductCard';
import ReviewForm from '../ReviewForm';

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id || ''));

  if (!product) {
    return <div className="text-center mt-20 text-xl text-red-500">Mahsulot topilmadi.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full rounded-3xl"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <table className="w-full table-auto border border-gray-200 text-left">
            <tbody className="text-gray-700 text-base">
              
              <tr className="border-b">
                <td className="font-semibold p-2">Yostiq kiyimi:</td>
                <td className="p-2">{product.pillowcase}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">Choyshab:</td>
                <td className="p-2">{product.bedsheet}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">Ko'rpa-to‘shak:</td>
                <td className="p-2">{product.duvet}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-red-600 font-medium pt-4">
            Kategoriya: Qish kolleksiyasi
          </p>
        </div>
      </div>
      <div>
      <ReviewForm></ReviewForm>
      </div>
    </div>
  );
};

export default ProductInfo;
