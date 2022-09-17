import { useState, useEffect } from "react";
import Load from "../components/Load";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import style from "./Home.module.css"

const Home = () => {
  const [topMovies, setTopmovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopmovies(data.results);
  };

  useEffect(() => {
    const TopRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(TopRatedUrl);
  }, []);

  return (
    <div className={style.container}>
      <h2 className="title">Melhores filmes:</h2>
      <div className={style.moviecontainer}>
        {topMovies.length === 0 && <Load />}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
      
  );
};

export default Home;
