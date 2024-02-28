import React from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, } from 'swiper/modules';

import { channels } from '../../data/channel';

function Dogs() {
  return (
    <section id='dogs'>
      <h2>🐕 오늘의 강아지 입니다.</h2>
      <div className="dogs__inner">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          autoplay={
            {
              delay: 5000,
              disabledOnInteraction:false,
            }
          }
					speed={1000}
          modules={[Navigation, Autoplay]}
          loop={true}
          breakpoints={
            {
              640:{
                slidesPerView:4,
                spaceBetween:15,
              },
              1024:{
                slidesPerView:6,
                spaceBetween:20,
              },
            }
          }
        >
        {channels.map((channel, key)=>
          <SwiperSlide key={key}>
            <div className="dogs__img play__icon">
              <Link to={`channel/${channel.id.channelId}`}>
                <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title} />
              </Link>
            </div>
            <div className="dogs__info">{channel.snippet.title}</div>
          </SwiperSlide>
        )}
        </Swiper>
      </div>
    </section>
  )
}

export default Dogs