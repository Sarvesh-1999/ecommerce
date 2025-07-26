import React from "react";

const ProductCard = (props) => {
  let { id, title, price, salePrice, image } = props.product;
  
  return (
    <div className="p-5">
      <div className="p-4 border border-gray-300 rounded-xl shadow-lg">
        <img
          src="https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg"
          alt=""
          className="h-[200px] w-full rounded-t-lg"
        />

        <h1 className="text-2xl font-bold">{title}</h1>

        <p className="flex justify-between font-semibold">
          <del className="text-gray-600">Rs.{price}</del>
          <span>Rs.{salePrice}</span>
        </p>

        <button className="w-full bg-black text-white py-2 rounded font-semibold">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
