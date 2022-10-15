import { IoSearchOutline, IoShareSocial } from 'react-icons/io5';
import { AlbumFavoriteEmpty } from './AlbumFavoriteEmpty';

export const ProfileAlbums = () => {
	return (
		<div className='albums-loved-content'>
			<div className='container'>
				<h1>
					<span className='music-loved-favorite'>0 Albumes</span>
				</h1>

				<div className='albums-heading'>
					<div className='albums-loved-share'>
						<button>
							<IoShareSocial
								size={18}
								color='white'
							/>
						</button>
					</div>
					<div className='albums-loved-filter'>
						<div className='group-input-loved'>
							<IoSearchOutline
								size={18}
								color='white'
							/>
							<input
								type='text'
								placeholder='Busca dentro de las canciones'
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='container'>
				<AlbumFavoriteEmpty />
			</div>
		</div>
	);
};
