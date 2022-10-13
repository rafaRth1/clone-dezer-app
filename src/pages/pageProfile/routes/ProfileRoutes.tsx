import { Navigate, Route, Routes } from 'react-router-dom';
import { Featured, MusicFavorite, ProfileAlbums, ProfileArtists, ProfilePlaylist, ProfilePodcasts } from '../pages';
import { Profile } from '../Profile';

export const ProfileRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Profile />}>
				<Route
					path='/:idProfile'
					element={<Featured />}
				/>
				<Route
					path='/:idProfile/loved'
					element={<MusicFavorite />}
				/>
				<Route
					path='/:idProfile/playlist'
					element={<ProfilePlaylist />}
				/>
				<Route
					path='/:idProfile/albums'
					element={<ProfileAlbums />}
				/>
				<Route
					path='/:idProfile/artists'
					element={<ProfileArtists />}
				/>
				<Route
					path='/:idProfile/podcasts'
					element={<ProfilePodcasts />}
				/>

				<Route
					path='/*'
					element={<Navigate to='/profile' />}
				/>
			</Route>
		</Routes>
	);
};
