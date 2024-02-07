import React from 'react'

import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

function Today() {
  return (
    <section id='today'>
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