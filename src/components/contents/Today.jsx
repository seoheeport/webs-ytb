import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import { todayText } from '../../data/today'

function Today() {
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 300)
	},[]);
	const loadingClass = loading? 'isLoading' : 'isLoaded';
  return (
    <section id='today' className={loadingClass}>
      <div className='today__inner'>
        <div className="today__thumb play__icon">
          <Link to={todayText[0].page}>
            <img src={todayText[0].snippet.thumbnails.medium.url} alt={todayText[0].snippet.title} />
          </Link>
        </div>
        <div className="today__text">
          <span className="today">Today</span>
          <h3 className="title">
            <Link to={todayText[0].page}>{todayText[0].snippet.title}</Link>
          </h3>
          <p className="desc">{todayText[0].snippet.description}</p>
          <div className="info">
            <span className="author">
              <Link to={`/channel/${todayText[0].snippet.channelId}`}>{todayText[0].snippet.channelTitle}</Link>
            </span>
            <span className="date">{todayText[0].snippet.publishedAt.substring(0,10)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Today