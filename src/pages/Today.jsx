import React from 'react';
import Main from '../components/section/Main';

import { todayText } from '../data/today';
import { Link } from 'react-router-dom';

const Today =()=>{
  return(
    <Main
      title="오늘의 추천영상"
      description="오늘의 추천 유튜브 영상입니다."
    >
      <section id="today">
        {todayText.map((vdo, key) =>
          <div className='today__inner' key={key}>
            <div className="today__thumb play__icon">
              <Link to={vdo.page}>
                <img src={vdo.snippet.thumbnails.medium.url} alt={vdo.snippet.title} />
              </Link>
            </div>
            <div className="today__text">
              <span className="today">Today</span>
              <h3 className="title">
                <Link to={vdo.page}>{vdo.snippet.title}</Link>
              </h3>
              <p className="desc">{vdo.snippet.description}</p>
              <div className="info">
                <span className="author">
                  <Link to={`/channel/${vdo.snippet.channelId}`}>{vdo.snippet.channelTitle}</Link>
                </span>
                <span className="date">{vdo.snippet.publishedAt.substring(0,10)}</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </Main>
  )
}

export default Today