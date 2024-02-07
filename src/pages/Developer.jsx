import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../components/section/Main';
import { channels } from '../data/channel';

const Developer =()=>{
  return(
    <Main
      title="강아지 유튜브"
      description="오늘의 강아지 유튜버입니다."
    >
      <section id="developerPage">
        <h2>🐕오늘의 강아지 입니다.</h2>
        <div className="developer__inner">
          {channels.map((chnItem, key)=>(
            <div className="developer" key={key}>
              <div className="developer__img play__icon">
                <img src={chnItem.snippet.thumbnails.medium.url} alt={chnItem.snippet.title} />
              </div>
              <div className="developer__info">{chnItem.snippet.title}</div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default Developer
