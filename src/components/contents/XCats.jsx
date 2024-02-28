import React from 'react';
import { Link } from 'react-router-dom';

import { catsData } from '../../data/cats';

function Cats() {
  return (
    <section>
      <h2>🐈 고양이 입니다.</h2>
      <ul className='videos'>
        {catsData.map((vdo, key)=>(
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

export default Cats