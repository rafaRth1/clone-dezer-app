import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURLDeezer } from '../../../config';
import fetchJsonp from 'fetch-jsonp';
import { SliderComponent } from '../../../components/Carousel';
import { AppContext } from '../../../context/AppContext';
import { PlaylistTop } from '../../../interfaces/interfacePlaylistTop';
import { IoEllipsisHorizontalOutline, IoHeartOutline, IoPlaySharp } from 'react-icons/io5';

export const SectionPlaylistTop = () => {
	const [getPlaylistPopular, setGetPlaylistPopular] = useState([]);
	const { setGetArrayMusic } = useContext(AppContext);

	useEffect(() => {
		fetchJsonp(`${baseURLDeezer}/chart/0/playlists&output=jsonp`)
			.then(function (response) {
				return response.json();
			})
			.then((json) => setGetPlaylistPopular(json?.data))
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const handleGetMusic = async (playlist: PlaylistTop) => {
		// Petition handle get tracks
		console.log('Paso 1');
		await fetchJsonp(`${baseURLDeezer}/playlist/${playlist.id}&output=jsonp`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				setGetArrayMusic(json.tracks.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section className='channel-section'>
			<div className='channel_playlist-recommend'>
				<div className='container'>
					<div className='slider-playlist-recommend'>
						<SliderComponent subTitle='Playlist Top'>
							{getPlaylistPopular.map((playlist: PlaylistTop) => (
								<div
									key={playlist.id}
									className='card-slider card-playlist-recommend'>
									<Link to={`/playlist/${playlist.id}`}>
										<figure>
											<>
												<img
													src={playlist.picture_xl}
													alt='Image Playlist'
												/>
											</>
											<ul className='action'>
												<li className='action-item'>
													<div className='action-item-play'>
														<button onClick={() => handleGetMusic(playlist)}>
															<IoPlaySharp
																color='#000'
																size={20}
															/>
														</button>
													</div>
												</li>
												<li className='action-item '>
													<div className='action-item-play'>
														<button className='action-item-tempo-btn'>
															<IoHeartOutline
																color='#000'
																size={20}
																onClick={() => console.log('Play')}
															/>
														</button>
													</div>
												</li>
												<li className='action-item'>
													<div className='action-item-play'>
														<button className='action-item-tempo-btn'>
															<IoEllipsisHorizontalOutline
																color='#000'
																size={20}
																onClick={() => console.log('Play')}
															/>
														</button>
													</div>
												</li>
											</ul>
										</figure>
									</Link>
									<p className='playlist-name'>{playlist.title}</p>
									<p className='number-tracks'>{`${playlist.nb_tracks} canciones`}</p>
								</div>
							))}
						</SliderComponent>
					</div>
				</div>
			</div>
		</section>
	);
};
