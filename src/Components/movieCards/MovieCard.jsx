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
          <br />
          &nbsp; &nbsp; &nbsp;<span>released</span> {year}
        </h3>
        <button onClick={() => deleteFunction(id)} className="btnX">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
        <div className="description">
          <h3>Overview:</h3>
          <h5>{description}</h5>
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
