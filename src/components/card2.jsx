import React from "react";
import { useDispatch } from "react-redux";
import { toggleAmount, removeProduct } from "../redux/products/products-reducer";
import { IoAdd } from "react-icons/io5";


export const Card2 = ({ userPrice, img, userCount, count, id, name }) => {
  const dispatch = useDispatch();

  const changeProductPrice = (type = undefined) => {
    dispatch(toggleAmount({ id, type }));
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={img} alt={name} />
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
        <div className="mt-2">
          <span className="text-xl font-bold text-green-600">${userPrice}</span>
        </div>
        <p className="mt-2 text-gray-600">Count: {count}</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            onClick={() => changeProductPrice("add")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <IoAdd />
          </button>
          <strong className="text-lg">{userCount}</strong>
          {userCount > 1 ? (
            <button
              onClick={() => changeProductPrice("remove")}
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              -
            </button>
          ) : (
            <button
              onClick={() => dispatch(removeProduct(id))}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              X
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
