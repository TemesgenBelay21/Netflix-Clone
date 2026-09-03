import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";

/**
 * A single horizontal row of movies.
 * @param {{ title: string, movies: import("../../Data/Data.js").Movie[] }} props
 */
function DisplayRow({ title, movies }) {
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title={title} movies={movies} />
    </div>
  );
}
export default DisplayRow;
