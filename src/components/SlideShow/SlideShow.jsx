import React from 'react'
import styles from "./SlideShow.module.css"
import MovieCard from '../MovieCard/MovieCard'

function SlideShow({ title, movies }) {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cardRow}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default SlideShow