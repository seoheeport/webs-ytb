import React from 'react';
import Main from '../components/section/Main';

import { catsData } from '../data/cats';
import { Link } from 'react-router-dom';

const Cats =()=>{
  return(
    <Main
      title="고양이들"
      description="고양이"
    >
      <section id="cats">
        <ul className="videos">
          {catsData.map((vdo, key) =>(
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
    </Main>
  )
}

export default Cats