import { useParams } from 'react-router-dom';
import useFetchSearchDezzer from '../../../hooks/useFetchSearchDezzer';
import { IoHeartOutline, IoPlaySharp } from 'react-icons/io5';
import { ArtistNavbar } from '../../../interfaces/interfaceArtistNavbar';
import { Spinner } from '../../../components';

export const SearchNavBarArtist = () => {
	const { search } = useParams();
	const [getResultArtist, loading] = useFetchSearchDezzer(`/search/artist?q=${search}&output=jsonp`);

	return (
		<div className='container'>
			<h2>{getResultArtist.total} artistas</h2>
			{loading ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						marginTop: '5rem',
					}}>
					<Spinner />
				</div>
			) : (
				<ul className='content-search-result-artist'>
					{getResultArtist.data.map((artist: ArtistNavbar) => (
						<li
							key={artist.id}
							className='result-playlist-item'>
							<div className='result-artist-image'>
								<figure>
									<img
										src={artist.picture_medium}
										alt='Image Artist Artist'
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
									</ul>
								</figure>
								<p className='artist-name'>{artist.name}</p>
								<p>{artist.nb_fan.toLocaleString('en-US')} seguidores</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
