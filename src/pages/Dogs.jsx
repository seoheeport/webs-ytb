import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Main from '../components/section/Main';
import { channels } from '../data/channel';

const Dogs =()=>{
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 500)
  },[])
  const loadingClass = loading? 'isLoading':'isLoaded';

  return(
    <Main
      title="강아지 유튜브"
      description="강아지 유튜버입니다."
    >
      <section id="dogsPage" className={loadingClass}>
        <h2>🐕 강아지 채널</h2>
        <div className="dogs__inner">
          {channels.map((chnItem, key)=>(
            <div className="dogs" key={key}>
							<Link to={`/channel/${chnItem.id.channelId}`}>
								<div className="dogs__img play__icon">
									<img src={chnItem.snippet.thumbnails.medium.url} alt={chnItem.snippet.title} />
								</div>
								<div className="dogs__info">{chnItem.snippet.title}</div>
							</Link>
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default Dogs
