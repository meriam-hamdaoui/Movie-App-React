import React, { useState } from "react";
import Helmet from "react-helmet";
import SearchMovie from "./Components/filterBar/SearchMovie";
import MovieList from "./Components/movieList/MovieList";
import listMovies from "./moviesInfo";

const App = () => {
  // we need to keep track of the state of our movie list
  const [moviesList, setMovieList] = useState(listMovies);
  //const to track our search by title state
  const [searchByTitle, setSearchByTitle] = useState("");
  //const to track our search by rating state
  const [searchByRating, setSearchByRating] = useState(0);

  //the remove function should be defined in app.js
  //bcz our moviesList states are declared in here
  const removeMovie = (id) => {
    setMovieList((prevList) => {
      return prevList.filter((movie, index) => {
        return index !== id;
      });
    });
  };

  //again our set movie list is in our app
  //wo the add will be defined in here
  const addMoviesCard = (newMovie) => {
    setMovieList([...moviesList, newMovie]);
  };

  return (
    <div style={{ position: "inherit", color: "white" }}>
      {/* helmet componet is for updating title and icon of onglet app */}
      <Helmet>
        <title>Cartoons</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>
      {/* our filter bar component */}
      <SearchMovie
        setSearchByTitle={setSearchByTitle}
        setSearchByRating={setSearchByRating}
        searchByRating={searchByRating}
      />
      {/* the display of our movie list */}
      <MovieList
        movies={moviesList}
        deleteCard={removeMovie}
        addMoviesCard={addMoviesCard}
        setMovies={setMovieList}
        searchByTitle={searchByTitle}
        searchByRating={searchByRating}
      />
    </div>
  );
};

export default App;
