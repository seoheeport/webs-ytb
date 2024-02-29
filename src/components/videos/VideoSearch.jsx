import React from 'react'
import { Link } from 'react-router-dom';

function VideoSearch({videos}) {
  return (
    <div className="videos">
      {videos.map((vdo, idx) =>
        <div className='videos__item' key={idx}>
					<Link to={`/video/${vdo.id.videoId}`}>
						<div className='video__thumb play__icon'>
							<img src={vdo.snippet.thumbnails.medium.url} alt={vdo.snippet.title} />
						</div>
						<div className='video__info'>
							<p className="title">{vdo.snippet.title}</p>
							<p className="author">{vdo.snippet.channelTitle}</p>
						</div>
					</Link>
        </div>
      )}
    </div>
  )
}

export default VideoSearch