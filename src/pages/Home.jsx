import React from 'react';
import Main from '../components/section/Main';
import Today from '../components/contents/Today';
import Dogs from '../components/contents/Dogs';

/* VideoSlider 컴포넌트 화
* import Cats from '../components/contents/Cats';
* import Website from '../components/contents/Website';
* import Gsap from '../components/contents/Gsap';
*/
import VideoSlider from '../components/videos/VideoSlider';
import { catsData } from '../data/cats';
import { gsapData } from '../data/gsap';
import { websiteData } from '../data/website';

const Home =()=>{
  return(
    <Main
      title="메인"
      description="YTB 메인 입니다."
    >
      <Today />
      <Dogs />
      <VideoSlider videos={catsData} title="🐈 고양이들" id="cats" />
      <VideoSlider videos={gsapData} title="GSAP" id="gsap" />
      <VideoSlider videos={websiteData} title="웹 표준" id="website" />
    </Main>
  )
}

export default Home