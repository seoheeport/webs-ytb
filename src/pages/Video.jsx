import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Main from '../components/section/Main';
import ReactPlayer from 'react-player'

import { FaRegThumbsUp } from "react-icons/fa";
import { GoComment } from "react-icons/go";

const Video =()=>{
	const { videoId } = useParams();
	const [videoDetail, setVideoDetail] = useState(null);
	const [descActive, setDescActive] = useState(false);
	useEffect(() => {
		fetch(
				`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
		)
		.then(response => response.json())
		.then(result => {
				console.log(result.items);
				setVideoDetail(result.items[0])
		})
		.catch(error => console.log(error));
	}, [videoId]);


	return(
		<Main
			title="유튜브 비디오"
			description="유튜브 영상을 볼 수 있습니다."
		>
			<section id='videoViewPage'>
				{videoDetail&&(
					<div className="video__view">
						<div className="video__play">
							<ReactPlayer
								playing={false}
								url={`https://www.youtube.com/watch?v=${videoId}`}
								width='100%'
								height='100%'
								style={{position:'absolute', top:0, left:0}}
							/>
						</div>
						<div className="video__info">
							<h2 className="video__title">{videoDetail.snippet.title}</h2>
							<div className="video__channel">
								<Link to={`/channel/${videoDetail.snippet.channelId}`} className="channelId">
									<span>{videoDetail.snippet.channelTitle}</span>
								</Link>
								<div className="count">
									<span className="view"><strong>조회수</strong> {videoDetail.statistics.viewCount}</span>
									<span className="like"><FaRegThumbsUp />{videoDetail.statistics.likeCount}</span>
									<span className="comment"><GoComment />{videoDetail.statistics.commentCount}</span>
								</div>
							</div>
							<div className={`video__desc ${descActive? 'active': ''}`} onClick={()=>{setDescActive(!descActive)}}>
								{videoDetail.snippet.description}
							</div>
						</div>

					</div>
				)}
			</section>
		</Main>
	)
}

export default Video