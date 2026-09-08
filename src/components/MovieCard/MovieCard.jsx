import styles from "./MovieCard.module.css";
import { BsPlayFill, BsPlusLg } from "react-icons/bs";
import { IoIosThumbsUp, IoIosArrowDown } from "react-icons/io";

/**
 * A Netflix-style landscape card. Hovering scales the card up slightly
 * from its top edge and drops an info panel below with actions/metadata.
 * The card lives inside a fixed-size slot so the row layout doesn't
 * reflow when a card scales up on hover.
 * @param {{
 *   movie: import("../../Data/Data.js").Movie,
 *   index?: number,
 *   hoveredIndex?: number | null,
 *   onHoverStart?: () => void,
 *   onHoverEnd?: () => void,
 * }} props
 */
function MovieCard({ movie, index = 0, hoveredIndex = null, onHoverStart, onHoverEnd }) {
  const genres = movie?.genres || [];
  const slotClasses = [
    styles.cardSlot,
    hoveredIndex === index ? styles.cardSlotHovered : "",
  ]
    .join(" ")
    .trim();

  return (
    <div
      className={slotClasses}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
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
            {genres.map((genre, genreIndex) => (
              <span key={genreIndex}>
                {genre}
                {genreIndex < genres.length - 1 && <span className={styles.dot}>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;