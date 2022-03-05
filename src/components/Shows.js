import React from "react";
import { Link } from "react-router-dom";

const Shows = (props) => {
  const { shows, onMovieSelect } = props;
  return (
    <div className="card-deck mt-4 col-sm-12 col-md-4 col-lg-3">
      <div className="card p-3 ">
        <div className="card-block">
          <img src={shows.image.medium} alt="" />
          <h4 className="card-title mt-2">{shows.name}</h4>
          <p className="card-text">
            <span className="bold-fonts">Rating: </span>
            {shows.rating.average} <br />
            <span className="bold-fonts">Genres: </span>
            {shows.genres.join(", ")} <br />
            <span className="bold-fonts">Language: </span>
            {shows.language}
          </p>
        </div>

        <Link to={"/ShowItem"}>
          <div
            className="card-footer mt-2"
            onClick={() => onMovieSelect(shows.id)}
          >
            <h5>Book ticket</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Shows;
