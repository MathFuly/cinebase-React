import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURl = import.meta.env.VITE_IMG;

import Load from "../components/Load";

import style from "./Movie.module.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;

    getMovie(movieURL);
  }, []);

  return (
    <div className="container">
      {!movie && <Load />}
      {movie && (
        <div className={style.infocont}>
          <div className={style.imgcontent}>
            <img src={imageURl + movie.poster_path} alt={movie.title} />
          </div>

          <div className={style.infote}>
            <div className={style.infotexttitle}>
              <h2>{movie.title}</h2>
            </div>
            <div className={style.infotext}>
              <p>
                <FaStar className={style.icon} /> {movie.vote_average}
              </p>
            </div>
            <div className={style.infotext}>
              <h3>
                <BsWallet2 className={style.icon} /> Orçamento:
              </h3>{" "}
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className={style.infotext}>
              <h3>
                <BsGraphUp className={style.icon} /> Receita:
              </h3>{" "}
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className={style.infotext}>
              <h3>
                <BsHourglassSplit className={style.icon} /> Duração:
              </h3>
              <p> {movie.runtime} minutos</p>
            </div>
            <div className={style.infodesc}>
              <h3>
                <BsFillFileEarmarkTextFill className={style.icon} /> Descrição:
              </h3>
              <p>{" "}{movie.overview} minutos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
