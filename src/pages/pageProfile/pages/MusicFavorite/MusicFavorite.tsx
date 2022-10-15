import { IoSearchOutline, IoShareSocial } from 'react-icons/io5';
import { MusicFavoriteEmpty } from './MusicFavoriteEmpty';

export const MusicFavorite = () => {
	return (
		<div className='music-loved-content'>
			<div className='container'>
				<h1>
					<span className='music-loved-favorite'>0 Canciones favoritas</span>
				</h1>

				<div className='loved-heading'>
					<div className='music-loved-share'>
						<button>
							<IoShareSocial
								size={18}
								color='white'
							/>
						</button>
					</div>
					<div className='music-loved-filter'>
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
				<MusicFavoriteEmpty />
			</div>
		</div>
	);
};
