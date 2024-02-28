import React from 'react';
import Main from '../components/section/Main';
import { Link } from 'react-router-dom';

import { websiteData } from '../data/website';

const Website =()=>{
  return(
    <Main
      title="웹 표준"
      description="웹 표준 유튜브"
    >
      <section>
        <ul className="videos">
          {websiteData.map((vdo, key)=>(
            <li key={key} className="videos__item play__icon">
              <div>
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

export default Website