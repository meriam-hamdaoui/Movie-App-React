import React from "react";
import Rating from "../../Rating";
import "./movieCard.css";

const MovieCard = ({
  id,
  deleteFunction,
  movieInfo: { title, year, description, posterURL, rating, trailerURL },
}) => {
  return (
    <div className="movieCard">
      <div className="cardHeader">
        <h3 className="title">
          {title}
          <br /> <span>released</span> {year}
        </h3>
        <button onClick={() => deleteFunction(id)} className="btnX">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
        <div className="description">
          <h5>Overview:</h5>
          <p>{description}</p>
        </div>
      </div>

      <div className="cardBottom">
        <a href={trailerURL} target="_blank" rel="noopener noreferrer">
          WATCH TRAILER ►
        </a>
        <Rating rateNbr={rating} />
      </div>
    </div>
  );
};

export default MovieCard;
