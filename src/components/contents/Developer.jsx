import React from 'react';
import { Link } from 'react-router-dom';
import { channels } from '../../data/channel';

function Developer() {
  return (
    <section id='developer'>
      <h2>🐕오늘의 강아지 입니다.</h2>
      <div className="developer__inner">
        {channels.map((channel, key)=>
          <div className="developer" key={key}>
            <div className="developer__img play__icon">
              <Link to={`channel/${channel.id.channelId}`}>
                <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title} />
              </Link>
            </div>
            <div className="developer__info">{channel.snippet.title}</div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Developer