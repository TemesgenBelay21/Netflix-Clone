import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";

function DisplayRow({ title, movies }) {
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title={title} movies={movies} />
    </div>
  );
}
export default DisplayRow;
