import { IoAdd } from 'react-icons/io5';

export const ProfilePlaylist = () => {
	return (
		<div className='container'>
			<section className='channel-create-playlist'>
				<div className='container'>
					<h2>Playlist</h2>
				</div>
				<div className='container'>
					<div className='slider-create-playlist'>
						<ul>
							<li className='playlist-item'>
								<div className='content-playlist-item'>
									<div className='picture-image-playlist'>
										<IoAdd size={30} />
									</div>

									<div className='name-playlist'>
										<a href='#'>Crear una playlist</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};
