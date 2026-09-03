import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard({ movie }) {
  const genres = movie?.genres || [];
  return (
    <div className={styles.cardwrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={movie?.poster_path}
        alt={movie?.title}
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={movie?.poster_path}
          alt={movie?.title}
        />
        {/* badge */}
        <div className={styles.badge}>{movie?.badge}</div>

        {/* button row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* meta data row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>{movie?.matureRating}</span>
          <span className={styles.tag}>{movie?.category}</span>
          <span className={styles.tag}>{movie?.quality}</span>
        </div>
        {/* genres */}
        <div className={styles.genres}>
          {genres?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}>•</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
