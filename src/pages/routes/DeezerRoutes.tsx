import { Navigate, Route, Routes } from 'react-router-dom';
import WebPlayer from '../../views/WebPlayer/WebPlayer';
import { Musica, Explorar, Playlist, PodCasts, Profile, Search } from '..';
import {
	SearchNavBarAlbum,
	SearchNavBarArtist,
	SectionResultSearctAll,
	SearchNavBarPlaylist,
	SearchNavBarPlaylistItem,
} from '../PageSearch/components';
import { ProfileRoutes } from '../pageProfile/routes/ProfileRoutes';

export const DeezerRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<WebPlayer />}>
				<Route
					index
					element={<Musica />}
				/>
				<Route
					path='podcasts'
					element={<PodCasts />}
				/>
				<Route
					path='explorar'
					element={<Explorar />}
				/>
				<Route
					path='profile/*'
					element={<ProfileRoutes />}
				/>

				<Route
					path='search/'
					element={<Search />}>
					<Route
						path=':search'
						element={<SectionResultSearctAll />}
					/>
					<Route
						path=':search/playlist'
						element={<SearchNavBarPlaylist />}
					/>
					<Route
						path=':search/track'
						element={<SearchNavBarPlaylistItem />}
					/>
					<Route
						path=':search/album'
						element={<SearchNavBarAlbum />}
					/>
					<Route
						path=':search/artist'
						element={<SearchNavBarArtist />}
					/>
					<Route
						path=':search/show'
						element={<SearchNavBarPlaylist />}
					/>
				</Route>
				<Route
					path='playlist/:id_playlist'
					element={<Playlist />}
				/>
			</Route>

			<Route
				path='/*'
				element={<Navigate to='/' />}
			/>
		</Routes>
	);
};
