import React from 'react';
import { Link } from 'react-router-dom';

import { websiteData } from '../../data/website';

function Website() {
  return (
    <section>
      <h2>웹 표준</h2>
      <ul className='videos'>
        {websiteData.map((vdo, key)=>(
          <li className="videos__item" key={key}>
            <div className="vedeo__thumb play__icon">
              <Link to={vdo.id.videoId}>
                <img src={vdo.snippet.thumbnails.medium.url} alt={vdo.snippet.title} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Website