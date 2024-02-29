import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, } from 'swiper/modules';

import { channels } from '../../data/channel';

function Dogs() {
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 300)
	},[]);
	const loadingClass = loading? 'isLoading' : 'isLoaded';

  return (
    <section id='dogs' className={loadingClass}>
      <h2>🐕 강아지 채널</h2>
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