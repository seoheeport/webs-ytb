import React, {useState, useEffect} from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards';
import { websiteData } from '../data/website';

const Website =()=>{
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		},300)
	},[])
	const loadingClass = loading?'isLoading' : 'isLoaded';
  return(
    <Main
      title="웹 표준"
      description="웹 표준 유튜브"
    >
      <section className={loadingClass}>
				<h2>웹 표준</h2>
				<VideoCards vdoData={websiteData}/>
      </section>
    </Main>
  )
}

export default Website