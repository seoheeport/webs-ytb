import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';

import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';
import { IoIosArrowDown } from "react-icons/io";

const Channel =()=>{
	const { channelId } = useParams();
	const [channelDetail, setChannelDetail] = useState(null);
	const [channelVideo, setChannelVideo] = useState([]);
	const [loading, setLoading] = useState(true);
	const [nextPageToken, setNextPageToken]= useState(null);
	const [descActive, setDescActive] = useState(false);

	useEffect(()=>{
		const fetchResults = async()=>{
			try{
				const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
				setChannelDetail(data.items[0]);

				const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
				setChannelVideo(videosData.items);
				setNextPageToken(videosData.nextPageToken);
			}catch(error){
				console.error('Error fetching data:', error);
			}finally{
				setLoading(false);
			}
		};
		fetchResults();
	},[channelId]);

	// useEffect(() => {
	// 	fetch(
	// 			`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
	// 	)
	// 	.then(response => response.json())
	// 	.then(result => {
	// 		setChannelDetail(result.items[0]);
	// 		setLoading(false);
	// 	})
	// 	.catch(error => console.log(error));

	// 	fetch(
	// 			`https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet%2Cid&order=date&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
	// 	)
	// 	.then(response => response.json())
	// 	.then(result => {
	// 		setChannelVideo(result.items);
	// 		setLoading(false);
	// 	})
	// 	.catch(error => console.log(error));
	// }, [channelId]);

	const channelPageClass = loading ? 'isLoading' : 'isLoaded';
	const loadMoreVideos = async()=>{
		if(nextPageToken){
			const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
			setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
			setNextPageToken(videosData.nextPageToken);
		}
	}

	const formatNumber = n =>{
		if (n < 1e3) return n
		if (n >= 1e3 && n < 1e4) return +(n / 1e3) + ' 천'
		if (n >= 1e4 && n < 1e8) return +(n / 1e4) + ' 만'
		if (n >= 1e8 && n < 1e12) return +(n / 1e8) + ' 억'
		if (n >= 1e12) return +(n / 1e12) + '조'
	}
  return(
    <Main
      title="유튜브 채널"
      description="유튜브 채널 페이지 입니다."
    >
			<section id="channel" className={channelPageClass}>
			{channelDetail&&(
				<div className="channel__inner">
					{
						typeof channelDetail.brandingSettings.image != "undefined" ?
						<div className="channel__header" style={{backgroundImage:`url(${channelDetail.brandingSettings.image.bannerExternalUrl})`}}></div> : <div class="channel__noheader"></div> 
					}
					<div className="channel__info">
						<div className="circle">
							<img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
						</div>
						<h3 className="title">{channelDetail.snippet.title}</h3>
						<div className={`desc ${descActive ? 'active' : ''}`}>
							<span className="txt">{channelDetail.snippet.description}</span>
							<div className="btn__wrap">
								<button
									className="btn__more"
									onClick={()=>setDescActive(!descActive)}
								><IoIosArrowDown /></button>
							</div>
						</div>
						<div className="info">
							<span><span>구독자</span>{formatNumber(channelDetail.statistics.subscriberCount)}명</span>
							<span><span>동영상</span>{channelDetail.statistics.videoCount} 개</span>
						</div>
					</div>
					<div className="channel__video video__inner search">
						<VideoSearch videos={channelVideo}/>
						{nextPageToken&&
						<div className="video__more">
							<button onClick={loadMoreVideos}>더 보기</button>
						</div>
						}
					</div>
				</div>
			)}
			</section>
    </Main>
  )
}

export default Channel
