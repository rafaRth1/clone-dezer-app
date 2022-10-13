import { Link, NavLink } from 'react-router-dom';
import { useContextDeezer } from '../../../hooks/useContextDeezer';
import { IoAppsSharp, IoHeartOutline, IoMusicalNotesSharp } from 'react-icons/io5';
import { GiMicrophone } from 'react-icons/gi';

export const PageSidebar = () => {
	const { idProfile } = useContextDeezer();

	return (
		<div className='page-sidebar'>
			<div className='sidebar-header'>
				<div className='sidebar-header-logo'>
					<Link to={'/'}>
						<img
							src='https://e-cdn-files.dzcdn.net/cache/slash/images/common/logos/deezer.1a1741c7871c27ef0ecb572defe8593e.png'
							alt='sidebar-logo'
						/>
					</Link>
				</div>

				<div className='conversion-banner'>
					<p>
						Estás en Deezer Free. Actualízate y evita <br />
						anuncios gratuitamente por 1 mes.
					</p>
					<Link
						to={'/'}
						className='button-suscriber'>
						Suscribirse
					</Link>
				</div>
			</div>
			<div className='sidbebar-nav'>
				<div className='scroller-shadow-top'></div>
				<div className='scroller-shadow-bottom'></div>
				<nav className='sidebar-nav-content'>
					<ul className='sidebar-nav-list'>
						<li className='sidebar-nav-item'>
							<NavLink
								to={'/'}
								className={({ isActive }) => (isActive ? `active is-main` : 'is-main')}>
								<IoMusicalNotesSharp
									color='white'
									size={25}
								/>
								<span>Música</span>
							</NavLink>
						</li>
						<li className='sidebar-nav-item'>
							<NavLink
								to={'/podcasts'}
								className={({ isActive }) => (isActive ? `active is-main` : 'is-main')}>
								<GiMicrophone
									color='white'
									size={25}
								/>
								<span>Podcast</span>
							</NavLink>
						</li>
						<li className='sidebar-nav-item'>
							<NavLink
								to={'/explorar'}
								className={({ isActive }) => (isActive ? `active is-main` : 'is-main')}>
								<IoAppsSharp
									color='white'
									size={25}
								/>
								<span>Explorar</span>
							</NavLink>
						</li>
						<li className='sidebar-nav-item'>
							<NavLink
								to={`/profile/${idProfile}`}
								className={({ isActive }) => (isActive ? `active is-main` : 'is-main')}
								end>
								<IoHeartOutline
									color='white'
									size={25}
								/>
								<span>Favoritos</span>
							</NavLink>
						</li>

						<li className='sidebar-nav-item'>
							<NavLink
								to={`/profile/${idProfile}/loved`}
								className={({ isActive }) => (isActive ? `active` : undefined)}>
								<span>Canciones Favoritas</span>
							</NavLink>
						</li>
						<li className='sidebar-nav-item'>
							<NavLink to={`/profile/${idProfile}/playlist`}>
								<span>Playlist</span>
							</NavLink>
						</li>
						<li className='sidebar-nav-item'>
							<NavLink to={`/profile/${idProfile}/albums`}>
								<span>Álbumes</span>
							</NavLink>
						</li>
						<li className='sidebar-nav-item'>
							<NavLink to={`/profile/${idProfile}/artists`}>
								<span>Artistas</span>
							</NavLink>
						</li>
						<li className='sidebar-nav-item'>
							<NavLink to={`/profile/${idProfile}/podcasts`}>
								<span>Podcast</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
