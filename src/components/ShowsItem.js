import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BookShow } from "./BookShow";

const Shows = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const [bookingForm, setBookingForm] = useState(false);
  const { selectedMovie } = props;

  // calling API for a single movie
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${selectedMovie}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className="container">
      <Link to={"/"}>
        <p>Back to Home</p>
      </Link>
      <div className="row">
        <div className=" row card-deck mt-4 ">
          <div className="card p-3 col-sm-3">
            <div className="card-block">
              <img src={movieInfo?.image.medium} alt="" />

              <h4 className="card-title mt-2">{movieInfo?.name}</h4>
            </div>
          </div>
          <div className="card p-3 col-sm-9">
            <div className="card-block">
              <p>
                <span className="bold-fonts">Rating: </span>
                {movieInfo?.rating.average} &nbsp;
                <span className="bold-fonts">Genres: </span>
                {movieInfo?.genres.join(", ")} &nbsp;
                <span className="bold-fonts">Language: </span>
                {movieInfo?.language}
              </p>
              <p className="card-text">{movieInfo?.summary}</p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setBookingForm(!bookingForm)}
                className="btn btn-primary"
              >
                {" "}
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row booking-form">
        {bookingForm && <BookShow movieName={movieInfo?.name} />}
      </div>
    </div>
  );
};

export default Shows;
