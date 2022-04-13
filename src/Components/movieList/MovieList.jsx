import React from "react";
import AddMovie from "../addCard/AddMovie";
import MovieCard from "../movieCards/MovieCard";
import "./movieList.css";

const MovieList = ({
  movies,
  deleteCard,
  addMoviesCard,
  searchByTitle,
  searchByRating,
}) => {
  return (
    <div className="movieList">
      {/* we r gonna map through the movies to display them on the screen */}
      {/* since the search is gonna be apply to the movies list our filter function is gonna be added here to */}
      {movies
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(searchByTitle.toLowerCase().trim()) &&
            movie.rating >= searchByRating
        )
        .map((movie, index) => (
          <MovieCard
            key={index}
            id={index}
            movieInfo={movie}
            deleteFunction={deleteCard}
          />
        ))}
      {/* the add movie component*/}
      <AddMovie addToList={addMoviesCard} />
    </div>
  );
};

export default MovieList;
