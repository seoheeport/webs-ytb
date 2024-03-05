import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';

import VideoSearch from '../components/videos/VideoSearch';
import { fetchFromAPI } from '../utils/api'

const Search =()=>{
  const { searchId } = useParams(); //searchID 파라미터 가져옴, (사용자가 입력한 검색어)
  const [videos, setVideos] = useState([]);
	const [nextPageToken, setNextPageToken] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		setVideos([]);
		fetchVideos(searchId);
		setLoading(true);
	},[searchId]);
	const fetchVideos=(query, pageToken='')=>{
		fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
			.then((data)=>{
				setNextPageToken(data.nextPageToken);
				setVideos((prevVideos)=>[...prevVideos, ...data.items]);
				setLoading(false);
			})
			.catch((error)=>{
				console.error('Error fetching data:', error);
				setLoading(false);
			})
	}
	const handleLoadMore =()=>{
		if(nextPageToken){
			fetchVideos(searchId, nextPageToken);
		}
	}

	const loadingClass = loading? 'isLoading' : 'isLoaded';

  return(
    <Main
      title="유튜브 검색"
      description="유튜브 검색 결과"
    >
      <section id='searchPage' className={loadingClass}>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
				{nextPageToken && (
					<div className="video__more">
						<button onClick={handleLoadMore}>더 보기</button>
					</div>
				)}
      </section>
    </Main>
  )
}

export default Search