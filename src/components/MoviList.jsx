/** @format */

import React from "react";
import MoviCard from "./MoviCard";

const MoviList = ({ movies }) => {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MoviCard
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviList;
