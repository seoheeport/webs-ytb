import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function VideoSlider({videos, title, id}) {
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },500)
  },[])

  const loadingClass = loading? 'isLoading':'isLoaded';

  return (
    <section id={id} className={loadingClass}>
      <h2>{title}</h2>
      <div className="videos__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation]}
					navigation={
						{
							prevEl: `#${id} .swiper__prev`,
							nextEl: `#${id} .swiper__next`,
						}
					}
          breakpoints={
            {
              640:{
                slidesPerView:2,
                spaceBetween:20,
              },
              1024:{
                slidesPerView:4,
                spaceBetween:20,
              },
            }
          }
        >
        {videos.map((vdo, key)=>(
          <SwiperSlide key={key}>
            <div className="vedeo__thumb play__icon">
              <Link to={`/video/${vdo.id.videoId}`}>
                <img src={vdo.snippet.thumbnails.medium.url} alt={vdo.snippet.title} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
				<div className="swiper-button-prev swiper__prev"></div>
				<div className="swiper-button-next swiper__next"></div>
      </div>
    </section>
  )
}

export default VideoSlider