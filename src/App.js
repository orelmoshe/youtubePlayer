import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import youtubeService from './api/youtubeService.js';
import { SearchBar, VideoDetails, VideoList } from './components';
import '../src/assets/styles/global.scss';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const handleSubmit = async (searchTerm) => {
		const res = await youtubeService.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: process.env.REACT_APP_API_KEY,
				q: searchTerm,
			},
		});
		setVideos(res.data.items);
		setSelectedVideo(res.data.items[0]);
	};
	useEffect(() => {
		handleSubmit('javascript');
	}, []);

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="main-container">
			<div className="header-container">
				<img src="https://floodframe.com/wp-content/uploads/2018/01/play_icon.png" alt="playIcon" width="34" style={{ marginRight: '5px' }} />
				<h1 className="app-header">YouTube Player</h1>
				<SearchBar onFormSubmit={handleSubmit} />
			</div>
			<Grid className="app-grid" container spacing={10}></Grid>
			<Grid item xs={12}>
				<Grid container spacing={10}>
					<Grid item xs={8} className="details-container">
						<VideoDetails video={selectedVideo} />
					</Grid>
					<Grid item xs={4}>
						<VideoList videos={videos} onVideoSelect={onVideoSelect} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
