import React from 'react'
import { Link } from 'react-router-dom';

function VideoCards({vdoData}) {
	return (
		<ul className="videos">
			{vdoData.map((vdo, key)=>(
				<li className="videos__item" key={key}>
					<div className="vedeo__thumb play__icon">
						<Link to={`/video/${vdo.id.videoId}`}>
							<img src={vdo.snippet.thumbnails.medium.url} alt={vdo.snippet.title} />
						</Link>
					</div>
				</li>
			))}
		</ul>
	)
}

export default VideoCards