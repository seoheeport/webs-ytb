import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';

const Search =()=>{
  const { searchId } = useParams(); //searchID 파라미터 가져옴, (사용자가 입력한 검색어)
  const [videos, setVideos] = useState([]);
  useEffect(()=>{ // 컴포넌트가 마운트 되거나 [searchID] 변경될 때마다 API 호출
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
    .then(response => response.json()) //json 으로 파싱
    .then(result =>{
      console.log(result);
      setVideos(result.items);
    })
    .catch(error => console.log(error));
  },[searchId]);

  return(
    <Main
      title="유튜브 검색"
      description="유튜브 검색 결과"
    >
      <section id='searchPage'>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
      </section>
    </Main>
  )
}

export default Search