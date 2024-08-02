import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { totalCount } = useSelector((state) => state.product);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-4xl font-extrabold tracking-wider">Shopping Cart</h1>
        <div className="flex items-center bg-white text-blue-600 rounded-full px-4 py-2 shadow-md">
          <span className="text-lg font-medium">Total Items:</span>
          <span className="ml-3 text-2xl font-bold">{totalCount}</span>
        </div>
      </div>
    </header>
  );
};
