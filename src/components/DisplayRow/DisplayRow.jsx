import React from 'react'
import styles from "./DisplayRow.module.css"
import SlideShow from '../SlideShow/SlideShow'

function DisplayRow({ title, movies, isFirst }) {
  return (
    <div className={`${styles.row} ${isFirst ? styles.firstRow : ''}`}>
      <SlideShow title={title} movies={movies} />
    </div>
  )
}

export default DisplayRow
