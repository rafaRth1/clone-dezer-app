import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { ArtistPicture } from '../../../interfaces/interfacePictureArtist';
import { IoHeartOutline, IoPlaySharp } from 'react-icons/io5';
import { SliderComponent } from '../../../components/Carousel';

export const SectionArtistsFavorite = () => {
	const { artistsFavorites, setArtistsFavorites, setShowModalNotification } = useContext(AppContext);

	const handleRemoveArtistFavorite = (id: string) => {
		const updateArtistsFavorites = artistsFavorites.filter((artistFavorite) => artistFavorite.id !== id);
		setArtistsFavorites([...updateArtistsFavorites]);
		setShowModalNotification(true);
	};

	return (
		<section className='channel-section'>
			<div className='channel-artists-favorite'>
				<div className='container'>
					<div className='carousel-artists-favorite'>
						<SliderComponent subTitle='Tus Artistas Favoritos'>
							{artistsFavorites.map((artist: ArtistPicture) => (
								<div
									key={artist.id}
									className='card-slider card-slider-artists'>
									<figure>
										<>
											<img
												src={artist.images[0].url}
												alt='Image Artist'
											/>
										</>
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
															onClick={() => handleRemoveArtistFavorite(artist.id)}
														/>
													</button>
												</div>
											</li>
										</ul>
									</figure>
									<p className='artist-name'>{artist.name}</p>
									<p className='followers'>{`${artist.followers.total.toLocaleString('en-US')} Seguidores`}</p>
								</div>
							))}
						</SliderComponent>
					</div>
				</div>
			</div>
		</section>
	);
};
