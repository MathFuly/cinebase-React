import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageURl = import.meta.env.VITE_IMG;

import style from "./MovieCard.module.css";

const MovieCard = ({ movie, showLink = true }) => {
  const back = {};
  return (
    <div className={style.moviecardin}>
      <div className={style.cardimg}>
        <img src={imageURl + movie.poster_path} alt={movie.title} />
      </div>

      <div
        className={style.cardinfo}
      >
        <h2>{movie.title}</h2>
        <p>
          <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link className={style.cardbutton} to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </div>
  );
};

export default MovieCard;
