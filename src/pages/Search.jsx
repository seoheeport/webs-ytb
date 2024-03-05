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
		fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
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

	/*
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
	*/
	/* Raipid API 로 변경
	useEffect(()=>{
		fetchFromAPI(`search?part=snippet&q=${searchId}`)
		.then((data) => setVideos(data.items))
	},[searchId])
	*/

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