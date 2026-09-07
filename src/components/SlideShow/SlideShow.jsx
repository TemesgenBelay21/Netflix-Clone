import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CARD_WIDTH = 300;
const GAP = 6;
const STEP = CARD_WIDTH + GAP;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/**
 * A Netflix-style horizontal row. The whole row slides page by page
 * (all fully visible cards at once) via the side handles, and can be
 * dragged horizontally with a mouse or by touch.
 * @param {{ title: string, movies: import("../../Data/Data.js").Movie[] }} props
 */
function SlideShow({ title, movies }) {
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(STEP * 6);
  const [maxOffset, setMaxOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const count = Array.isArray(movies) ? movies.length : 0;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const measure = () => {
      const style = window.getComputedStyle(el);
      const contentWidth =
        el.clientWidth -
        parseFloat(style.paddingLeft || "0") -
        parseFloat(style.paddingRight || "0");

      const perView = Math.max(1, Math.round(contentWidth / STEP) - 1);
      const nextPage = Math.max(STEP, perView * STEP);
      const totalWidth = count * STEP - GAP;
      const nextMax = Math.max(0, totalWidth - contentWidth);

      setPage(nextPage);
      setMaxOffset(nextMax);
      setOffset((current) => clamp(current, 0, nextMax));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  const slideNext = useCallback(() => {
    setOffset((current) => Math.min(current + page, maxOffset));
  }, [page, maxOffset]);

  const slidePrev = useCallback(() => {
    setOffset((current) => Math.max(current - page, 0));
  }, [page]);

  const handlePointerDown = (event) => {
    if (maxOffset <= 0) return;
    dragRef.current = {
      startX: event.clientX,
      startOffset: offset,
      active: false,
    };
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag) return;

    const delta = event.clientX - drag.startX;
    if (!drag.active && Math.abs(delta) > 6) {
      drag.active = true;
      setDragging(true);
    }
    if (!drag.active) return;

    setOffset(clamp(drag.startOffset - delta, 0, maxOffset));
  };

  const endPointerDrag = (event) => {
    const drag = dragRef.current;
    if (!drag) return;

    if (drag.active) {
      const delta = event.clientX - drag.startX;
      const snapped = clamp(
        Math.round((drag.startOffset - delta) / page) * page,
        0,
        maxOffset
      );
      setOffset(snapped);
      setDragging(false);
    }

    dragRef.current = null;
  };

  const canPrev = offset > 1;
  const canNext = offset < maxOffset - 1;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div
        ref={viewportRef}
        className={styles.viewport}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPointerDrag}
        onPointerCancel={endPointerDrag}
        onPointerLeave={endPointerDrag}
      >
        <div
          className={dragging ? `${styles.track} ${styles.dragging}` : styles.track}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {movies?.map((movie, index) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movie={movie}
              index={index}
              hoveredIndex={hoveredIndex}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        <div
          className={[
            styles.edge,
            styles.edgeLeft,
            canPrev ? styles.show : "",
          ].join(" ")}
        />
        <div
          className={[
            styles.edge,
            styles.edgeRight,
            canNext ? styles.show : "",
          ].join(" ")}
        />

        <button
          type="button"
          className={[
            styles.handle,
            styles.handlePrev,
            canPrev ? styles.show : "",
          ].join(" ")}
          onClick={slidePrev}
          disabled={!canPrev}
          aria-label="Scroll left"
        >
          <IoIosArrowBack />
        </button>
        <button
          type="button"
          className={[
            styles.handle,
            styles.handleNext,
            canNext ? styles.show : "",
          ].join(" ")}
          onClick={slideNext}
          disabled={!canNext}
          aria-label="Scroll right"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

export default SlideShow;