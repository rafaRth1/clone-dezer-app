import { Outlet } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';

export const Profile = () => {
	return (
		<main className='page-main-profile'>
			<ProfileHeader />
			<Outlet />
		</main>
	);
};
