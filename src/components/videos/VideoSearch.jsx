import React from 'react'
import { Link } from 'react-router-dom';

function VideoSearch({videos}) {
  console.log(videos)
  return (
    <div>
      {videos.map((video, idx) =>
        <div className='video' key={idx}>
          <div className='video__thumb'>
            <Link
              to={`/video/${video.id.videoId}`}
              style={{backgroundImage:`url(${video.snippet.thumbnails.high.url})`}}
            />
          </div>
          <div className='video__info'>
            <p className="title">
              <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoSearch