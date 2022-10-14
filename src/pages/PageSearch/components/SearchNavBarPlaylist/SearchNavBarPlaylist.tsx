import { Link, useParams } from 'react-router-dom';
import useFetchSearchDezzer from '../../../../hooks/useFetchSearchDezzer';
import { PlaylistArtist } from '../../../../interfaces/InterfacePlaylistsArtist';
import { IoEllipsisHorizontalOutline, IoPlaySharp, IoHeartOutline } from 'react-icons/io5';
import { Spinner } from '../../../../components';

export const SearchNavBarPlaylist = () => {
	const { search } = useParams();
	const [getResultPlaylist, loading] = useFetchSearchDezzer(`/search/playlist?q=${search}&output=jsonp`);

	return (
		<div className='container'>
			<h2>{getResultPlaylist.total} Playlist</h2>
			{loading ? (
				<Spinner />
			) : (
				<ul className='content-search-result-playlist'>
					{getResultPlaylist.data.map((playlist: PlaylistArtist) => (
						<li
							key={playlist.id}
							className='result-playlist-item'>
							<div className='result-playlist-image'>
								<Link to={`/search/${search}/playlist/${playlist.id}`}>
									<figure>
										<img
											src={playlist.picture_medium}
											alt='Image Playlist Artist'
										/>
										<ul className='action'>
											<li className='action-item'>
												<div className='action-item-play'>
													<button>
														<IoPlaySharp
															color='#000'
															size={20}
															onClick={() => console.log('Play')}
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
								<p className='artist-name-playlist'>
									{playlist.title.length >= 20 ? playlist.title.slice(0, 20).concat('...') : playlist.title}
								</p>
								<p className='number-tracks-playlist'>{playlist.nb_tracks} Canciones</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
