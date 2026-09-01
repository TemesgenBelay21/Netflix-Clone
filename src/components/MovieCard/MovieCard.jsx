import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard({ movie }) {
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.poster} src={movie.poster_path} alt={movie.title} />

      <div className={styles.hoverCard}>
        <img className={styles.hoverPoster} src={movie.poster_path} alt={movie.title} />
        {movie.badge && <div className={styles.badge}>{movie.badge}</div>}

        <div className={styles.buttonRow}>
          <span className={styles.circleButtonSmall}>
            <FaCirclePlay color="white" size={18} />
          </span>
          <span className={styles.circleButtonSmall}>
            <BsPlusCircle color="white" size={18} />
          </span>
          <span className={styles.circleButtonSmall}>
            <GoCheckCircleFill color="white" size={18} />
          </span>
          <span className={styles.circleButtonSmall}>
            <IoIosArrowDropdownCircle color="white" size={18} />
          </span>
        </div>
        <div className={styles.metaRow}>
          <span>{movie.matureRating}</span>
          <span>{movie.category}</span>
          <span>{movie.quality}</span>
        </div>

        <div className={styles.genreRow}>
          {movie.genres.map((genre, index) => (
            <span key={index}>
              {genre}
              {index < movie.genres.length - 1 && <span>.</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
