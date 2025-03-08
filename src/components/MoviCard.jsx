/** @format */

import React, { useState } from "react";
import { getImageUrl } from "../utils";
import MovieDetailModal from "./MovieDetailModal";
import Rating from "./Rating";

const MoviCard = ({ movie }) => {
  const [isModal, setIsModal] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  const handleOpenModal = (movie) => {
    setIsModal(true);
    setMovieDetail(movie);
  };
  console.log(movieDetail);
  return (
    <>
      {isModal && (
        <MovieDetailModal
          movieDetail={movieDetail}
          onClose={() => {
            setIsModal(false);
            setMovieDetail(null);
          }}
        />
      )}
      <figure
        onClick={() => handleOpenModal(movie)}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full object-cover"
          src={getImageUrl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            className="bg-[#00D991] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#">
            <img
              src="./assets/tag.svg"
              alt=""
            />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MoviCard;
