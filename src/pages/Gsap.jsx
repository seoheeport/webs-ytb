import React from 'react';
import Main from '../components/section/Main';

import { gsapData } from '../data/gsap';
import { Link } from 'react-router-dom';

const Gsap =()=>{
  return(
    <Main
      title="Gsap"
      description="Gsap 검색"
    >
      <section id="gsap">
        <ul className="videos">
          {gsapData.map((vdo, key)=>(
            <li key={key} className="videos__item">
              <div className="vedeo__thumb play__icon">
                <Link to={vdo.id.videoId}> 
                  <img src={vdo.snippet.thumbnails.medium.url} alt={vdo.snippet.title} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  )
}

export default Gsap