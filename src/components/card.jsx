import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/products-reducer";
import { BiCartAlt } from "react-icons/bi";

export const Card = ({ name, price, count, img, id }) => {
  const dispatch = useDispatch();

  const buyProduct = () => {
    dispatch(addProduct({ name, price, count, img, id }));
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-64 object-cover" src={img} alt={name} />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-semibold text-green-600">${price}</span>
        </div>
        <p className="text-gray-600 mb-4">Count: {count}</p>
        <button
          onClick={buyProduct}
          className="w-full bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
