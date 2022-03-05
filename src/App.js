import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import ShowsItem from "./components/ShowsItem";
import Shows from "./components/Shows";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  // Fetching Movies from API
  useEffect(() => {
    const fetchShows = async () => {
      const result = await axios(`https://api.tvmaze.com/search/shows?q=all`);
      setShows(result.data);
    };

    fetchShows();
  }, []);

  return (
    <Router>
      <>
        <Header />
        <div className="container mt-4">
          <div className="row">
            <Switch>
              <Route path="/ShowItem">
                {selectedMovie && <ShowsItem selectedMovie={selectedMovie} />}
              </Route>

              <Route path="/">
                {shows.map((show) => (
                  <Shows
                    key={show.show.id}
                    shows={show.show}
                    onMovieSelect={onMovieSelect}
                  />
                ))}
              </Route>
            </Switch>
          </div>
        </div>

        <Footer />
      </>
    </Router>
  );
};

export default App;
