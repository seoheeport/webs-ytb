import React, {useState, useEffect} from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards';
import { dogsData } from '../data/dogs';

const Youtube =()=>{
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		},300)
	},[])
	const loadingClass = loading? 'isLoading' : 'isLoaded';
  return(
    <Main
      title="시츄"
      description="시츄 유튜브"
    >
      <section id="gsap" className={loadingClass}>
				<h2>시츄</h2>
				<VideoCards vdoData={dogsData} />
      </section>
    </Main>
  )
}

export default Youtube