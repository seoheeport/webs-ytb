import React, {useState, useEffect} from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards';
import { gsapData } from '../data/gsap';

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
      title="Gsap"
      description="Gsap 검색"
    >
      <section id="gsap" className={loadingClass}>
				<h2>GSAP</h2>
				<VideoCards vdoData={gsapData} />
      </section>
    </Main>
  )
}

export default Youtube