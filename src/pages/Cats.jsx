import React, { useState, useEffect } from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards';
import { catsData } from '../data/cats';

const Cats =()=>{
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 300)
	},[])
	const loadingClass = loading?'isLoading' : 'isLoaded';

  return(
    <Main
      title="고양이들"
      description="고양이"
    >
      <section id="cats" className={loadingClass}>
				<h2>🐈 고양이들</h2>
				<VideoCards vdoData={catsData}/>
      </section>
    </Main>
  )
}

export default Cats