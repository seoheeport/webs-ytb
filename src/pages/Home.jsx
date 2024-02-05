import React from 'react';
import Main from '../components/section/Main';

import Today from '../components/contents/Today';
import Developer from '../components/contents/Developer';
import Website from '../components/contents/Website';
import Portfolio from '../components/contents/Portfolio';
import Youtube from '../components/contents/Youtube';

const Home =()=>{
  return(
    <Main
      title="메인"
      description="YTB 메인 입니다."
    >
      <Today />
      <Developer />
      <Website />
      <Portfolio />
      <Youtube />
    </Main>
  )
}

export default Home