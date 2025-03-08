/** @format */

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context";
import { getImageUrl } from "../utils";
const CartRow = ({ cart }) => {
  const { carts, setCarts } = useContext(MovieContext);

  const handleRemove = (movie) => {
    setCarts(carts.filter((cart) => cart.id !== movie.id));
    toast(`the ${movie.title} is deleted`);
  };
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div className="flex items-center gap-4">
        <img
          className="rounded overflow-hidden"
          src={getImageUrl(cart.cover)}
          alt={cart.title}
          width={"50px"}
          height={"50px"}
        />
        <div>
          <h3 className="text-base md:text-xl font-bold">{cart.title}</h3>
          <p className="max-md:text-xs text-[#575A6E]">{cart.genre}</p>
          <span className="max-md:text-xs">${cart.price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
          <img
            className="w-5 h-5"
            src="./assets/delete.svg"
            alt=""
          />
          <a
            onClick={() => handleRemove(cart)}
            href="#">
            <span className="max-md:hidden">Remove</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default CartRow;
