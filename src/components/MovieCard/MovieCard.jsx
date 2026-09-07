import styles from "./MovieCard.module.css";
import { BsPlayFill, BsPlusLg } from "react-icons/bs";
import { IoIosThumbsUp, IoIosArrowDown } from "react-icons/io";

/**
 * A Netflix-style portrait card. Hovering expands the card and
 * drops an info panel below the poster with actions and metadata.
 * @param {{ movie: import("../../Data/Data.js").Movie }} props
 */
function MovieCard({ movie }) {
  const genres = movie?.genres || [];

  return (
    <div className={styles.card}>
      <div className={styles.posterWrap}>
        <img
          className={styles.poster}
          src={movie?.poster_path}
          alt={movie?.title}
          draggable={false}
        />
        {movie?.badge && <span className={styles.badge}>{movie.badge}</span>}
      </div>

      <div className={styles.info}>
        <div className={styles.buttonsRow}>
          <button
            type="button"
            aria-label="Play"
            className={`${styles.roundBtn} ${styles.playBtn}`}
          >
            <BsPlayFill />
          </button>
          <button type="button" aria-label="Add to My List" className={styles.roundBtn}>
            <BsPlusLg />
          </button>
          <button type="button" aria-label="Like" className={styles.roundBtn}>
            <IoIosThumbsUp />
          </button>
          <button
            type="button"
            aria-label="More info"
            className={`${styles.roundBtn} ${styles.moreBtn}`}
          >
            <IoIosArrowDown />
          </button>
        </div>

        <p className={styles.title}>{movie?.title}</p>

        <div className={styles.metaRow}>
          <span className={styles.match}>97% Match</span>
          <span className={styles.tag}>{movie?.matureRating}</span>
          <span className={styles.tag}>{movie?.quality}</span>
        </div>

        <div className={styles.genres}>
          {genres.map((genre, index) => (
            <span key={index}>
              {genre}
              {index < genres.length - 1 && <span className={styles.dot}>•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;