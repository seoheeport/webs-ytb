import React from 'react'
import { Link } from 'react-router-dom';

import { gsapData } from '../../data/gsap';

function Gsap() {
  return (
    <section>
      <h2>GSAP</h2>
      <ul className='videos'>
        {gsapData.map((vdo, key)=>(
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

export default Gsap