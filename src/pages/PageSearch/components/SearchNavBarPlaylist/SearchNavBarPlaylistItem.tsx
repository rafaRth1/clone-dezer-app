import { useContextDeezer } from '../../../../hooks/useContextDeezer';
import { Spinner } from '../../../../components';
import { SearchResult } from '../../../../interfaces/interfaceSearch';
import { IoEllipsisHorizontalOutline, IoHeartOutline, IoMusicalNotesOutline, IoTimeOutline } from 'react-icons/io5';

export const SearchNavBarPlaylistItem = () => {
	const { valueSearch, loading } = useContextDeezer();

	return (
		<>
			{loading ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Spinner />
				</div>
			) : (
				<div className='container'>
					<h2>
						Canciones
						{/* <Link to={`/search/${search}/track`}></Link> */}
					</h2>

					<div className='musics-result-rows-all'>
						<div className='song'>Canción</div>
						<div className='artist'>Artista</div>
						<div className='album'>Álbum</div>
						<div className='time-song'>
							<IoTimeOutline size={20} />
						</div>
						<div className='check-song'>
							<input
								type='checkbox'
								className='check-music'
							/>
						</div>
					</div>

					<div className='music-result-data'>
						{valueSearch.map((value: SearchResult) => (
							<div
								key={value.id}
								className='music-result-data-content'>
								<div className='song-data'>
									<div className='song-data-image'>
										<img
											src={value.album.cover_small}
											alt='Imagen Music'
											width={'40'}
											height={'40'}
										/>
									</div>
									<p>{value.title}</p>
									<div className='actions-song-data'>
										<div>
											<IoMusicalNotesOutline size={20} />
										</div>
										<div>
											<IoHeartOutline size={20} />
										</div>
										<div>
											<IoEllipsisHorizontalOutline size={20} />
										</div>
									</div>
								</div>
								<div className='artist-data'>
									<p>{value.artist.name}</p>
								</div>
								<div className='album-data'>
									<p>
										{value.album.title.length > 17
											? value.album.title.slice(0, 20).concat('...')
											: value.album.title}
									</p>
								</div>

								<div className='time-song-data'>
									<p>{Math.floor((value.duration / 60) % 60)}</p>:
									<p>{value.duration % 60 < 10 ? '0' + (value.duration % 60) : value.duration % 60}</p>
								</div>

								<div className='check-song'>
									<input
										type='checkbox'
										className='check-music'
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};
