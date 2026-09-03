import React from 'react'

// styling
import styles from './SlideShow.module.css'

import MovieCard from './../MovieCard/MovieCard';

// import swiper and its components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules"


function SlideShow({title,movies}) {
  return (
    
    <div>
      <h2 className={styles.title}   >{title}</h2>
      <div className={styles.Row}>   
        <Swiper modules={[Navigation]}
          navigation
          spaceBetween={10}
        slidesPerView={5.8}>    
          {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
        ))}
      </Swiper>
      </div>
     
    </div>
  )
}

export default SlideShow