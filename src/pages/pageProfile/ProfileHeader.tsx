import { NavLink } from 'react-router-dom';
import { useContextDeezer } from '../../hooks/useContextDeezer';

const ProfileHeader = () => {
	const { idProfile } = useContextDeezer();

	return (
		<div className='profile-header-user'>
			<div className='container'>
				<div className='profile'>
					<div className='profile-image profile-image-size'>
						<figure>
							<img
								src='https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg'
								alt='Image Profile'
								width={'264px'}
								height={'264px'}
							/>
						</figure>
					</div>
					<div className='profile-info'>
						<h1>Rafael Alvarez</h1>
						<ul>
							<li> 0 seguidores</li>
							<li>0 seguidos</li>
						</ul>
					</div>
				</div>
				<div className='navbar-profile'>
					<div className='container'>
						<ul className='navbar-bar'>
							<li className='navbar-item'>
								<NavLink
									to={`/profile/${idProfile}`}
									className={({ isActive }) => (isActive ? 'active-item' : undefined)}
									end>
									Destacados
								</NavLink>
							</li>
							<li className='navbar-item'>
								<NavLink
									to={`/profile/${idProfile}/loved`}
									className={({ isActive }) => (isActive ? 'active-item' : undefined)}>
									Canciones Favoritas
								</NavLink>
							</li>
							<li className='navbar-item'>
								<NavLink
									to={`/profile/${idProfile}/playlist`}
									className={({ isActive }) => (isActive ? 'active-item' : undefined)}>
									Playlist
								</NavLink>
							</li>
							<li className='navbar-item'>
								<NavLink
									to={`/profile/${idProfile}/albums`}
									className={({ isActive }) => (isActive ? 'active-item' : undefined)}>
									Albumes
								</NavLink>
							</li>
							<li className='navbar-item'>
								<NavLink
									to={`/profile/${idProfile}/artists`}
									className={({ isActive }) => (isActive ? 'active-item' : undefined)}>
									Artistas
								</NavLink>
							</li>
							<li className='navbar-item'>
								<NavLink
									to={`/profile/${idProfile}/podcasts`}
									className={({ isActive }) => (isActive ? 'active-item' : undefined)}>
									Podcasts
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
