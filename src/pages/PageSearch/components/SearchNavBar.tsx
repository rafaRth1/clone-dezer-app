import { NavLink } from 'react-router-dom';

interface Props {
	search: string | undefined;
}

export const SearchNavBar = ({ search }: Props) => {
	/* active-searct-item */

	return (
		<div className='search-navbar'>
			<nav className='content-navbar'>
				<div className='container'>
					<ul className='navbar-nav-search'>
						<li className='navbar-search-item '>
							<NavLink
								to={`/search/${search}`}
								className={({ isActive }) => (isActive ? 'active-searct-item' : undefined)}
								end>
								Todo
							</NavLink>
						</li>
						<li className='navbar-search-item'>
							<NavLink
								to={`/search/${search}/playlist`}
								className={({ isActive }) => (!isActive ? undefined : 'active-searct-item')}>
								Playlist
							</NavLink>
						</li>
						<li className='navbar-search-item'>
							<NavLink
								to={`/search/${search}/track`}
								className={({ isActive }) => (!isActive ? undefined : 'active-searct-item')}>
								Canciones
							</NavLink>
						</li>
						<li className='navbar-search-item'>
							<NavLink
								to={`/search/${search}/album`}
								className={({ isActive }) => (!isActive ? undefined : 'active-searct-item')}>
								Albumes
							</NavLink>
						</li>
						<li className='navbar-search-item'>
							<NavLink
								to={`/search/${search}/artist`}
								className={({ isActive }) => (!isActive ? undefined : 'active-searct-item')}>
								Artistas
							</NavLink>
						</li>
						<li className='navbar-search-item'>
							<NavLink
								to={`/search/${search}/show`}
								className={({ isActive }) => (!isActive ? undefined : 'active-searct-item')}>
								Podcasts
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
